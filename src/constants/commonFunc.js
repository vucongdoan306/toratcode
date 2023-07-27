function getImgCard(imgName){
    return new URL(`/src/assets/img/cards/${imgName}`,import.meta.url).href;
}

export {
    getImgCard
}