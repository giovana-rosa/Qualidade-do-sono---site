
let elementos = document.querySelectorAll('h3');
elementos.forEach((item) => {
    item.addEventListener('click', function (e) {
        console.log("Foi");
        let estado = this.parentNode.querySelector("p").style.display;
        if (estado == "block") {
            this.parentNode.querySelector("p").style.display = "none";
            this.querySelector("span").innerText = "+";
        } else {
            this.parentNode.querySelector("p").style.display = "block";
            this.querySelector("span").innerText = "-";
        }
    })
});