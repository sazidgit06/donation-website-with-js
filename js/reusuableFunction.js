function getColorById(id){
    document.getElementById('donation-btn-id').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn-id').classList.remove('bg-[#B4F461]');
    
    document.getElementById(id).classList.add('bg-[#B4F461]');

}

function getInfo(id){
    document.getElementById('donation-page-id').classList.add('hidden');
    document.getElementById('history-page-id').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


function getInput(id){
    const inputValue = document.getElementById(id).value;
    const inputFloat = parseFloat(inputValue);
    return inputFloat;
}

function getText(id){
    const getbalance = document.getElementById(id).innerText;
    const balanceFloat = parseFloat(getbalance);
    return balanceFloat;
}