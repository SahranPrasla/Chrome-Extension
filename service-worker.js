console.log('Service worker go brrr!');

function getProfessorQueries(professorNames) {
  if ("middle" in professorNames) {
    let names = [professorNames.last+',%20'+professorNames.first+'%20'+professorNames.middle, 
                professorNames.last.split('-')[0]+',%20'+professorNames.first+'%20'+professorNames.middle,
                professorNames.last.split('-')[0]+',%20'+professorNames.first,
                professorNames.last+',%20'+professorNames.first
    ];
    console.log(names);
  }
  else {
    let names = [professorNames.last+',%20'+professorNames.first,
                professorNames.last.split('-')[0]+',%20'+professorNames.first,
    ];
  }
}

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
      else if (msg.text === 'Requesting Link for Name'){
        console.log(msg);
        const url = 'https://api.cougargrades.io/instructors/getInstructorByName?instructorName='+msg.professorNames
        getProfessorQueries(msg.professor);
        
       /* // Fetching data from Cougar Grades API for Professors
        const fetchRetry = (url, retries) =>
          fetch(url, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            }
          }).then(res => {
            if (res.ok) {
              return res.json();
            }
            if (retries > 0) {
              return fetchPlus(url, options, retries - 1);
            }
            throw new Error(res.status)
          }).catch(error => console.error(error.message));

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
        });*/
      }
    });
  });
});