// Handle drag and drop
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('fileElem');
const imageURLInput = document.getElementById('imageURL');
const urlButton = document.getElementById('urlButton');
const preview = document.getElementById('preview');

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Highlight drop area when item is dragged over
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => {
        dropArea.classList.add('highlight');
    }, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => {
        dropArea.classList.remove('highlight');
    }, false);
});

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;
    handleFiles(files);
}

// Handle selected file
fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    handleFiles(files);
});

function handleFiles(files) {
    [...files].forEach(file => {
        if (file.type.startsWith('image/')) {
            displayImage(file);
        }
    });
}

// Display image preview
function displayImage(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        const img = document.createElement('img');
        img.src = reader.result;
        preview.innerHTML = '';
        preview.appendChild(img);
    };
}

// Handle image URL input
urlButton.addEventListener('click', () => {
    const url = imageURLInput.value;
    if (url && isValidImageURL(url)) {
        displayImageFromURL(url);
    } else {
        alert('Please provide a valid image URL.');
    }
});

function isValidImageURL(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

function displayImageFromURL(url) {
    const img = document.createElement('img');
    img.src = url;
    preview.innerHTML = '';
    preview.appendChild(img);
}