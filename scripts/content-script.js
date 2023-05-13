console.log('Chrome Extension go Brrr!');

function parseNames(fullName) {
  var nameArr = fullName.split(' ');
  return nameArr[0] + ' ' + nameArr[nameArr.length - 1];
}

function updateElements(instructors, port) {
  for (elt of instructors){
    parsedName = parseNames(elt.innerText);
    const a = document.createElement('a'); // Repeat
    a.innerText = elt.innerText; //for
    elt.innerText = '' // course
    a.href = "https://www.ratemyprofessors.com/search/teachers?query="+parsedName;// name
    elt.appendChild(a);// and number
    
    parsedName = parseNames(a.innerText);

    port.postMessage({text: 'Requesting Link for Name', professor: parsedName});
    
    port.onMessage.addListener(function(msg) {
      if (msg.txt === 'Passing string for DOM Parsing'){
        var parser = new DOMParser();
        var doc = parser.parseFromString(msg.html, 'text/html');
        console.log(doc);
        var teacherLink = doc.getElementsByClassName('TeacherCard__StyledTeacherCard-syjs0d-0 dLJIlx');
        console.log(teacherLink);
      }
    });

    const div = document.createElement('div');
    const span = document.createElement('span');
    span.innerText = 'RATINGS GO HERE';
    div.appendChild(span);
    if (elt.nextSibling === null){
      elt.parentNode.appendChild(div)
    }
    else {
      elt.parentNode.insertBefore(elt.nextSibling, div)
    }
    elt.id = 'pink'; //Change later
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.txt === 'Clicked'){ //Check if Button was clicked
    var port = chrome.runtime.connect({name: 'CommLink'});
    port.postMessage({text: 'CONNECTED!'}); //CHANGE MESSAGE
  }
  port.onMessage.addListener(function(msg) {
    if (msg.txt === 'Ready to Recieve'){
      console.log(msg.txt);
      let instructors = document.querySelectorAll('span[id^="SSR_CLSRCH_F_WK_SSR_INSTR_LONG_"]');
      let course = document.getElementById('SSR_CRSE_INFO_V_SSS_SUBJ_CATLG');
    
      if (course.nextSibling.id != 'gpa') {
        const a = document.createElement('a');
        a.innerText = course.innerText;
        course.innerText = ''
        a.href = "https://cougargrades.io/c/"+a.innerText;
        course.appendChild(a);
        const gpa = document.createElement('span');
        gpa.innerText = 'Insert iFrame/API stuff here';
        gpa.id = 'gpa'
        course.parentNode.insertBefore(gpa, course.nextSibling);
      }
    
      updateElements(instructors, port);
    }
  });
});