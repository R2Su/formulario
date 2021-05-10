var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

var getData = function() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var tel = document.getElementById("tel").value;
    var mensaje = document.getElementById("mensaje").value;

}