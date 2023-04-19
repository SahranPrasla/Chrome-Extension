console.log('Chrome Extension go Brrr!');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
  if (message.txt === 'Clicked'){
    let instructorQuery = 'span[id^="SSR_CLSRCH_F_WK_SSR_INSTR_LONG_"]';
    let instructors = document.querySelectorAll(instructorQuery);
    let course = document.getElementById('SSR_CRSE_INFO_V_SSS_SUBJ_CATLG');
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
      elt.style['background-color'] = 'pink';
    }
  }
}