const bgMusic = new Audio();
bgMusic.src = '/audio/The_Dark_Place.mp3';
bgMusic.loop = true;


export
const playBgMusic = 
    () => bgMusic.play();


export 
const stopBgMusic =
    () => bgMusic.stop();


const soundEffect = new Audio();


function playSoundEffect({ filename, soundEnabled }) {
    if (!soundEnabled) return;


    soundEffect.src = `/audio/${filename}.wav`;
    soundEffect.play();
}
    

export default playSoundEffect;
