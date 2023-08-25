const element = document.querySelector('p');
const alert = function(){
    element.classList.remove('normal');
    element.classList.add('warning')

    // element.classList.replace('normal', 'warnong'); 
}

setTimeout(alert,2000);