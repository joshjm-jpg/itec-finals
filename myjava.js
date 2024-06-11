document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'url("background.webp")',
        'url("imgtwo.jpg")',
        'url("image2.jpg")',
        'url("image3.jpg")'
        
    ];

    let currentIndex = 0;

    function changeBackground() {
        document.body.style.backgroundImage = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 50000); 

    
    changeBackground();
});

///////////
