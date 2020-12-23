// alert ("Bun venit pe pagina Liceului Teoretic 'Mihail Sadoveanu");

var data = new Date();
document.getElementById('an').innerHTML = data.getFullYear();

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className = "nav mobile";
    } else {
        x.className = "nav";
    }
}