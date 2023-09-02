// to fixed navbar

let medQue300 = window.matchMedia("(max-width: 300px)");
let medQue400 = window.matchMedia("(max-width: 400px)");
let medQue500 = window.matchMedia("(max-width: 500px)");
let medQue700 = window.matchMedia("(max-width: 700px)");
let medQue1300 = window.matchMedia("(max-width: 1300px)");
let medQue1000 = window.matchMedia("(max-width: 1000px)");
let medQue1400 = window.matchMedia("(max-width: 1400px)");

window.onscroll = function() {scrollFunction(medQue300,medQue400,medQue500,medQue700,medQue1000,medQue1300,medQue1400)};

let socialMediaLinks = document.getElementsByClassName("social-media-links")[0];

function scrollFunction(medQue300,medQue400,medQue500,medQue700,medQue1000,medQue1300,medQue1400) {

  if (medQue300.matches){
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
      document.getElementsByClassName("company-logo")[0].style.width = "32%";
      document.getElementsByClassName("company-logo")[0].style.height = "105%";
    } 
    else {
      document.getElementsByClassName("company-logo")[0].style.width = "40%";
      document.getElementsByClassName("company-logo")[0].style.height = "150%";
    };
  }

  else if (medQue400.matches){
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
      document.getElementsByClassName("company-logo")[0].style.width = "26%";
      document.getElementsByClassName("company-logo")[0].style.height = "105%";
    } 
    else {
      document.getElementsByClassName("company-logo")[0].style.width = "34%";
      document.getElementsByClassName("company-logo")[0].style.height = "170%";
    };
  }

  else if (medQue500.matches){
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
      document.getElementsByClassName("company-logo")[0].style.width = "18%";
      document.getElementsByClassName("company-logo")[0].style.height = "105%";
      document.getElementsByClassName("company-logo")[0].style.marginRight = "10%";
    } 
    else {
      document.getElementsByClassName("company-logo")[0].style.width = "28%";
      document.getElementsByClassName("company-logo")[0].style.height = "170%";
      document.getElementsByClassName("company-logo")[0].style.marginRight = "0%";
    };
  }

  else if (medQue700.matches){
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
      document.getElementsByClassName("company-logo")[0].style.width = "14%";
      document.getElementsByClassName("company-logo")[0].style.height = "105%";
    } 
    else {
      document.getElementsByClassName("company-logo")[0].style.width = "26%";
      document.getElementsByClassName("company-logo")[0].style.height = "170%";
    };
  }

  else if (medQue1000.matches){
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
      document.getElementsByClassName("company-logo")[0].style.width = "14%";
      document.getElementsByClassName("company-logo")[0].style.height = "105%";
    } 
    else {
      document.getElementsByClassName("company-logo")[0].style.width = "22%";
      document.getElementsByClassName("company-logo")[0].style.height = "170%";
    };
  }

  else if(medQue1300.matches){
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
      document.getElementsByClassName("company-logo")[0].style.width = "9.5%";
      document.getElementsByClassName("company-logo")[0].style.height = "103.9%";
    } 
    else {
      document.getElementsByClassName("company-logo")[0].style.width = "13.6%";
      document.getElementsByClassName("company-logo")[0].style.height = "140%";
    };
  }

  else if (medQue1400.matches){
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
      document.getElementsByClassName("company-logo")[0].style.width = "9.5%";
      document.getElementsByClassName("company-logo")[0].style.height = "103.9%";
    } 
    else {
      document.getElementsByClassName("company-logo")[0].style.width = "13.6%";
      document.getElementsByClassName("company-logo")[0].style.height = "150%";
    };
  }

  else{
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
      document.getElementsByClassName("company-logo")[0].style.width = "9.5%";
      document.getElementsByClassName("company-logo")[0].style.height = "103.9%";
    } 
    else {
      document.getElementsByClassName("company-logo")[0].style.width = "13.6%";
      document.getElementsByClassName("company-logo")[0].style.height = "182%";
    };
  };

}



// navbar responsive

let navbarResponsiveCheckbox = document.getElementsByClassName("navbar-responsive-checkbox")[0];
let navbarItems = document.getElementsByClassName("navbar-items")[0];

function navResCheckBox(){
  if (navbarResponsiveCheckbox.checked){
    navbarItems.style.transform = "translate(0%,0%)";
    console.log(true);
    console.log(navbarItems);
  }
  else{
    console.log(false);
    navbarItems.style.transform = "translate(-120%,0%)";
  }
};