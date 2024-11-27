// Qidiruv funksiyasi
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase(); // Kiritilgan qidiruv qiymati
    cards.forEach(card => {
        const name = card.querySelector('h1').textContent.toLowerCase(); // Kartadagi ism
        if (name.includes(filter)) {
            card.style.display = ''; // Ko'rsatish
        } else {
            card.style.display = 'none'; // Yashirish
        }
    });
});
