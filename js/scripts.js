const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function adjustImageSize() {
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        const imgAspectRatio = img.naturalWidth / img.naturalHeight;
        const sliderAspectRatio = slide.offsetWidth / slide.offsetHeight;

        img.style.position = 'absolute';
        
        if (imgAspectRatio < sliderAspectRatio) {
            const scaleFactor = slide.offsetWidth / img.naturalWidth;
            const heightDiff = (img.naturalHeight * scaleFactor - slide.offsetHeight) / 2;
            
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.top = `-${heightDiff}px`;
            img.style.left = '0';
        } else {
            const scaleFactor = slide.offsetHeight / img.naturalHeight;
            const widthDiff = (img.naturalWidth * scaleFactor - slide.offsetWidth) / 2;
            
            img.style.width = 'auto';
            img.style.height = '100%';
            img.style.top = '0';
            img.style.left = `-${widthDiff}px`;
        }

        img.style.minWidth = '100%';
        img.style.minHeight = '100%';
        img.style.objectFit = 'cover';
    });
}

const showSlide = index => {
    currentIndex = (index + slides.length) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

document.getElementById('prev').onclick = () => showSlide(currentIndex - 1);
document.getElementById('next').onclick = () => showSlide(currentIndex + 1);

window.addEventListener('resize', adjustImageSize);

window.addEventListener('load', () => {
    adjustImageSize();
    setInterval(() => showSlide(currentIndex + 1), 5000);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const toggleDarkMode = document.getElementById('toggleDarkMode');
const body = document.body;

// Cek preferensi dark mode sebelumnya dari localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleDarkMode.textContent = '☀️'; // Ubah ikon ke matahari
}

// Tambahkan event listener untuk mengubah mode
toggleDarkMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Simpan preferensi pengguna di localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleDarkMode.textContent = '☀️'; // Ubah ikon ke matahari
    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleDarkMode.textContent = '🌙'; // Ubah ikon ke bulan
    }
});

