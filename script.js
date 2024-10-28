const bar =document.getElementById('bar');
const close =document.getElementById('close');
const nav =document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}
const ProceedToBuy = document.getElementById("ProceedToBuy");
ProceedToBuy.addEventListener('click', () => {
    window.alert("Successfully Buy the Product ! ");
})
