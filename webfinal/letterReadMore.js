function myFunction2() {
    var dots = document.getElementById("letter");
    var moreText = document.getElementById("expand");
    var btnText = document.getElementById("letterBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}