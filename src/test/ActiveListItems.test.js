import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Chance from 'chance';
import ActiveListItems from '../ActiveListItems';
import ListItem from '../ListItem';

describe('ActiveListItems', () => {
    const chance = new Chance();

    let renderedComponent,

        expectedProps;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<ActiveListItems {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
    };

    beforeEach(() => {
        expectedProps = {
            listItems: chance.n(chance.string, chance.d6() + 1),
            onClick: jest.fn()
        };

        renderComponent();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render the outermost div', () => {
        expect(renderedComponent.type).toBe('div');
        expect(renderedComponent.props.className).toBe('active-list-items');
    });

    describe('list item', () => {
        it('should render a ListItem component for each passed in listItem', () => {
            expectedProps.listItems.forEach((item, index) => {
                const renderedListItem = renderedComponent.props.children[index];

                expect(renderedListItem.type).toBe(ListItem);
                expect(renderedListItem.props.item).toBe(item);
                expect(renderedListItem.props.isActive).toBe(true);
                expect(renderedListItem.key).toBe(item);
                expect(renderedListItem.props.onClick).toBe(expectedProps.onClick)
            });
        });
    });
});
