
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  //  Navbar links active state on scroll

  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /** 
   *whatsaap back to top
  */
  let whatsaap = select('.whatsaap-img')
  if (whatsaap) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        whatsaap.classList.add('active-whatsaap')
      } else {
        whatsaap.classList.remove('active-whatsaap')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
  /**
  *Mobile nav toggle
  */
  on('click', '.mobile-nav-toggle', function (e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', '.header_m', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

})()

// get id
var p_tag_1 = document.getElementById('p_tag_1');
var p_tag_2 = document.getElementById('p_tag_2');
var p_tag_3 = document.getElementById('p_tag_3');
var p_tag_4 = document.getElementById('p_tag_4');
var p_tag_5 = document.getElementById('p_tag_5');
var btn_1 = document.getElementById('btn_1');
var btn__1 = document.getElementById('btn__1');
var btn_2 = document.getElementById('btn_2');
var btn__2 = document.getElementById('btn__2');
var btn__3 = document.getElementById('btn__3');
var btn_3 = document.getElementById('btn_3');
var btn__4 = document.getElementById('btn__4');
var btn_4 = document.getElementById('btn_4');
var btn__5 = document.getElementById('btn__5');
var btn_5 = document.getElementById('btn_5');
var project_div = document.getElementById("project-div");
var body = document.getElementById('body');
var backtotop = document.getElementById('back-to-top');
var nav_btn = document.querySelector('.nav-btn');
var nav_btn_1 = document.querySelector('.nav-btn-1');
var nav_btn_2 = document.querySelector('.nav-btn-2');
var nav_btn_3 = document.querySelector('.nav-btn-3');
var header = document.getElementById('header');
var mobile_nav_toggle = document.querySelector('.mobile-nav-toggle');

function showmore(display, message) {
  display.innerHTML = message;
}

function offdisplay(off, show) {
  off.style.display = 'none';
  show.style.display = 'block';
}

function showless(off_1, show_1, off) {
  off.innerHTML = '';
  show_1.style.display = 'block';
  off_1.style.display = 'none';
}

function checkshowmore() {
  showmore(p_tag_1, 'navbar');
  offdisplay(btn_1, btn__1);
}

function checkshowless() {
  showless(btn__1, btn_1, p_tag_1)
}

function checkshowmore_1() {
  showmore(p_tag_2, ' to fetch movie-title, date, year, time and images using MOVIENAME as my key');
  offdisplay(btn_2, btn__2);
}

function checkshowless_1() {
  showless(btn__2, btn_2, p_tag_2)
}

function checkshowmore_2() {
  showmore(p_tag_3, 'accept a user to use a unique email and password and used javascript localstorage as assumed database');
  offdisplay(btn_3, btn__3);
}

function checkshowless_2() {
  showless(btn__3, btn_3, p_tag_3)
}

function checkshowmore_3() {
  showmore(p_tag_4, 'The app can carry out functions like adding task, deleting task and signify already done task.');
  offdisplay(btn_4, btn__4);
}

function checkshowless_3() {
  showless(btn__4, btn_4, p_tag_4)
}

function checkshowmore_4() {
  showmore(p_tag_5, 'accept a user to use a unique email and used javascript localstorage as assumed database');
  offdisplay(btn_5, btn__5);
}

function checkshowless_4() {
  showless(btn__5, btn_5, p_tag_5)
}

// callbacks
btn_1.addEventListener('click', checkshowmore);
btn_2.addEventListener('click', checkshowmore_1);
btn_3.addEventListener('click', checkshowmore_2);
btn_4.addEventListener('click', checkshowmore_3);
btn_5.addEventListener('click', checkshowmore_4);
btn__1.addEventListener('click', checkshowless);
btn__2.addEventListener('click', checkshowless_1)
btn__3.addEventListener('click', checkshowless_2);
btn__4.addEventListener('click', checkshowless_3);
btn__5.addEventListener('click', checkshowless_4);



/** ------------CONTACT SCRiPTS */

// GETTING IDS
var textarea = document.querySelector('textarea');
var inp1 = document.getElementById('inp1');
var inp2 = document.getElementById('inp2');
var inp3 = document.getElementById('inp3');
var contact_button = document.getElementById('contact-button');
var contact_button_1 = document.getElementById('contact-button-1');
var form = document.querySelector('form');


document.querySelector('form').addEventListener('submit', (e) => {
  let checkname = checkEmptyField(inp1, 'Required')
  let checknumber = checkEmptyField(inp2, 'Required')
  let checkmail = checkEmptyField(inp3, 'Required')
  let checkmessage = checkEmptyField(textarea, 'Ask me anything')
  if (!(checkname && checknumber && checkmail && checkmessage)) {
    e.preventDefault();
  } else {
    contact_button.innerHTML = 'Sending...';
    contact_button.style.opacity = '1';
    contact_button_1.style.display = 'none';
    console.log('submit')
  }
})

function checkForm(input) {
  let formcheck = input.value
  return formcheck == '' ? true : false
}

function checkEmptyField(input, message) {
  if (checkForm(input)) {
    showerror(input, message)
    return false
  } else {
    showsuccess(input)
    return true
  }
}

function checkInputField() {
  if (checkForminput(inp1) > 0) {
    showsuccess(inp1)
  }else {
    showerror(inp1, 'Required')
  }
}

function checkInputField1() {
  if (checkForminput(inp2) > 0) {
    showsuccess(inp2)
  }else {
    showerror(inp2, 'Required')
  }
}

function checkInputField2() {
  if (checkForminput(inp3) > 0) {
    showsuccess(inp3)
  }else {
    showerror(inp3, 'Required')
  }
}

function checkInputField3() {
  if (checkForminput(textarea) > 0) {
    showsuccess(textarea)
  }else {
    showerror(textarea, 'Ask me anything')
  }
}

function showerror(input, message) {
  let container = input.parentElement;
  // fix classes
  input.classList.add('red-border');
  container.querySelector('small').innerText = message;
}

function showsuccess(input) {
  let container = input.parentElement;
  //fix classes
  input.classList.remove('red-border');
  container.querySelector('small').innerText = '';
}

function handleNavbar(e) {
  if (e.target == nav_btn || nav_btn_1 || nav_btn_2 || nav_btn_3) {
    header.classList.add('header_m');
    body.style.overflow = 'visible';
  }
}

function addNavbar() {
  mobile_nav_toggle.classList.remove('bi-x');
  mobile_nav_toggle.classList.add('bi-list')
  header.classList.remove('header_m')
}


function checkForminput(inp) {
  return inp.value.length
}

// check if input is empty
inp1.addEventListener('keyup', checkInputField);
inp2.addEventListener('keyup', checkInputField1);
inp3.addEventListener('keyup', checkInputField2);
textarea.addEventListener('keyup', checkInputField3);

nav_btn.addEventListener('click', handleNavbar)
nav_btn_1.addEventListener('click', handleNavbar)
nav_btn_2.addEventListener('click', handleNavbar)
nav_btn_3.addEventListener('click', handleNavbar)
mobile_nav_toggle.addEventListener('click', addNavbar)

