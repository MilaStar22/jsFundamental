/*Зверстати форму наведене зправа
При кліку на Create Account перевірити:
- чи заповнені всі поля та чи поставлена галочка в полі checkbox
- перевірити чи значення в полі Password та Confirm Password співпадають, 
якщо все вірно то вивести повідомлення нижче кнопки Create Account
- зробити валідацію fullName, яке має складатись мінімум із 2-х слів
- зробити валідацію електронної пошти по типу як ми робили в темі по regExp
- зробити валідацію паролю як в задачі №5 практичного дзвінка
- зробити валідацію телефонного номеру щоб він був в форматі +00-000-000-00-00, 
але щоб не підпадали(тобто не проходили валідацію) номери телефонів із кодом країни +375 та +7 
*/

let fullName = document.querySelector('#fname');
let email = document.querySelector('#email');
let phone = document.querySelector('#phonenumber');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmpassword');
let btnSubmit = document.querySelector('.btn');
let agree = document.querySelector('#checkbox');
let errorMessage = document.querySelector('.error');
debugger;

let elem = document.querySelectorAll('#fname, #email');
console.log(elem);
elem.forEach(item =>{
    newArr = item.value;
    console.log(newArr);
})


// btnSubmit.addEventListener('click', function validate() {
//       debugger;
//       if(fullName.value == "" ) {
//          alert( "Please provide your name!" );
//          fullName.focus() ;
//          return false;
//       }
//       if(email.value == "" ) {
//          alert( "Please provide your Email!" );
//          email.focus() ;
//          return false;
//       }
//       if(phone.value == "" ) {
//           alert( "Please provide your Phone!" );
//           phone.focus() ;
//           return false;
//       }
//       return(true);
// });
//     validate();
// })
//validate();
debugger;

// let elements = document.querySelectorAll('#fname, #email, #phonenumber, #password, #confirmpassword');
// console.log(elements);
// elements.forEach(item => {
//     console.log(item.value);
// })

// btnSubmit.addEventListener('click', (e)=>{
//     let newArr = '';
//     element.forEach(element => {
//        newArr = element.value;
//        console.log(newArr);
//     })
// });


// inputList.forEach(function (input, index) {
//     input.addEventListener('focus', function () {
//       inputs.forEach(function (i) {
//         if (i !== input) {
//           i.style.backgroundColor = '';
//         }
//       });
//       if (input.value.trim() === '') {
//         labelList[index].classList.remove('labelListOutFocus');
//         labelList[index].classList.add('labelListOnFocus');
//         input.style.backgroundColor = 'white';
//       }
//     });
  
//     input.addEventListener('blur', function () {
//       if (input.value.trim() === '') {
//         labelList[index].classList.remove('labelListOnFocus');
//         labelList[index].classList.add('labelListOutFocus');
//         input.style.backgroundColor = '';
//       }
//     });
//     // Перевірка вводу даних в полях після першої невірної валідації для додавання класу
//     input.addEventListener('input', function () {
//       const value = input.value;
//       if (value === '') {
//         input.style.backgroundColor = '';
//         labelList[index].classList.remove('labelListOnFocus');
//         return;
//       } else {
//         labelList[index].classList.add('labelListOnFocus');
//         // input.style.backgroundColor = '';
//       }
//     });
//   });
  

// let inputElements = [fullName, email, phone, password, confirmPassword];
// inputElements.forEach(input => {
//     input.addEventListener('input', () => {
//       input.style.backgroundColor = '';
//       errorMessage.textContent = '';
//       updateSubmitButton();
//     });
//   });


// debugger
// function validateForm() {
//     let isValid = true;
//     // Перевірка полів форми та чекбокса
//     if (
//       fullName.value === '' ||
//       email.value === '' ||
//       phone.value === '' ||
//       password.value === '' ||
//       confirmPassword.value === '' ||
//       !agree.checked
//     ) {
//       isValid = false;
//     }
//     debugger;

//     let fullNameRegex = /\b[a-zA-Z]{4,}.\b[a-zA-Z]{4,}/;
//     if (!fullNameRegex.test(fullName.value)) {
//         errorMessage.textContent = "Name should contain 2 words";
//         isValid = false;
//     };

//     let emailRegex = /\b\w+@[a-z]+\.\w{2,}(?:\.\w{2,})?/;
//     if (!emailRegex.test(email.value)) {
//         errorMessage.textContent = "This email doesn't exist";
//         isValid = false;
//     };

//     let phoneRegex = /\+{1}\d{2}(?:[- ]?\d{3}){2}(?:[- ]?\d{2}){2}/;
//     if (!phoneRegex.test(phone.value)) {
//         errorMessage.textContent =
//         "Phone number shoud follow such form: +00-000-000-00-00";
//         isValid = false;
//     };

//     let passwordRegex = /(?:\d[-\s]?){8}/;
//     if (!passwordRegex.test(password.value)) {
//         errorMessage.textContent = "Password shoud contain A-Z,a-z,$#@!";
//         isValid = false;
//     };

//     // Перевірка співпадіння паролей
//     if (password.value !== confirmPassword.value) {
//         errorMessage.textContent = "Passwords didn't match";
//         isValid = false;
//     }

//     btnSubmit.disabled = !isValid;
//     return isValid;
// };
// function updateSubmitButton() {
//     btnSubmit.disabled = !validateForm();
// };

// // function checkValue(){
// debugger

// btnSubmit.addEventListener('click', ()=>{
//     debugger;
//     let checksInputs 
//     console.log(checksInputs.validateForm());
//     if (checksInputs == true){
//         alert('all good');
//     }else{
//         alert('check your inputs')
//     }
// });

// if (input1 && input1.value) {
//     alert(1);
// }
// else {
//     alert (0);
// }

// validation of phone 
//\+[^375]{1}(?:-?\d+){5}/g;

// function getChecked() {
//     const checkBox = document.getElementById('checkbox').checked;
//     if (checkBox === true) {
//       console.log(true);
//       } else {
//         console.log(false);
//     }
//   }
// console.log(getChecked());
// let fullname = document.getElementById('fname');
// console.log(fullname.value);

// btnSubmit.addEventListener('click', () => {
//     if (inputArray && inputArray.value) {
//         alert("My input has a value!");
//     }
// })
// function getVal() {
//     const val = inputArray.value;
//     console.log(val);
//     debugger;
// }


// btnSubmit.addEventListener('click', () => {
//     if (password.value === confirmPassword.value && agree.checked == true){
//             debugger;
//         console.log(alert('good'))
//     } else {
//         agree.checked == false
//     }
// });
// debugger

//onclick="sendMessage()

// example
// let form = document.querySelector(".formWithValidation");
// let validateBtn = form.querySelector(".validateBtn");
// let from = form.querySelector(".from");
// let password = form.querySelector(".password");
// let passwordConfirmation = form.querySelector(".passwordConfirmation");

// let where = form.querySelector(".where");
// let message = form.querySelector(".message ");
// let fields = form.querySelectorAll(".field");
// let generateError = function (text) {
//     let error = document.createElement('div')
//         error.classList.add('error') 
//         error.style.color ='red'
//         error.innerHTML = text;
//         return error;
// }
// let removeValidation = function () {
//     let errors = document.querySelectorAll('.error')
//     for (let i = 0; i < errors.length; i++) {
//         errors[i].remove()
        
//     }
// }
// let checkFieldsPresence = function () {
//     for (let i = 0; i < fields.length; i++) {
//         if (!fields[i].value) {
//         console.log("fields is blank", fields[i])
//         var error = generateError('Cannot be blank')
//         form[i].parentElement.insertBefore(error, fields[i])
//     }
//   }
// }
// let checkPasswordMatch= function () {
//     if (password.value !== passwordConfirmation.value ) {
//         console.log('not equals');
//         var error = generateError('Password Doesnt match')
//           password.parentElement.insertBefore(error, password)
//     }
// }

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     removeValidation();
//     checkFieldsPresence();
//     checkPasswordMatch();
  
// });
