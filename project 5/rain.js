function createHEART(){
    const heart = document.createElement('div');
     heart.classList.add('heart');
      heart.innerText= '💜';
      document.body.appendChild(heart);

}
setInterval(createHEART, 300);