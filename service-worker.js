console.log('Service worker go brrr!')
chrome.action.onClicked.addListener((tab) => {
  let message = {
    txt: 'Clicked'
  }
  chrome.tabs.sendMessage(tab.id, message);
});