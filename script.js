function sendHug() {

for (let i = 0; i < 5; i++) { // Create 5 hearts per tap
    const heart = document.createElement('div');
    heart.className = 'heart';

     // Set only one color (soft pink)
    heart.style.background = '#ed1132'; // You can change to any color you like
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '80%';

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000); // Match floatUp animation time
  }
}