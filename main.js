
// DOM Elements
const displayEl = document.querySelector('.display');

const clearEl = document.querySelector('.clear');

const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const additionEl = document.querySelector('.addition');
const subtractionEl = document.querySelector('.subtraction');
const multiplicationEl = document.querySelector('.multiplication');
const divisionEl = document.querySelector('.division');
const equalEl = document.querySelector('.equal');

const decimalEl = document.querySelector('.decimal');
const number0El = document.querySelector('.number-0');
const number1El = document.querySelector('.number-1');
const number2El = document.querySelector('.number-2');
const number3El = document.querySelector('.number-3');
const number4El = document.querySelector('.number-4');
const number5El = document.querySelector('.number-5');
const number6El = document.querySelector('.number-6');
const number7El = document.querySelector('.number-7');
const number8El = document.querySelector('.number-8');
const number9El = document.querySelector('.number-9');
const numberElArray = [
    number0El, number1El, number2El, number3El, number4El, number5El, number6El, number7El, number8El, number9El, 
];

// console.log(numberElArray);
// const operatorsArray = [displayEl, clearEl,pmEl, percentEl, additionEl, subtractionEl, multiplicationEl, divisionEl, equalEl, decimalEl];
// console.log(operatorsArray);

const otherE1Array = [displayEl, clearEl,pmEl, percentEl, additionEl, subtractionEl, multiplicationEl, divisionEl, equalEl, decimalEl];

// Functions
const getDisplayAsNum=()=>{
    return parseFloat(getDisplayAsStr());
}
console.log(getDisplayAsNum);
const getDisplayAsStr = () => {
    const currentDisplayStr = displayEl.textContent;
   return currentDisplayStr.split(',').join('');

};

const handleNumberClick = (numStr)=>{
const currentDisplayStr= getDisplayAsStr();
if(currentDisplayStr === '0'){
    displayEl.textContent= numStr;
}
   
else{

displayEl.textContent= parseFloat(currentDisplayStr + numStr).toLocaleString();
}
};


// Add Event Listeners to number and buttons
for(let i=0; i<numberElArray.length; i++){
    const numberEl = numberElArray[i];
    numberEl.addEventListener('click',()=>
    {
    handleNumberClick(i.toString())
    });
}
decimalEl.addEventListener('click',() =>{
   const currentDisplayStr = getDisplayAsStr();
   if(!currentDisplayStr.includes('.')){
  displayEl.textContent = currentDisplayStr + '.';
   }
})

// Add Event Listeners to function 
   cEl.addEventListener('click', ()=>{  
   
    currentDisplayStr('')
});
pmEl.addEventListener('click', ()=>{

});
percentEl.addEventListener('click', ()=>{
    const currentValueNum = getDisplayAsNum();
    const newValueNum = currentDisplayNum/100;
    currentDisplayStr(newValueNum.toString());
});
