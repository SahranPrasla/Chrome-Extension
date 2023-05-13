console.log('Service worker go brrr!')
chrome.action.onClicked.addListener((tab) => {
  let message = {
    txt: 'Clicked'
  }
  chrome.tabs.sendMessage(tab.id, message);
  chrome.runtime.onConnect.addListener((port) => {
    console.assert(port.name === 'CommLink');
    port.onMessage.addListener(function(msg) {
      if (msg.text === 'CONNECTED!') {
        console.log('WORKS!');
        port.postMessage({txt: 'Ready to Recieve'});
      }
      else if (msg.text === 'Requesting Link for Name') {
        console.log(msg.professor);
        fetch("https://www.ratemyprofessors.com/search/teachers?query="+msg.professor).then(response => {
          console.log(response);
          return response.text()
        }).then((str) => {
          console.log(str);
          port.postMessage({txt: 'Passing string for DOM Parsing', html: str});
        });
      }
    });
  });
});