import { itemCanBeUsed } from '../../src/Game/items';


describe('Game/items', () => {
    describe('check to see if item can be used in current room', () => {
        const availableDirections = 
          [ { itemsThatCanBeUsed: ['TEST_ITEM'] } ];


        test('reports that item can be used in current room', () => {
            const expected = 
              true;


            const actual =
              itemCanBeUsed({ 
                  availableDirections
                  , item: 'TEST_ITEM'
              });


            expect(actual)
                .toBe(expected);
        });


        test('reports that item can not be used in current room', () => {
            const expected = 
              false;


            const actual =
              itemCanBeUsed({ 
                  availableDirections
                  , item: 'TEST_ITEM_TWO'
              });


            expect(actual)
                .toBe(expected);
        });
    });
});