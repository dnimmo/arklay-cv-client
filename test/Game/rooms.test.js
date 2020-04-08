import { 
    isUnlocked
    , anItemCanBeUsed
} from '../../src/Game/rooms';


describe('Game/rooms', () => {
    describe('item can be used in room check', () => {
        test('reports item can be used if there are any unlock requirements', () => {
            const room = 
                { availableDirections: 
                    [ { itemsThatCanBeUsed: ['TEST_ITEM'] } ] 
                };


            const expected = 
                true;

            
            const actual =
                anItemCanBeUsed(room);

            
            expect(actual)
                .toBe(expected);
        });


        test('reports that an item can not be used if there are no unlock requirements', () => {
            const room = 
                { availableDirections: 
                    [ { itemsThatCanBeUsed: [] } ] 
                };


            const expected = 
                false;

            
            const actual =
                anItemCanBeUsed(room);

            
            expect(actual)
                .toBe(expected);
        });
    });


    describe('room unlocked check', () => {
        const room = 
            { unlockRequirements: [ 'TEST_ITEM', 'TEST_ITEM_TWO'] };


        test('reports room is unlocked when correct items have been used', () => {
            const expected = 
                true; 
    

            const actual =
                isUnlocked({ 
                    room
                    , itemsUsed: ['TEST_ITEM', 'TEST_ITEM_TWO'] 
                });
    

            expect(actual)
                .toBe(expected);
        });


        test('reports room is still locked when correct items have not been used', () => {
            const expected = 
                false; 
    

            const actual =
                isUnlocked({ 
                    room
                    , itemsUsed: ['TEST_ITEM'] 
                });
    

            expect(actual)
                .toBe(expected);
        });
    });
});