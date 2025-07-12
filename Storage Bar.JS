    const used = 90;
const total = 100;
const percent = (used / total) * 100;
const barMask = document.getElementById('barMask');
const storageText = document.getElementById('storageText');
barMask.style.width = (100 - percent) + '%';
storageText.textContent = `${used} GB of ${total} GB used`;
