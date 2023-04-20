console.log('Chrome Extension go Brrr!');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.txt === 'Clicked'){
    var port = chrome.runtime.connect({name: "CommLink"});
    port.postMessage({text: "Knock knock"}); //CHANGE MESSAGE
    
    let instructors = document.querySelectorAll('span[id^="SSR_CLSRCH_F_WK_SSR_INSTR_LONG_"]');
    let course = document.getElementById('SSR_CRSE_INFO_V_SSS_SUBJ_CATLG');
    
    const gpa = document.createElement('span'); //FIX ISSUE WITH DUPING
    gpa.innerText = 'Bussy';
    gpa.id = 'gpa'
    course.parentNode.insertBefore(gpa, course.nextSibling);

    for (elt of instructors){
      console.log(elt);
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
      elt.id = 'pink';
    }
  }
});