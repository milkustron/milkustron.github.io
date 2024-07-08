document.addEventListener('DOMContentLoaded', function () {
    const text = "Data Science. Data Analytics. ML solutions.";
    const typingElement = document.getElementById('typingEffect');
    const delay = 200; 

    function type() {
        typingElement.innerHTML = ""; 
        let index = 0;
        function typeChar() {
            if (index < text.length) {
                typingElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeChar, delay);
            }
        }
        typeChar();
    }
    type();
});
