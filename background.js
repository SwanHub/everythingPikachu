chrome.browserAction.onClicked.addListener(tellContentScript)

function tellContentScript(tab){
    let msg = { text: "send it, dude" }
    chrome.tabs.sendMessage(tab.id, msg)
}
