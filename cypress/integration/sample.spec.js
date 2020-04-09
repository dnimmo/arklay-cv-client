import items from '../../src/Game/items';


const pressButton = 
  buttonKey => 
      cy.get(`[data-test=${buttonKey}]`).click();


describe('The game', () => {
    // it('allows you to start with sound', () => {
    //     cy.visit('http://localhost:3000');
    //     pressButton('ButtonStartWithSound');
    // });

    it('allows you to start without sound', () => {
        cy.visit('http://localhost:3000');
        pressButton('ButtonStartWithoutSound');
    });

    describe('the crowbar:', () => {
        const crowbar = items.CROWBAR;

        it('can be picked up', () => {
            pressButton('ButtonEnterENTRANCE');
            pressButton('ButtonEastHALLWAY_ONE');
            pressButton('ButtonNorthSTATUE_ROOM');
            pressButton('ButtonEastHALLWAY_THREE');
            pressButton('ButtonSouthGARAGE');
            pressButton('ButtonExamineRoom');
            cy.contains(`${crowbar.name} has been added`);
        });

        it('can be selected', () => {
            pressButton('ButtonInventory');
            pressButton('ButtonCROWBAR');
            cy.contains(crowbar.messageWhenNotUsed);
        });

        it('can be used', () => {
            pressButton('ButtonCloseInventory');
            pressButton('ButtonNorthHALLWAY_THREE');
            pressButton('ButtonEastSTAIRWAY_TWO');
            pressButton('ButtonUpstairsUPSTAIRS_STAIRWAY_TWO');
            pressButton('ButtonWestUPSTAIRS_HALLWAY_FOUR');
            pressButton('ButtonWestUPSTAIRS_HALLWAY_THREE');
            pressButton('ButtonNorthUPSTAIRS_AQUARIUM');
            pressButton('ButtonCROWBAR');
            cy.contains(crowbar.messageWhenUsed);
        });
    });

    describe('the utility key:', () => {
        const utilityKey = items.UTILITY_KEY;

        it('can be picked up', () => {
            pressButton('ButtonNorthUPSTAIRS_AQUARIUM');
            pressButton('ButtonExamineRoom');
            cy.contains(`${utilityKey.name} has been added`);
        });

        it('can be selected', () => {
            pressButton('ButtonInventory');
            pressButton('ButtonUTILITY_KEY');
            cy.contains(utilityKey.messageWhenNotUsed);
        });

        it('can be used', () => {
            pressButton('ButtonCloseInventory');
            pressButton('ButtonSouthUPSTAIRS_HALLWAY_THREE');
            pressButton('ButtonEastUPSTAIRS_HALLWAY_FOUR');
            pressButton('ButtonEastUPSTAIRS_STAIRWAY_TWO');
            pressButton('ButtonDownstairsSTAIRWAY_TWO');
            pressButton('ButtonWestHALLWAY_THREE');
            pressButton('ButtonWestSTATUE_ROOM');
            pressButton('ButtonSouthHALLWAY_ONE');
            pressButton('ButtonWestENTRANCE');
            pressButton('ButtonWestDINING_HALL');
            pressButton('ButtonNorthHALLWAY_TWO');
            pressButton('ButtonEastUTILITY_ROOM');
            pressButton('ButtonUTILITY_KEY');
            cy.contains(utilityKey.messageWhenUsed);

        });
    });

});