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