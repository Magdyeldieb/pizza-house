 
  const closeSliderBtn=document.querySelector(".btn--close-slider");
  const customerName = document.getElementById('customerName');
  const customerEmail = document.getElementById('customerEmail');
  const customerChoice = document.getElementById('customerChoice');
  const customerMsg = document.getElementById('customerMsg');
  const bookingForm = document.getElementById('bookingForm');
  const inputFields = document.querySelectorAll('.form__input');
  const formWraps = document.querySelectorAll('.form-wrap');
  const formFailed=document.querySelector(".form--failed");
  const formPassed=document.querySelector(".form--passed");
  bookATable();
  function bookATable(){
  bookingForm.addEventListener('submit', event =>{
    inputFields.forEach(input =>{
      validateInput(input)
    });
    event.preventDefault();
    if (!validateForm()){
      console.log('Form validation passed');
      //change the SEND MESSAGE Button to Submitted Button
      formPassed.style.display="block";
      setTimeout(()=>{//return to SEND MESSAGE" after 2s
        formPassed.style.display="none";
      },5000);
      // do something else, such as submit the form
      //create an object for customer
      console.log(customerName.value,customerEmail.value,customerChoice.value,customerMsg.value);
      customerForm(customerName,customerEmail,customerChoice,customerMsg)
    } else{      
      formFailed.style.display="block";

      setTimeout(()=>{//return to SEND MESSAGE" after 2s
        formFailed.style.display="none";

      },5000);
      console.log('Form validation failed');
    }
  });
  }  
  let customersList=[];
  if (localStorage.getItem("customers") !== null){
    // set customers item from localStorage tocustomersList array
    customersList = JSON.parse(localStorage.getItem("customers"));
  } 
  else{
    customersList = [];
  }
  function customerData(customerName,customerEmail,customerChoice,customerMsg){
    return{
    id: Date.now(),
    customerName,
    customerEmail,
    customerChoice,
    customerMsg
    };
  }
  function customerForm(customerName,customerEmail,customerChoice,customerMsg){
    let customer=customerData(
    customerName.value,
    customerEmail.value,
    customerChoice.value,
    customerMsg.value
    )
    customersList.push(customer);
    // set customersList to localStorage
    localStorage.setItem("customers", JSON.stringify(customersList));
    console.log(customersList);
    bookingForm.reset();
  }
  validateForm();
  function validateForm(){
    let hasError = false;
    inputFields.forEach(input =>{
      input.addEventListener('blur', () =>{
        validateInput(input);
      });
      input.addEventListener('input', () =>{
        validateInput(input);
      });
    });
    formWraps.forEach(formWrap =>{
      if (formWrap.classList.contains('error')||formWrap.classList.contains('invalid')){
        hasError = true;
      }
    });
    return hasError;
  }
  function validateInput(input){
    const emptyInputs = Array.from(input.closest('.form-wrap').querySelectorAll('.form__input')).filter(input => (input.value.trim() === ''|| (input.id==='customerChoice'&&input.value==='1')));
    const errorFound = emptyInputs.length > 0;
    if (errorFound){
      input.closest('.form-wrap').classList.add('error');
    } else{
      input.closest('.form-wrap').classList.remove('error');
    }
    const lettersRegex = /^[a-zA-Z\s]*$/;
    const checkName = Array.from(input.closest('.form-wrap').querySelectorAll('.form__input')).filter(input => (input.id==='customerName'&&  !lettersRegex.test(input.value)));
    if(checkName.length>0){
      input.closest('.form-wrap').classList.add('invalid');
      console.log("d")
    }
    else
    input.closest('.form-wrap').classList.remove('invalid');
  
  }
  
  