import { 
    isUnlocked
} from '../../src/Game/rooms';


describe('Game/rooms', () => {
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