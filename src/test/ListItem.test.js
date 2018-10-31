import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Chance from 'chance';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import ListItem from '../ListItem';

describe('ListItem', () => {
    const chance = new Chance();

    let renderedComponent,
        renderedListItemText,
        renderedButton,

        renderedActiveSquareIcon,

        renderedFinishedDiv,
        renderedFinishedSquareButton,
        renderedFinishedTrashButton,

        renderedFinishedSquareIcon,
        renderedFinishedTrashIcon,

        expectedProps;

    const cacheActiveChildren = () => {
        [
            renderedListItemText,
            renderedButton
        ] = renderedComponent.props.children;

        renderedActiveSquareIcon = renderedButton.props.children;
    };

    const cacheFinishedChildren = () => {
        [
            renderedListItemText,
            renderedFinishedDiv
        ] = renderedComponent.props.children;

        [
            renderedFinishedSquareButton,
            renderedFinishedTrashButton
        ] = renderedFinishedDiv.props.children;

        renderedFinishedSquareIcon = renderedFinishedSquareButton.props.children;
        renderedFinishedTrashIcon = renderedFinishedTrashButton.props.children;
    };

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<ListItem {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
    };

    beforeEach(() => {
        renderComponent();

        expectedProps = {
            item: chance.string(),
            isActive: chance.bool(),
            onClick: jest.fn(),
            deleteFunction: jest.fn()
        };
    });

    describe('list item is active', () => {
        beforeEach(() => {
            expectedProps.isActive = true;

            renderComponent();
            cacheActiveChildren();
        });

        it('should render the outermost div', () => {
            expect(renderedComponent.type).toBe('div');
            expect(renderedComponent.props.className).toBe('active-list-item');
        });

        it('should render the item text', () => {
            expect(renderedListItemText.type).toBe('p');
            expect(renderedListItemText.props.className).toBe('active-list-item-text');
            expect(renderedListItemText.props.children).toBe(expectedProps.item);
        });

        describe('button', () => {
            it('should render the button', () => {
                expect(renderedButton.type).toBe('button');
                expect(renderedButton.props.className).toBe('active-button');
            });

            it('should call the passed in function on click', () => {
                renderedButton.props.onClick();

                expect(expectedProps.onClick).toHaveBeenCalledTimes(1);
                expect(expectedProps.onClick).toHaveBeenCalledWith(expectedProps.item);
            });
        });

        it('should render the FontAwesomeIcon component', () => {
            expect(renderedActiveSquareIcon.type).toBe(FontAwesomeIcon);
            expect(renderedActiveSquareIcon.props.className).toBe('delete-button');
            expect(renderedActiveSquareIcon.props.icon).toBe('square');
        });
    });
    describe('list item is **not** active', () => {
        beforeEach(() => {
            expectedProps.isActive = false;

            renderComponent();
            cacheFinishedChildren();
        });

        it('should render the outermost div', () => {
            expect(renderedComponent.type).toBe('div');
            expect(renderedComponent.props.className).toBe('finished-list-item');
        });

        it('should render the item text', () => {
            expect(renderedListItemText.type).toBe('p');
            expect(renderedListItemText.props.className).toBe('finished-list-item-text');
            expect(renderedListItemText.props.children).toBe(expectedProps.item);
        });

        describe('square button', () => {
            it('should render the button', () => {
                expect(renderedFinishedSquareButton.type).toBe('button');
                expect(renderedFinishedSquareButton.props.className).toBe('finished-button');
            });

            it('should call the passed in function on click', () => {
                renderedFinishedSquareButton.props.onClick();

                expect(expectedProps.onClick).toHaveBeenCalledTimes(1);
                expect(expectedProps.onClick).toHaveBeenCalledWith(expectedProps.item);
            });

            it('should render the FontAwesomeIcon component', () => {
                expect(renderedFinishedSquareIcon.type).toBe(FontAwesomeIcon);
                expect(renderedFinishedSquareIcon.props.className).toBe('finished-delete-button');
                expect(renderedFinishedSquareIcon.props.icon).toBe('check-square');
            });
        });

        describe('trash button', () => {
            it('should render the button', () => {
                expect(renderedFinishedTrashButton.type).toBe('button');
                expect(renderedFinishedTrashButton.props.className).toBe('finished-button');
            });

            it('should call the passed in function on click', () => {
                renderedFinishedTrashButton.props.onClick();

                expect(expectedProps.deleteFunction).toHaveBeenCalledTimes(1);
                expect(expectedProps.deleteFunction).toHaveBeenCalledWith(expectedProps.item);
            });

            it('should render the FontAwesomeIcon component', () => {
                expect(renderedFinishedTrashIcon.type).toBe(FontAwesomeIcon);
                expect(renderedFinishedTrashIcon.props.className).toBe('finished-delete-button');
                expect(renderedFinishedTrashIcon.props.icon).toBe('trash');
            });
        });
    });

});
