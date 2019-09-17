chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    if (message.text == "send it, dude"){
        changeImagesToPikachu()
    }
}

function changeImagesToPikachu(){
    let images = document.querySelectorAll('img')
    for (const img of images){
        img.src = 'https://steemitimages.com/0x0/https://vignette.wikia.nocookie.net/pokemon/images/c/cd/PLEEI_Pikachu_Thunderbolt.png/revision/latest/scale-to-width-down/639?cb=20141209160531'
    }
}
