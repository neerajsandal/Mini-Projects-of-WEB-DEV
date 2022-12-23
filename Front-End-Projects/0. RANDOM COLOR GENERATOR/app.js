const button = document.querySelector('button')

button.addEventListener('click', function () {
    const r = Math.ceil(Math.random() * 254)
    const g = Math.ceil(Math.random() * 254)
    const b = Math.ceil(Math.random() * 254)

    const OurColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = OurColor;
})