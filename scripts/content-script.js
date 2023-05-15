console.log('Chrome Extension go Brrr!'); //Just to see if the Chrome extension is running

// Create elements to display information on page
function addGradeInfo(course, courseInfo){
  const a = document.createElement('a');
  var totalA = courseInfo.enrollment.totalA;
  var totalB = courseInfo.enrollment.totalB;
  var totalC = courseInfo.enrollment.totalC;
  var totalD = courseInfo.enrollment.totalD;
  var totalF = courseInfo.enrollment.totalF;
  var totalS = courseInfo.enrollment.totalS;
  var totalNCR = courseInfo.enrollment.totalNCR;
  var totalW = courseInfo.enrollment.totalW;
  var totalEnrolled = courseInfo.enrollment.totalEnrolled;

  a.innerText = course.innerText;
  course.innerText = ''
  a.href = "https://cougargrades.io/c/"+a.innerText;
  a.target = '_blank';
  course.appendChild(a);
  const div = document.createElement('div');
  const div2 = document.createElement('div');
  div.id = 'sibling';
  div.innerHTML = '<span aria-label="Grade Point Average">'+
                  '<span class="GPA_STD_DROP_Container" style="background-color: rgb(135, 206, 250); margin-right: 0.35rem;">'+
                  '<span class="GPA_STD_DROP">'+Math.round(courseInfo.GPA.average * 100) / 100+' GPA</span><span></span></span></span>'+
                  '<span aria-label="Standard Deviation">'+
                  '<span class="GPA_STD_DROP_Container" style="background-color: rgb(255, 255, 0); margin-right: 0.35rem;">'+
                  '<span class="GPA_STD_DROP">'+Math.round(courseInfo.GPA.standardDeviation * 1000) / 1000+' SD</span><span></span></span></span>'+
                  '<span aria-label="Drop Rate">'+
                  '<span class="GPA_STD_DROP_Container" style="background-color: rgb(147, 112, 216); margin-right: 0.35rem;">'+
                  '<span class="GPA_STD_DROP">'+Math.round(((totalW / totalEnrolled) * 100) * 100) / 100+'% W</span><span></span></span></span>';
  div2.innerHTML = '<div class="enrollment_bar" data="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" barheight="12">'+
                   '<span class="Progress enrollment_progress">'+
                   '<span class="enrollment_bar_item" aria-label="'+totalA+' total students have received As" style="width: '+Math.round(((totalA / totalEnrolled) * 100) * 10000) / 10000+'%; background-color: rgb(135, 206, 250);"></span>'+
                   '<span class="enrollment_bar_item" aria-label="'+totalB+' total students have received Bs" style="width:'+Math.round(((totalB / totalEnrolled) * 100) * 10000) / 10000+'%; background-color: rgb(144, 238, 144);"></span>'+
                   '<span class="enrollment_bar_item" aria-label="'+totalC+' total students have received Cs" style="width: '+Math.round(((totalC / totalEnrolled) * 100) * 10000) / 10000+'%; background-color: rgb(255, 255, 0);"></span>'+
                   '<span class="enrollment_bar_item" aria-label="'+totalD+' total students have received Ds" style="width: '+Math.round(((totalD / totalEnrolled) * 100) * 10000) / 10000+'%; background-color: rgb(255, 160, 122);"></span>'+
                   '<span class="enrollment_bar_item" aria-label="'+totalF+' total students have received Fs" style="width: '+Math.round(((totalF / totalEnrolled) * 100) * 10000) / 10000+'%; background-color: rgb(205, 92, 92);"></span>'+
                   '<span class="enrollment_bar_item" aria-label="'+totalS+' total students have received Ss" style="width: '+Math.round(((totalS / totalEnrolled) * 100) * 10000) / 10000+'%; background-color: rgb(143, 188, 143);"></span>'+
                   '<span class="enrollment_bar_item" aria-label="'+totalW+' total students have received Ws" style="width: '+Math.round(((totalW / totalEnrolled) * 100) * 10000) / 10000+'%; background-color: rgb(147, 112, 216);"></span></span>'+
                   '<ul class="enrollment_bar_key">'+
                   '<li><a><svg class="enrollment_bar_key" focusable="false" color="#87cefa" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon">'+
                   '<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path></svg>'+
                   '<span>A</span><span> '+((totalA / totalEnrolled) * 100).toFixed(1)+'%</span></a></li>'+
                   '<li><a><svg class="enrollment_bar_key" focusable="false" color="#90ee90" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon">'+
                   '<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path></svg>'+
                   '<span>B</span><span> '+((totalB / totalEnrolled) * 100).toFixed(1)+'%</span></a></li>'+
                   '<li><a><svg class="enrollment_bar_key" focusable="false" color="#ffff00" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon">'+
                   '<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path></svg>'+
                   '<span>C</span><span> '+((totalC / totalEnrolled) * 100).toFixed(1)+'%</span></a></li>'+
                   '<li><a><svg class="enrollment_bar_key" focusable="false" color="#ffa07a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon">'+
                   '<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path></svg>'+
                   '<span>D</span><span> '+((totalD / totalEnrolled) * 100).toFixed(1)+'%</span></a></li>'+
                   '<li><a><svg class="enrollment_bar_key" focusable="false" color="#cd5c5c" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon">'+
                   '<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path></svg>'+
                   '<span>F</span><span> '+((totalF / totalEnrolled) * 100).toFixed(1)+'%</span></a></li>'+
                   '<li><a><svg class="enrollment_bar_key" focusable="false" color="#8fbc8f" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon">'+
                   '<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path></svg>'+
                   '<span>S</span><span> '+((totalS / totalEnrolled) * 100).toFixed(1)+'%</span></a></li>'+
                   '<li><a><svg class="enrollment_bar_key" focusable="false" color="#d87093" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon">'+
                   '<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path></svg>'+
                   '<span>NCR</span><span> '+((totalNCR / totalEnrolled) * 100).toFixed(1)+'%</span></a></li>'+
                   '<li><a><svg class="enrollment_bar_key" focusable="false" color="#9370D8" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon">'+
                   '<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path></svg>'+
                   '<span>W</span><span> '+((totalW / totalEnrolled) * 100).toFixed(1)+'%</span></a></li></ul></div>';
  course.parentNode.insertBefore(div, course.nextSibling);
  course.parentNode.insertBefore(div2, course.nextSibling.nextSibling)
}

// Change course Name to hyperlink and get frade information
function updateCourseName(course, port){
  port.onMessage.addListener(function(msg) {
    if (msg.txt === 'Ready to recieve course'){
      port.postMessage({text: 'Requesting data for Course', course: course.innerText});
    }
    else if(msg.txt === 'Ready to recieve professor names'){
      console.log(msg.courseInfo);
      addGradeInfo(course, msg.courseInfo);
    }
  });
}

// Parse name and return array of parts
function parseName(fullName){
  nameArr = fullName.split(' ');

  if(nameArr.length == 3) {
    return {first: nameArr[0], middle: nameArr[1], last: nameArr[2]}
  }
  else {
    return {first: nameArr[0], last: nameArr[1]}
  }
}

// Update names and get grade information
function updateName(prof, port) {
  var nameArr = prof.split(' ');
  parsedName = nameArr[0] + ' ' + nameArr[nameArr.length - 1];
  const a = document.createElement('a');
  a.innerText = elt.innerText;
  elt.innerText = ''
  a.href = "https://www.ratemyprofessors.com/search/teachers?query="+parsedName;
  a.target = '_blank';
  elt.appendChild(a);
      
  // port.onMessage.addListener(function(msg) {
  //   if (msg.txt === 'Ready to recieve professor names'){
  //     port.postMessage({text: 'Requesting Link for Name', professor: parsedName});
  //   }

  //   else if (msg.txt === 'Passing string for DOM Parsing'){
  //     var parser = new DOMParser();
  //     var doc = parser.parseFromString(msg.html, 'text/html');
  //     //console.log(doc);
  //     var teacherLink = doc.getElementsByClassName('TeacherCard__StyledTeacherCard-syjs0d-0 dLJIlx');
  //     //console.log(teacherLink);
  //   }
  // });
  
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
  elt.id = 'pink'; // Change later
}

//For running code on click due to Web Socket issue
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.txt === 'Clicked'){ //Check if Button was clicked
    var port = chrome.runtime.connect({name: 'CommLink'});
    port.postMessage({text: 'CONNECTED!'});
  }

  //get course and instructors
  let instructors = document.querySelectorAll('span[id^="SSR_CLSRCH_F_WK_SSR_INSTR_LONG_"]');
  let course = document.getElementById('SSR_CRSE_INFO_V_SSS_SUBJ_CATLG');
  
  // change course to hyperlink
  if (course.nextSibling.id != 'sibling') { // Make sure function is only called once 
    updateCourseName(course, port);
  }
  
  // Iterate over all professors in search and add info
  for (elt of instructors){
    parsedName = updateName(elt.innerText, port);
  }
});