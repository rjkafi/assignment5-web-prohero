// document.getElementById('donation-btn').addEventListener('click', function () {
//     this.classList.add('bg-btn');
//     getId('history-btn').classList.remove('bg-btn');
//     showSection('donation');
// })
// document.getElementById('history-btn').addEventListener('click', function () {
//     this.classList.add('bg-btn');
//     getId('donation-btn').classList.remove('bg-btn');
//     showSection('history');
// })







document.getElementById('noakhali-btn').addEventListener('click',function(){
    
    const donateAmount=getInputValueById('input-amount');
    const accountBalance=getTextFieldValueById('my-balance');
     if (accountBalance < donateAmount) {
        alert('You have no enough Balance');
        return;
    }
    else if (isNaN(donateAmount)) {
        alert('Invalid Donate Amount');
        return;

    }
     const newBalance = accountBalance - donateAmount;
     getHtmlElementId('my-balance').innerText=newBalance;
     getHtmlElementId('input-amount').value='';
     const noakhaliAmount=getTextFieldValueById('noakhali-amount');
     const donate=donateAmount + noakhaliAmount;
     getHtmlElementId('noakhali-amount').innerText=donate;
     getHtmlElementId('my-modal').showModal();
   
 
     // history for noakhali area

    const donateHistory=getHtmlElementId('donation-history');
     donateHistory.classList.remove('hidden');
     const div=document.createElement('div');
     const date = new Date();
     div.classList.add('border-2','rounded-xl','border-neutral-200','p-8','my-6')
     div.innerHTML=`<h1 class="font-bold text-xl mb-4">${donateAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1> <p class="text-base text-neutral-500">${date}</p>`;
     donateHistory.appendChild(div);
})



    // Feni  area donate start

    document.getElementById('feni-btn').addEventListener('click',function(){
    
        const donateAmount=getInputValueById('input-feni-amount');
        const accountBalance=getTextFieldValueById('my-balance');
         if (accountBalance < donateAmount) {
            alert('You have no enough Balance');
            return;
        }
        else if (isNaN(donateAmount)) {
            alert('Invalid Donate Amount');
            return;
    
        }
         const newBalance = accountBalance - donateAmount;
         getHtmlElementId('my-balance').innerText=newBalance;
         getHtmlElementId('input-feni-amount').value='';
         const feniAmount=getTextFieldValueById('feni-amount');
         const donate=donateAmount + feniAmount;
         getHtmlElementId('feni-amount').innerText=donate;
         getHtmlElementId('my-modal').showModal();
       
     
         // history for feni area's Donation
    
        const donateHistory=getHtmlElementId('donation-history');
         donateHistory.classList.remove('hidden');
         const div=document.createElement('div');
         const date = new Date();
         div.classList.add('border-2','rounded-xl','border-neutral-200','p-8','my-6')
         div.innerHTML=`<h1 class="font-bold text-xl mb-4">${donateAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1> <p class="text-base text-neutral-500">${date}</p>`;
         donateHistory.appendChild(div);
    })

      // Quota Movement donate start

      document.getElementById('quote-btn').addEventListener('click',function(){
    
        const donateAmount=getInputValueById('input-quote-amount');
        const accountBalance=getTextFieldValueById('my-balance');
         if (accountBalance < donateAmount) {
            alert('You have no enough Balance');
            return;
        }
        else if (isNaN(donateAmount)) {
            alert('Invalid Donate Amount');
            return;
    
        }
         const newBalance = accountBalance - donateAmount;
         getHtmlElementId('my-balance').innerText=newBalance;
         getHtmlElementId('input-quote-amount').value='';
         const quoteAmount=getTextFieldValueById('quote-amount');
         const donate=donateAmount + quoteAmount;
         getHtmlElementId('quote-amount').innerText=donate;
         getHtmlElementId('my-modal').showModal();
       
     
         // history for Quota Movement Donation
    
        const donateHistory=getHtmlElementId('donation-history');
         donateHistory.classList.remove('hidden');
         const div=document.createElement('div');
         const date = new Date();
         div.classList.add('border-2','rounded-xl','border-neutral-200','p-8','my-6')
         div.innerHTML=`<h1 class="font-bold text-xl mb-4">${donateAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1> <p class="text-base text-neutral-500">${date}</p>`;
         donateHistory.appendChild(div);
    }) 