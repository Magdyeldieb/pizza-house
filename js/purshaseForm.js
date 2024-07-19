
const purchaseForm=document.querySelector(".purchase-form");
const inputFields=document.querySelectorAll(".form__input");
const formWraps = document.querySelectorAll('.form-wrap');
const inputName1=document.querySelector("#inputName1");
const inputEmail1=document.querySelector("#inputEmail1");
const inputAddress1=document.querySelector("#inputAddress1");
const inputAddress11=document.querySelector("#inputAddress11");
const inputCity1=document.querySelector("#inputCity1");
const inputZip1=document.querySelector("#inputZip1");
const inputName2=document.querySelector("#inputName2");
const inputEmail2=document.querySelector("#inputEmail2");
const inputAddress2=document.querySelector("#inputAddress2");
const inputAddress22=document.querySelector("#inputAddress22");
const inputCity2=document.querySelector("#inputCity2");
const inputZip2=document.querySelector("#inputZip2");
const formFailed=document.querySelector(".form--failed");
const formPassed=document.querySelector(".form--passed");
const paymentMethods=document.querySelector(".payment__method");
const paymentCheck = document.getElementsByName("paymentCheck");
const radioButtons = document.getElementsByName("paymentCheck");
let getLastId;
let radioBtnSelected=null;
checkradioButton();
function checkradioButton(){
// Get all radio buttons with the name attribute "myRadioGroup"
radioButtons.forEach(function(radioButton){
  radioButton.addEventListener("change", function(){
    for (let i = 0; i < radioButtons.length; i++){
      if (radioButtons[i].checked){
        // The selected radio button has been found
        radioBtnSelected=radioButtons[i].value
        break; 
      }
    }
    if(radioBtnSelected!==null && paymentMethods.closest('.form-wrap').classList.contains('error')){
    paymentMethods.closest('.form-wrap').classList.remove('error');
    }
  });
});
}
const checkboxId= document.getElementById("checkboxId");
checkboxSelection();
function checkboxSelection(){
  checkboxId.addEventListener('change', function(){
    if (checkboxId.checked){
      if(inputName1.value !=='')
        inputName2.value=inputName1.value;
      if(inputEmail1.value !=='')
        inputEmail2.value=inputEmail1.value;
      if(inputAddress1.value !=='')
        inputAddress2.value=inputAddress1.value;
      if(inputAddress11.value !=='')
        inputAddress22.value=inputAddress11.value;
      if(inputCity1.value !=='')
        inputCity2.value=inputCity1.value;
      if(inputZip1.value !=='')
        inputZip2.value=inputZip1.value;
    }
     else{
      inputName2.value="";
      inputEmail2.value="";
      inputAddress2.value="";
      inputAddress22.value="";
      inputCity2.value="";
      inputZip2.value="";
    }
    });
}
validateForm();
if (localStorage.getItem('checkoutSubmitted') === null)
  localStorage.setItem('checkoutSubmitted', 'false');
  submitPurchaseForm();
function submitPurchaseForm(){
  purchaseForm.addEventListener('submit', event =>{
    inputFields.forEach(inputField =>{
      validateInput(inputField);
    });
    event.preventDefault();
    if (!validateForm() && radioBtnSelected !== null){
      purchaseStorageList(inputName1,inputEmail1,inputAddress1,inputAddress11,inputCity1,inputZip1,inputName2,inputEmail2,inputAddress2,inputAddress22,inputCity2,inputZip2,radioBtnSelected);
      getLastId=totalPurchasesList[totalPurchasesList.length-1].id;
      const orderId = document.getElementById("orderId"); 
      orderId.innerHTML = getLastId;
      const checkoutContent= document.querySelector(".checkout__content");
      checkoutContent.style.display="none";
      const submitCheckout= document.querySelector(".submit__checkout");  
      submitCheckout.style.display = "block";
      localStorage.setItem('checkoutSubmitted', 'true');
      localStorage.setItem('cartData', '[]');    
  }
    else{//Failed
      formFailed.style.display = "block";
      setTimeout(() =>{
        formFailed.style.display = "none";
      }, 8000);
     const isAnyInputFilled = Array.from(inputFields).some(inputField => inputField.value !== '');
      if (radioBtnSelected === null){
        paymentMethods.closest('.form-wrap').classList.add('error');
        if (isAnyInputFilled){
          paymentMethods.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
            scrollMarginTop: '10px'
          });
        } else{
          inputName1.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    }
  });
}
let totalPurchasesList=[];
if (localStorage.getItem("totalPurchases") !== null){
  totalPurchasesList = JSON.parse(localStorage.getItem("totalPurchases"));
}
else{
  totalPurchasesList=[]
}
function purchaseData (inputName1,inputEmail1,inputAddress1,inputAddress11,inputCity1,inputZip1,inputName2,inputEmail2,inputAddress2,inputAddress22,inputCity2,inputZip2,radioBtnSelected){
  let cartData = JSON.parse(localStorage.getItem('cartData')) || [];
  return{
  id: Date.now(),
  inputName1,inputEmail1,inputAddress1,inputAddress11,inputCity1,inputZip1,inputName2,inputEmail2,inputAddress2,inputAddress22,inputCity2,inputZip2,radioBtnSelected,cartData
  };
}
function purchaseStorageList(inputName1,inputEmail1,inputAddress1,inputAddress11,inputCity1,inputZip1,inputName2,inputEmail2,inputAddress2,inputAddress22,inputCity2,inputZip2,radioBtnSelected){
  let purchaseDataObj=purchaseData(
    inputName1.value,inputEmail1.value,inputAddress1.value,inputAddress11.value,inputCity1.value,inputZip1.value,inputName2.value,inputEmail2.value,inputAddress2.value,inputAddress22.value,inputCity2.value,inputZip2.value,radioBtnSelected
  )
  totalPurchasesList.push(purchaseDataObj);
  localStorage.setItem("totalPurchases", JSON.stringify(totalPurchasesList));
}
function validateForm(){
  let hasError = false;
  let errorFreeInput = false;
  let errorFreeBlur = false;

  inputFields.forEach(inputField =>{
    inputField.addEventListener('blur', () =>{
      errorFreeBlur=validateInput(inputField);
    });
    inputField.addEventListener('input', () =>{
      errorFreeInput=validateInput(inputField);
    });

  });
  if(errorFreeInput && errorFreeBlur)
    hasError = true;
  return hasError;
}
function validateInput(inputField){
  const formWrap = inputField.closest('.form-wrap');
  const emptyInputs = inputField.value.trim() === ''
  const lettersRegex = /^[a-zA-Z\s]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const numberRegex = /^\d+$/;
  let errorFound = false;

  if (emptyInputs){
    formWrap.classList.add('error');
    errorFound = true; 
  } else{
    formWrap.classList.remove('error');
  }

  if (inputField.value.trim() !== '' && ((inputField.id === 'inputName1' || inputField.id === 'inputName2' || inputField.id === 'inputCity1' || inputField.id === 'inputCity2') && !lettersRegex.test(inputField.value))){
    formWrap.classList.add('invalid');
    errorFound = true; 
  } else{
    formWrap.classList.remove('invalid');
  }

  if (inputField.value.trim() !== '' && ((inputField.id === 'inputEmail1' || inputField.id === 'inputEmail2') && !emailRegex.test(inputField.value))){
    formWrap.classList.add('invalidEmail');
    errorFound = true; 
  } else{
    formWrap.classList.remove('invalidEmail');
  }

  if (inputField.value.trim() !== '' && ((inputField.id === 'inputZip1' || inputField.id === 'inputZip2') && !numberRegex.test(inputField.value))){
    formWrap.classList.add('invalidNumber');
    errorFound = true; 
  } else{
    formWrap.classList.remove('invalidNumber');
  }

  return !errorFound;
}
