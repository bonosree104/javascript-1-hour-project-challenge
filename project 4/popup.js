const opened = document.getElementById("open");
const close = document.getElementById('close');
const container = document.getElementById('container');

opened.addEventListner('click', () => {
    if(open.classList.contains('open')){
        open.classList.add('active');
        close.classList.rtemove('active');
    }
});

close.addEventListner('click', () => {
    
    if(close.classList.contains('close')){
        close.classList.add('active');
        open.classList.remove('active');
    }
});


