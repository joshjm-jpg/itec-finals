/* Add this JavaScript to your <script> tag or external file */

function showText(text) {
    var textElement = document.getElementById('text');
    textElement.textContent = text;
    textElement.style.display = 'block';
}

function hideText() {
    var textElement = document.getElementById('text');
    textElement.style.display = 'none';
}
//wala to diko magaawa