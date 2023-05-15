console.log('Service worker go brrr!')

chrome.action.onClicked.addListener((tab) => {
  let message = {
    txt: 'Clicked'
  }
  chrome.tabs.sendMessage(tab.id, message);
  chrome.runtime.onConnect.addListener((port) => {
    console.assert(port.name === 'CommLink');
    port.onMessage.addListener(function(msg) {
      if (msg.text === 'CONNECTED!') { //Checking for connections between service worker and content script
        port.postMessage({txt: 'Ready to recieve course'});
      }
      else if (msg.text === 'Requesting data for Course') {
        const url = 'https://api.cougargrades.io/catalog/getCourseByName?courseName='+msg.course;

        // Fetching data from Cougar Grades API for Course
        fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        }).then(response => {
          return response.json()
        }).then(content => {
          console.log(content);
          port.postMessage({txt: 'Ready to recieve professor names', courseInfo: content});
        });
      }
      else if (msg.text === 'Ready to recieve professor names'){

      }
    });
  });
});