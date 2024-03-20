const bar = document.getElementById('bar');
const cloze = document.getElementById('cloze');
const nav = document.getElementById('navbar');
if(bar) {
    bar.addEventListener('click',()=> {
        nav.classList.add('active');
    })
}
if(cloze) {
    cloze.addEventListener('click',()=> {
        nav.classList.remove('active');
    })
}