const donateBtn =document.getElementById('donate-btn');
// let totalAmmount = 0;
donateBtn.addEventListener('click', function(){
    const inputAreaEl =parseFloat(document.getElementById('input-area').value);
    const totalAmmountEl =document.getElementById('total-ammount').innerText;
     
     console.log(totalAmmountEl);
    
    

    // const totalAmmountAdd = totalAmmountEl -inputAreaEl;
    const totalAmmountElUpdate = parseFloat(totalAmmountEl);
    const addEl =totalAmmountElUpdate - inputAreaEl;
    
    document.getElementById('total-ammount').innerText=addEl;
   //  const addEl = inputAreaEl - totalAmmountElUpdate;
   //  totalAmmountElUpdate.innerText = addEl
//     const totalAmmountAdd = inputAreaEl - totalAmmountEl;
//  console.log(totalAmmountAdd);

const donateTkEl =document.getElementById('donate-tk');
 donateTkEl.innerText = inputAreaEl;

 
if(inputAreaEl > addEl){
     alert('Sufficent Blance');
    
}

     if (isNaN(inputAreaEl) || inputAreaEl <= 0){
      
      return alert('invalid number');
     }
     // else{
     //      alert('block')
     // }

      const donateModalEl =document.getElementById('donate-modal');
      
      donateModalEl.classList.remove('hidden')
      const closeBtnEl =document.getElementById('close-btn');
      closeBtnEl.addEventListener('click', function(){
          donateModalEl.classList.add('hidden')
          closeBtnEl.classList.add('hidden');

          
      })

     
      
      
      
      

      const historyAreaEl =document.getElementById('div');
      historyAreaEl.className ="lg:w-[800px] lg:h-[70px] w-[300px] border border-gray-400 rounded-[5px] mt-[20px] mx-auto";
     //  historyContainer.classList.remove('hidden')
      historyAreaEl.innerHTML=`

      <p class="text-gray-800 font-bold">${new Date().toLocaleDateString()}</p>
      <p class="text-gray-600 font-bold">Taka is Donated for Flood Relief in Feni,Bangladesh</p>
      
      `
      const historyContainer =document.getElementById('history-container');
      historyContainer.insertBefore(historyAreaEl, historyContainer.appendChild);
     //  historyContainer.classList.remove('hidden')
    
   
    
})



const donateBtnEl =document.getElementById('donate-btn-s');
// let totalAmmount = 0;
donateBtnEl.addEventListener('click', function(){
    const inputAreaEl =parseFloat(document.getElementById('input-area-s').value);
    const totalAmmountEl =document.getElementById('total-ammount').innerText;
     
     console.log(totalAmmountEl, inputAreaEl);
    
    

    // const totalAmmountAdd = totalAmmountEl -inputAreaEl;
    const totalAmmountElUpdate = parseFloat(totalAmmountEl);
    const addEl =totalAmmountElUpdate - inputAreaEl;
    
    document.getElementById('total-ammount').innerText=addEl;
   //  const addEl = inputAreaEl - totalAmmountElUpdate;
   //  totalAmmountElUpdate.innerText = addEl
//     const totalAmmountAdd = inputAreaEl - totalAmmountEl;
//  console.log(totalAmmountAdd);

const donateTkEl =document.getElementById('donate-tk-s');
 donateTkEl.innerText = inputAreaEl;

if(inputAreaEl > addEl){
     alert('Sufficent Blance');
    
}

     if (isNaN(inputAreaEl) || inputAreaEl <= 0){
      
      return alert('invalid number');
     }
     // else{
     //      alert('block')
     // }
     const donateModalSe =document.getElementById('donate-modal-s');
      
      donateModalSe.classList.remove('hidden')
      const closeBtnEl =document.getElementById('close-btn-s');
      closeBtnEl.addEventListener('click', function(){
          donateModalSe.classList.add('hidden')
          closeBtnEl.classList.add('hidden');

          
      })
    
   
    
})

// last area
const donateBtnLast =document.getElementById('donate-btn-last');
// let totalAmmount = 0;
donateBtnLast.addEventListener('click', function(){
    const inputAreaEl =parseFloat(document.getElementById('input-area-last').value);
    const totalAmmountEl =document.getElementById('total-ammount').innerText;
     
     console.log(totalAmmountEl, inputAreaEl);
    
    

    // const totalAmmountAdd = totalAmmountEl -inputAreaEl;
    const totalAmmountElUpdate = parseFloat(totalAmmountEl);
    const addEl =totalAmmountElUpdate - inputAreaEl;
    
    document.getElementById('total-ammount').innerText=addEl;
   //  const addEl = inputAreaEl - totalAmmountElUpdate;
   //  totalAmmountElUpdate.innerText = addEl
//     const totalAmmountAdd = inputAreaEl - totalAmmountEl;
//  console.log(totalAmmountAdd);

const donateTkEl =document.getElementById('donate-tk-last');
 donateTkEl.innerText = inputAreaEl;

if(inputAreaEl > addEl){
     alert('Sufficent Blance');
    
}

     if (isNaN(inputAreaEl) || inputAreaEl <= 0){
      
      return alert('invalid number');
     }
     // else{
     //      alert('block')
     // }
     const donateModalThree =document.getElementById('donate-modal-t');
      
      donateModalThree.classList.remove('hidden')
      const closeBtnEl =document.getElementById('close-btn-t');
      closeBtnEl.addEventListener('click', function(){
          donateModalThree.classList.add('hidden')
          closeBtnEl.classList.add('hidden');

          
      })
    
   
    
})

const historyBtnEl =document.getElementById('history-btn');
const donationBtnEl =document.getElementById('donation-btn')
historyBtnEl.addEventListener('click', function(){
     historyBtnEl.classList.add('bg-[#B4F461]', 'text-black');
     donationBtnEl.classList.remove('bg-[#B4F461]', 'text-black');
     donationBtnEl.classList.add('bg-[#1111114D]')
    
     
     
})


// blog button area

const blogBtnEl =document.getElementById('blog-btn');
blogBtnEl.addEventListener('click', function(){
     window.location.href ='./faq.html';

     
})

const homeBtnEl =document.getElementById('home-btn');
homeBtnEl.addEventListener('click', function(){
     window.location.href ='./index.html';
     console.log(homeBtnEl);
})


// let isBlog =false;
// const blogBtnEl =document.getElementById('blog-btn');
// blogBtnEl.addEventListener('click', function(){
//      if(!isBlog){
//           window.location.href ='./faq.html';
//           blogBtnEl.innerText ='';
//      }

//      else{
//           window.location.back= './index.js';
//           blogBtnEl.innerText ='';
//           isBlog =false;
//      }
// })

