function getColorById(id){
    document.getElementById('donation-btn-id').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn-id').classList.remove('bg-[#B4F461]');
    
    document.getElementById(id).classList.add('bg-[#B4F461]');

}