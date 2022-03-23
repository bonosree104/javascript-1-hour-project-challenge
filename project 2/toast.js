const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', ()=>{
    createNotification();
});

function createNotification(){
     const notif = document.createElement('div');
     notif.innerHTML = 'this is challenge toast making';
     notif.classList.add('toast');
     container.appendChild(notif);

setTimeout(()=>{
  notif.remove();
        },3000);
    }