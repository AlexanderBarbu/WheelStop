 /*var pmethod = document.getElementByName('pmethod');

  var cid = document.getElementByName('cid');

  pmethod.onclick = function(){
  if (cid.disabled==false) {
    cid.disabled == true}
  }*/

 function EnableDisableTextBox(e) {


   var checkid = e.id;
   //alert("Hello! I am an alert box!!" + checkid);
   var cidInput = document.getElementById('cid');
   cidInput.disabled = false;

   if (checkid == 'cash') {

     cidInput.disabled = true;
   } else {
     cidInput.disabled = false;
   }
 }
 /*var pmethod = document.getElementByName('pmethod');

 var cid = document.getElementByName('cid');

 pmethod.onclick = function(){
 if (cid.disabled==false) {
   cid.disabled == true}
 }*/

 function EnableDisableTextBox(e) {


   var checkid = e.id;
   //alert("Hello! I am an alert box!!" + checkid);
   var cidInput = document.getElementById('cid');
   cidInput.disabled = false;

   if (checkid == 'cash') {

     cidInput.disabled = true;
   } else {
     cidInput.disabled = false;
   }
 }


 //Gia th forma

 var form = document.forms.registerForm;
  var elem = form.elements;

 form.addEventListener('submit', function(e) {
   e.preventDefault();
 });

const email = document.getElementById("email");
const user1 = document.getElementById("user1");
const user2 = document.getElementById("user2");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");

 email.addEventListener("input", (event) => {
   if (email.validity.typeMismatch) {
     email.setCustomValidity("You need to input a valid email address!");
     email.reportValidity();
   } else {
     email.setCustomValidity("");
   }
 });
 
 user2.addEventListener("input", (event) => {
   if (user1.value != user2.value) {
     user2.setCustomValidity("The usernames must match!");
     user2.reportValidity();
   } else {
     user2.setCustomValidity("");
   }
 });

 pass1.addEventListener("input", (event) => {
  if (pass1.validity.patternMismatch) {
    if (pass1.value.length > 12)
    {
      pass1.setCustomValidity("The password cannot exceed 12 characters!");
    }
    else{
      pass1.setCustomValidity("The password must contain 8 to 12 characters with uppercase and lowercase letters as well as a number!");
      pass1.reportValidity();
    }
  } else {
    pass1.setCustomValidity("");
  }
});

pass2.addEventListener("input", (event) => {
  if (pass2.value != pass1.value && pass2.value.length == pass1.value.length) {
    pass2.setCustomValidity("The passwords must match!");
    pass2.reportValidity();
  } else {
    pass2.setCustomValidity("");
  }
});

 /*form.addEventListener("submit", (event) => {
   if (!email.validity.valid) {
     email.setCustomValidity("You need to provide a valid email address!");
   } else {
     email.setCustomValidit("");
   }
 })*/



 form.onsubmit = function() {

   /*if (elem.user1.value != elem.user2.value) {
     alert('the usernames should match!');
     elem.user1.focus();
     return 0;
   }*/

   if (elem.pass1.value != elem.pass2.value) {
     alert('the passwords should match!');
     elem.pass1.value="";
     elem.pass2.value="";
     elem.pass1.focus();
     return 0;
   }



   var data = new FormData(form);
   console.log(data);
   //console.log('I tried');

 }
