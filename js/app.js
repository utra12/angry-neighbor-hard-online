document.addEventListener('DOMContentLoaded', () => {
  const previewContainer = document.getElementById('preview-container');
  const previewImage = document.getElementById('preview-image');
  const previewCaption = document.getElementById('preview-caption');
  const versionButtons = document.querySelectorAll('.version-btn');

  versionButtons.forEach(btn => {
    const imgSrc = btn.getAttribute('data-img');
    const title = btn.getAttribute('data-title');

    // Предзагрузка скриншотов в память браузера
    if (imgSrc) {
      const preload = new Image();
      preload.src = imgSrc;
    }

    // При наведении показываем скриншот
    btn.addEventListener('mouseenter', () => {
      previewImage.src = imgSrc;
      previewCaption.textContent = title;
      previewContainer.classList.add('active');
    });

    // Когда убираем мышь
    btn.addEventListener('mouseleave', () => {
      previewContainer.classList.remove('active');
    });

    // Поддержка фокуса с клавиатуры
    btn.addEventListener('focus', () => {
      previewImage.src = imgSrc;
      previewCaption.textContent = title;
      previewContainer.classList.add('active');
    });

    btn.addEventListener('blur', () => {
      previewContainer.classList.remove('active');
    });
  });
});
