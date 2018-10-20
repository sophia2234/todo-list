import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import ToDoList from '../ToDoList';

describe('ToDoList', () => {
    let renderedComponent,

        expectedProps;

    const cacheChildren = () => {

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
});
