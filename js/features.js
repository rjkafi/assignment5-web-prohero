function showSection(id){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function blog(){
    window.location.href = './index.html';
}
function home(){
    window.location.href = './blog.html';
}