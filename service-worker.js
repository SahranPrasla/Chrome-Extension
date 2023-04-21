console.log('Service worker go brrr!')
chrome.action.onClicked.addListener((tab) => {
  let message = {
    txt: 'Clicked'
  }
  chrome.tabs.sendMessage(tab.id, message);
  chrome.runtime.onConnect.addListener((port) => {
    console.assert(port.name === "CommLink");
    port.onMessage.addListener(function(msg) {
      if (msg.text === "CONNECTED!")
        console.log('WORKS!');
        //GET INFO FROM WEBSITES TO SEND TO CONTENT SCRIPTS (FOCUS ON THE GETTING FIRST!)
    });
  });
});