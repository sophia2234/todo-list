import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import ToDoList from '../ToDoList';
import ListItemInput from '../ListItemInput';
import ActiveListItems from '../ActiveListItems';
import FinishedListItems from '../FinishedListItems';

describe('ToDoList', () => {
    let renderedComponent,
        renderedHeaderOne,
        renderedListItemInput,
        renderedActiveListItems,
        renderedFinishedListItems,

        expectedProps;

    const cacheChildren = () => {
        [
            renderedHeaderOne,
            renderedListItemInput,
            renderedActiveListItems,
            renderedFinishedListItems
        ] = renderedComponent.props.children;
    };

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<ToDoList {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();

        cacheChildren();
    };

    beforeEach(() => {
        renderComponent();
    });

    it('should render the outermost div', () => {
        expect(renderedComponent.type).toBe('div');
    });

    it('should render the header', () => {
        expect(renderedHeaderOne.type).toBe('h1');
        expect(renderedHeaderOne.props.className).toBe('header');
        expect(renderedHeaderOne.props.children).toBe('To Do List');
    });

    describe('ListItemInput', () => {
        it('should render the ListItemInput component', () => {
            expect(renderedListItemInput.type).toBe(ListItemInput);
            expect(renderedListItemInput.props.className).toBe('item-input');
            expect(renderedListItemInput.props.currentInput).toBe('');
            expect(renderedListItemInput.props).toHaveProperty('onTextChange');
            expect(renderedListItemInput.props).toHaveProperty('onSubmit');
        });
    });

    describe('ActiveListItems', () => {
        it('should render the ActiveListItems component', () => {
            expect(renderedActiveListItems.type).toBe(ActiveListItems);
            expect(renderedActiveListItems.props.className).toBe('active-items');
            expect(renderedActiveListItems.props.listItems).toEqual([]);
            expect(renderedActiveListItems.props).toHaveProperty('onClick');
        });
    });

    describe('FinishedListItems', () => {
        it('should render the FinishedListItems component', () => {
            expect(renderedFinishedListItems.type).toBe(FinishedListItems);
            expect(renderedFinishedListItems.props.className).toBe('finished-items');
            expect(renderedFinishedListItems.props).toHaveProperty('onClick');
            expect(renderedFinishedListItems.props).toHaveProperty('deleteFunction');
        });
    });
});
