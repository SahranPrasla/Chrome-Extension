console.log('Service worker go brrr!')
chrome.action.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
  let message = {
    txt: 'Clicked'
  }
  chrome.tabs.sendMessage(tab.id, message);
}