const calcForm = document.querySelector('#calc-form');
const results = document.querySelector('#results');
const loader = document.querySelector("#loader");

calcForm.addEventListener('submit', function(e){
    e.preventDefault();

    loader.style.display = 'block';
    results.style.display = 'none';

    setTimeout(calculateResults, 1000);

});

function calculateResults(){

    // e.preventDefault();
    const amount = document.querySelector('#amount');
    const interestRate = document.querySelector('#interest-rate');
    const timeToRepay = document.querySelector('#time');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');
    const totalInstallments = document.querySelector("#total-installments");

    const p = parseFloat(amount.value); //principal
    const i = parseFloat(interestRate.value / 100) / 12; // interest rate
    const n = parseFloat(timeToRepay.value) * 12; // time in months

    const x = Math.pow(1 + i, n);
    var monthlyPay = (p * x * i) / (x - 1);

    if(isFinite(monthlyPay)){
        monthlyPayment.value = monthlyPay.toFixed(2);
        totalPayment.value = (monthlyPay * n).toFixed(2);
        totalInterest.value = ((monthlyPay * n) - p).toFixed(2);
        totalInstallments.value = n;
        loader.style.display = 'none';
        results.style.display = 'block';
    }else{
        showError("please enter correctly");
        loader.style.display = "none"; 
    }
}

function showError(msg){
    loader.style.display = "none";

    var errorDiv = document.createElement('div');
    errorDiv.classList = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(msg));
    var card = document.querySelector('.card');
    var heading = document.querySelector('.heading');

    if(card.querySelector('.alert-danger') != null){
        
    }else{
        loader.style.display = "none"; 
        card.insertBefore(errorDiv, heading);
    }


    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}