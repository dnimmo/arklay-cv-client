import items from '../../src/Game/items';
import { states } from '../../src/Application/ApplicationContext';


const pressButton = 
  buttonKey => 
      cy.get(`[data-test=${buttonKey}]`).click();


describe('The game', () => {
    it('allows you to start with sound', () => {
        cy.visit('http://localhost:3000');
        pressButton('ButtonStartWithSound');
    });

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

    describe('the handle:', () => {
        const handle = items.HANDLE;


        it('can be picked up', () => {
            pressButton('ButtonEastUTILITY_ROOM');
            pressButton('ButtonDownstairsBASEMENT_STAIRWAY');
            pressButton('ButtonEastBASEMENT_STORAGE_TWO');
            pressButton('ButtonExamineRoom');
            cy.contains(`${handle.name} has been added`);
        });


        it('can be selected', () => {
            pressButton('ButtonInventory');
            pressButton('ButtonHANDLE');
            cy.contains(handle.messageWhenNotUsed);
        });


        it('can be used', () => {
            pressButton('ButtonCloseInventory');
            pressButton('ButtonWestBASEMENT_STAIRWAY');
            pressButton('ButtonUpstairsUTILITY_ROOM');
            pressButton('ButtonWestHALLWAY_TWO');
            pressButton('ButtonNorthKITCHEN');
            pressButton('ButtonNorthWASTE_DISPOSAL');
            pressButton('ButtonEnterBASEMENT_WASTE_DISPOSAL');
            pressButton('ButtonHANDLE');
            cy.contains(handle.messageWhenUsed);
        });
    });


    describe('the small key:', () => {
        const smallKey = items.SMALL_KEY;


        it('can be picked up', () => {
            pressButton('ButtonEnterBASEMENT_WASTE_DISPOSAL');
            pressButton('ButtonEastBASEMENT_ITEM_ROOM');
            pressButton('ButtonExamineRoom');
            cy.contains(`${smallKey.name} has been added`);
        });


        it('can be selected', () => {
            pressButton('ButtonInventory');
            pressButton('ButtonSMALL_KEY');
            cy.contains(smallKey.messageWhenNotUsed);
        });


        it('can be used', () => {
            pressButton('ButtonCloseInventory');
            pressButton('ButtonSouthBASEMENT_STORAGE');
            pressButton('ButtonEastBASEMENT_STAIRWAY');
            pressButton('ButtonUpstairsUTILITY_ROOM');
            pressButton('ButtonWestHALLWAY_TWO');
            pressButton('ButtonSouthDINING_HALL');
            pressButton('ButtonEastENTRANCE');
            pressButton('ButtonEastHALLWAY_ONE');
            pressButton('ButtonNorthSTATUE_ROOM');
            pressButton('ButtonEastHALLWAY_THREE');
            pressButton('ButtonNorthSERVANTS_QUARTERS');
            pressButton('ButtonSMALL_KEY');
            cy.contains(smallKey.messageWhenUsed);
        });
    });


    describe('the statue head:', () => {
        const statueHead = items.STATUE_HEAD;


        it('can be picked up', () => {
            pressButton('ButtonNorthSERVANTS_QUARTERS');
            pressButton('ButtonExamineRoom');
            cy.contains(`${statueHead.name} has been added`);
        });


        it('can be selected', () => {
            pressButton('ButtonInventory');
            pressButton('ButtonSTATUE_HEAD');
            cy.contains(statueHead.messageWhenNotUsed);
        });


        it('can be used', () => {
            pressButton('ButtonCloseInventory');
            pressButton('ButtonSouthHALLWAY_THREE');
            pressButton('ButtonWestSTATUE_ROOM');
            pressButton('ButtonNorthSECRET_ROOM_TWO');
            pressButton('ButtonSTATUE_HEAD');
            cy.contains(statueHead.messageWhenUsed);
        });
    });


    describe('the wolf crest:', () => {
        const wolfCrest = items.WOLF_CREST;


        it('can be picked up', () => {
            pressButton('ButtonNorthSECRET_ROOM_TWO');
            pressButton('ButtonExamineRoom');
            cy.contains(`${wolfCrest.name} has been added`);
        });


        it('can be selected', () => {
            pressButton('ButtonInventory');
            pressButton('ButtonWOLF_CREST');
            cy.contains(wolfCrest.messageWhenNotUsed);
        });


        it('can be used', () => {
            pressButton('ButtonCloseInventory');
            pressButton('ButtonSouthSTATUE_ROOM');
            pressButton('ButtonSouthHALLWAY_ONE');
            pressButton('ButtonWestENTRANCE');
            pressButton('ButtonUpstairsUPSTAIRS_FOYER');
            pressButton('ButtonNorthUPSTAIRS_HALLWAY_ONE');
            pressButton('ButtonWestUPSTAIRS_STUDY');
            pressButton('ButtonNorthUPSTAIRS_HALLWAY_TWO');
            pressButton('ButtonWestUPSTAIRS_STAIRWAY_THREE');
            pressButton('ButtonNorthUPSTAIRS_MASTER_BEDROOM');
            pressButton('ButtonWOLF_CREST');
            cy.contains(wolfCrest.messageWhenUsed);
        });
    });

});