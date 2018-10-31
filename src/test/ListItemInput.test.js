import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Chance from 'chance';
import ListItemInput from '../ListItemInput';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

describe('ListItemInput', () => {
    const chance = new Chance();

    let renderedComponent,
        renderedInput,
        renderedButton,

        renderedFontAwesomeIcon,

        expectedProps;

    const cacheChildren = () => {
        [
            renderedInput,
            renderedButton
        ] = renderedComponent.props.children;

        renderedFontAwesomeIcon = renderedButton.props.children;
    };

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<ListItemInput {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();

        cacheChildren();
    };

    beforeEach(() => {
        expectedProps = {
            currentInput: chance.string(),
            onTextChange: jest.fn(),
            onSubmit: jest.fn()
        };

        renderComponent();
    });

    it('should render the outermost div', () => {
        expect(renderedComponent.type).toBe('div');
        expect(renderedComponent.props.className).toBe('new-list-item-input-container');
    });

    describe('list item input', () => {
        it('should render the input', () => {
            expect(renderedInput.type).toBe('input');
            expect(renderedInput.props.className).toBe('new-list-item-input');
            expect(renderedInput.props.value).toBe(expectedProps.currentInput);
        });

        it('should call the passed in text change function on change', () => {
            const expectedText = chance.string();
            renderedInput.props.onChange(expectedText);

            expect(expectedProps.onTextChange).toHaveBeenCalledTimes(1);
            expect(expectedProps.onTextChange).toHaveBeenCalledWith(expectedText);
        });
    });


    describe('button', () => {
        it('should render the button', () => {
            expect(renderedButton.type).toBe('button');
            expect(renderedButton.props.className).toBe('new-list-item-button');
        });

        it('should call the passed in submit function on click', () => {
            renderedButton.props.onClick();

            expect(expectedProps.onSubmit).toHaveBeenCalledTimes(1);
        });
    });

    describe('FontAwesomeIcon', () => {
        it('should render the FontAwesomeIcon component', () => {
            expect(renderedFontAwesomeIcon.type).toBe(FontAwesomeIcon);
            expect(renderedFontAwesomeIcon.props.className).toBe('new-list-item-icon');
            expect(renderedFontAwesomeIcon.props.color).toEqual('#eee');
            expect(renderedFontAwesomeIcon.props.icon).toBe('plus');
        });
    });
});
