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

        renderedFontAwesomeIcon,

        expectedProps;

    const cacheChildren = () => {
        [
            renderedListItemText,
            renderedButton
        ] = renderedComponent.props.children;

        renderedFontAwesomeIcon = renderedButton.props.children;
    };

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<ListItem {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();

        cacheChildren();
    };

    beforeEach(() => {
        renderComponent();

        expectedProps = {
            item: chance.string(),
            isActive: chance.bool(),
            onClick: jest.fn()
        };
    });

    describe('list item is active', () => {
        beforeEach(() => {
            expectedProps.isActive = true;

            renderComponent();
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
            expect(renderedFontAwesomeIcon.type).toBe(FontAwesomeIcon);
            expect(renderedFontAwesomeIcon.props.className).toBe('delete-button');
            expect(renderedFontAwesomeIcon.props.icon).toBe('square');
        });
    });
    describe('list item is **not** active', () => {
        beforeEach(() => {
            expectedProps.isActive = false;

            renderComponent();
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

        describe('button', () => {
            it('should render the button', () => {
                expect(renderedButton.type).toBe('button');
                expect(renderedButton.props.className).toBe('finished-button');
            });

            it('should call the passed in function on click', () => {
                renderedButton.props.onClick();

                expect(expectedProps.onClick).toHaveBeenCalledTimes(1);
                expect(expectedProps.onClick).toHaveBeenCalledWith(expectedProps.item);
            });
        });

        it('should render the FontAwesomeIcon component', () => {
            expect(renderedFontAwesomeIcon.type).toBe(FontAwesomeIcon);
            expect(renderedFontAwesomeIcon.props.className).toBe('finished-delete-button');
            expect(renderedFontAwesomeIcon.props.icon).toBe('check-square');
        });
    });

});
