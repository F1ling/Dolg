const playButton = document.getElementById("playButton");
const backgroundVideo = document.getElementById("backgroundVideo");

// Включаем звук при загрузке страницы
backgroundVideo.muted = false;

playButton.addEventListener("click", () => {
    window.location.href = "https://www.banki.ru/"; // Замените на нужный URL
});