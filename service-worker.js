console.log('Service worker go brrr!')
chrome.action.onClicked.addListener((tab) => {
  let message = {
    txt: 'Clicked'
  }
  chrome.tabs.sendMessage(tab.id, message);
  chrome.runtime.onConnect.addListener((port) => {
    console.assert(port.name === "CommLink");
    port.onMessage.addListener(function(msg) {
      if (msg.text === "Knock knock")
        console.log('WORKS!');
      
    });
  });
});