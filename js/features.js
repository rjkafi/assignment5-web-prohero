function showSection(id){
    document.getElementById('donation-btn').classList.add('hidden');
    document.getElementById('history-btn').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function blog(){
    window.location.href = '../blog.html';
}
function home(){
    window.location.href = '../index.html';
}