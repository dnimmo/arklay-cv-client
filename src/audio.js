function play(filename) {
    const audio = new Audio();
    audio.src = `/audio/${filename}`;
    audio.play();
}
    

export default play;
