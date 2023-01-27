const inputFileElement = document.getElementById('image');
const previewImageElement = document.getElementById('image-preview');

function displayImage() {
    const files = inputFileElement.files;

    if(!files || files.length === 0) {
        previewImageElement.style.display = "none";
        return;
    }

    const previewFile = files[0];

    previewImageElement.src = URL.createObjectURL(previewFile);

    previewImageElement.style.display = "block";
}

inputFileElement.addEventListener('change', displayImage);