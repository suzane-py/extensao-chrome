chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['mudar_fonte.js', 'remover_img.js']
    });
});