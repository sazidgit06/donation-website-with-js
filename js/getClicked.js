document.getElementById('donation-btn-id').addEventListener('click', function(){
    getColorById('donation-btn-id');
    getInfo('donation-page-id');
});

document.getElementById('history-btn-id').addEventListener('click', function(){
    getColorById('history-btn-id');
    getInfo('history-page-id');
});

document.getElementById('card1-id').addEventListener('click', function(){
    const inputValue = getInput('input-field-id');
    const cardBalance = getText('present-card-balance-id');
    const mainBalance = getText('main-balance');
    const newMainBalance = mainBalance - inputValue;
    const newBalance = inputValue + cardBalance;
    document.getElementById('present-card-balance-id').innerText = newBalance + ' BDT';
    document.getElementById('main-balance').innerText = newMainBalance + ' BDT';

    // history

    const p = document.createElement('p');
    p.innerText = `
         ${inputValue} taka is donated for flood relief in feni, Bangladesh
    `;
    document.getElementById('history-page-id').appendChild(p);

    // modal

    document.getElementById('my_modal').showModal();
});