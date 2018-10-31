import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Chance from 'chance';
import ListItem from '../ListItem';
import FinishedListItems from '../FinishedListItems';

describe('FinishedListItems', () => {
    const chance = new Chance();

    let renderedComponent,

        expectedProps;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<FinishedListItems {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
    };

    beforeEach(() => {
        expectedProps = {
            finishedListItems: chance.n(chance.string, chance.d6() + 1),
            onClick: jest.fn(),
            deleteFunction: jest.fn()
        };

        renderComponent();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render the outermost div', () => {
        expect(renderedComponent.type).toBe('div');
        expect(renderedComponent.props.className).toBe('finished-list-items');
    });

    describe('list item', () => {
        it('should render a ListItem component for each passed in listItem', () => {
            expectedProps.finishedListItems.forEach((item, index) => {
                const renderedListItem = renderedComponent.props.children[index];

                expect(renderedListItem.type).toBe(ListItem);
                expect(renderedListItem.props.item).toBe(item);
                expect(renderedListItem.props.isActive).toBe(false);
                expect(renderedListItem.key).toBe(item);
                expect(renderedListItem.props.onClick).toBe(expectedProps.onClick);
                expect(renderedListItem.props.deleteFunction).toBe(expectedProps.deleteFunction);
            });
        });
    });
});
