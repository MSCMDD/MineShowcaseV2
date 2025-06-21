export function validate(object) {
    return object !== null && object !== undefined;
}

export function sound(){
    const audio = new Audio('/assets/click.ogg');
    audio.play();
}