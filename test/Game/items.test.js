import { 
    itemCanBeUsed
    , itemHasBeenPickedUp
    , itemHasBeenUsed 
} from '../../src/Game/items';


describe('Game/items', () => {
    describe('check to see if item has been used', () => {
        const item = 'TEST_ITEM';

        
        test('reports that item has been used if it appears in itemsUsed', () => {
            const inventory = { itemsUsed: [item] };
            
            
            const expected = 
              true;


            const actual =
              itemHasBeenUsed({ item, inventory });


            expect(actual)
                .toBe(expected);
        });


        test('reports that item has not been used if it does not appear in itemsUsed', () => {
            const inventory = { itemsUsed: [] };
          
          
            const expected = 
              false;


            const actual =
              itemHasBeenUsed({ item, inventory });


            expect(actual)
                .toBe(expected);
        });
    });


    describe('check to see if item has been picked up', () => {
        const item = 'TEST_ITEM';


        test('reports that item has not been picked up if it does not appear in inventory at all', () => {
            const expected = 
              false;


            const actual = 
              itemHasBeenPickedUp({
                  item,
                  inventory: { 
                      itemsHeld: []
                      , itemsUsed: []
                  }
              });


            expect(actual).toBe(expected);
        });


        test('reports that item has been picked up if it appears in held items', () => {
            const expected = 
              true;


            const actual = 
              itemHasBeenPickedUp({
                  item,
                  inventory: { 
                      itemsHeld: [ item ]
                      , itemsUsed: []
                  }
              });


            expect(actual).toBe(expected);
        });


        test('reports that item has been picked up if it appears in used items', () => {
            const expected = 
              true;


            const actual = 
              itemHasBeenPickedUp({
                  item,
                  inventory: { 
                      itemsHeld: [ ]
                      , itemsUsed: [ item ]
                  }
              });


            expect(actual).toBe(expected);
        });
    });


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