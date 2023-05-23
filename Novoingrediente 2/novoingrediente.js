const inputFle =
document.querySelector('captura__input');
const pictureImage =
document.querySelector('.captura__image');
const pictureImageTxt = "Ensira sua imagem";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change' , function(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(e) {
            const readerTarget = e.target;
            const img = document.createElement('img');
            img.classList.add('picture__img');
            pictureImage.innerHTML = '';
            pictureImage.appendChild(img);
        });
        reader.readAsDataURL(file);
    } else {
        pictureImage.innerHTML = pictureImageTxt;
    }
});
