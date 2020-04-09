const bgMusic = new Audio();
bgMusic.src = '/audio/The_Dark_Place.mp3';
bgMusic.loop = true;


export
const playBgMusic = 
    () => bgMusic.play();


export 
const stopBgMusic =
    () => bgMusic.pause();


const successEffect = new Audio();
successEffect.src = '/audio/success_chime.wav';


const failureEffect = new Audio();
failureEffect.src = '/audio/failure.wav';


const bottleNoise = new Audio();
bottleNoise.src = '/audio/bottle_noise.wav';


const doorUnlock = new Audio();
doorUnlock.src = '/audio/door_unlock.wav';


const heavyObject = new Audio();
heavyObject.src = '/audio/heavy_object.wav';


const insertCrest = new Audio();
insertCrest.src = '/audio/insert_crest.wav';


const keyboard = new Audio();
keyboard.src = '/audio/keyboard.wav';


const metalOnMetal = new Audio();
metalOnMetal.src = '/audio/metal_on_metal.wav';


const paperNoise = new Audio();
paperNoise.src = '/audio/paper_noise.wav';


const woodOpen = new Audio();
woodOpen.src = '/audio/wood_crate_open.wav';


function playSoundEffect({ filename, soundEnabled }) {
    if (!soundEnabled) return;


    switch(filename) {
    case 'success_chime':
        successEffect.play();
        return;


    case 'failure': 
        failureEffect.play();
        return;

    
    case 'bottle_noise':
        bottleNoise.play();
        return;


    case 'door_unlock':
        doorUnlock.play();
        return;


    case 'heavy_object':
        heavyObject.play();
        return;

    
    case 'insert_crest':
        insertCrest.play();
        return;

    
    case 'keyboard':
        keyboard.play();
        return;


    case 'metal_on_metal':
        metalOnMetal.play();
        return;

        
    case 'paper_noise':
        paperNoise.play();
        return;

    
    case 'wood_crate_open':
        woodOpen.play();
        return;

    
    default:
        return;
    } 

}
    

export default playSoundEffect;
