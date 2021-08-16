document.getElementById('deposit-button').addEventListener
    ('click', function () {
        const depositinput = document.getElementById('deposit-input');
        const newdepositamountText = depositinput.value;
        const newdepositamount = parseFloat(newdepositamountText);

        const depositTotal = document.getElementById('deposit-total');
        const previousAmountText = depositTotal.innerText;
        const previousAmount = parseFloat(previousAmountText);
        const newdepositTotal = previousAmount + newdepositamount;//ADD 
        depositTotal.innerText = newdepositTotal;


        /////balance increament 
        const addBalance = document.getElementById('total-balance');
        const previousBalanceText = addBalance.innerText;
        const previousBalance = parseFloat(previousBalanceText);
        const newDepositBalance = previousBalance + newdepositTotal;
        addBalance.innerText = newDepositBalance;
        // clear the input field
        depositinput.value = " ";
    })