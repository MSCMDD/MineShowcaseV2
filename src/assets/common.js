export function validate(object) {
    return object !== null && object !== undefined;
}

export function sound(){
    const audio = new Audio('click.ogg');
    audio.play()
        .then(() => console.log("播放成功"))
        .catch(error => console.error("播放失败:", error));
}