let slideIndex = 1;
const slides = document.querySelectorAll('.slide');

const showSlides = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
};

// وظيفة للانتقال إلى الشريحة التالية
const nextSlide = () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
};

// وظيفة للانتقال إلى الشريحة السابقة
const prevSlide = () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides();
};

// بدء السلايدر التلقائي بعد 3 ثوانٍ
setTimeout(() => {
    setInterval(nextSlide, 3000); // تغيير الصورة كل 3 ثوانٍ
}, 3000);

// Get user's country and flag
fetch('https://ipinfo.io/json?token=3aa49852512ae7')
    .then(response => response.json())
    .then(data => {
        document.getElementById('country').innerText = data.country;
        document.getElementById('flag1').src = `https://flagcdn.com/64x48/${data.country.toLowerCase()}.png`;    })
    .catch(error => console.error('Error fetching location:', error));

    fetch('https://ipinfo.io/json?token=3aa49852512ae7')
    .then(response => response.json())
    .then(data => {
        document.getElementById('country2').innerText = data.country;
        document.getElementById('flag').src = `https://flagcdn.com/64x48/${data.country.toLowerCase()}.png`;    })
    .catch(error => console.error('Error fetching location:', error));

    fetch('https://ipinfo.io/json?token=3aa49852512ae7')
    .then(response => response.json())
    .then(data => {
        document.getElementById('country3').innerText = data.country;
        document.getElementById('flag2').src = `https://flagcdn.com/64x48/${data.country.toLowerCase()}.png`;    })
    .catch(error => console.error('Error fetching location:', error));

    