const firstField= document.getElementById('firstField')
const secondField= document.getElementById('secondField')
const phoneNum= document.getElementById('phoneNum')
const select = document.querySelector('select')

phoneNum.addEventListener('focus', ()=>{
   secondField.classList.add('fieldset2');
})
phoneNum.addEventListener('blur', () => {
    secondField.classList.remove('fieldset2');
});
select.addEventListener('focus', ()=>{
   firstField.classList.add('fieldset2');
})
select.addEventListener('blur', () => {
    firstField.classList.remove('fieldset2');
});
