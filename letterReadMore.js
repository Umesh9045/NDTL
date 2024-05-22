function myFunction2(s1, s2, s3) {
    var dots = document.getElementById(s1);
    var moreText = document.getElementById(s2);
    var btnText = document.getElementById(s3);

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

function addCard() {


    var conut = 1;
    var cardDisplay = document.getElementById("card-body-main");
    cardDisplay.innerHTML += `
    <div class="card-body">
    <div class="file-body">
        <div class="post">
            <div class="post__avatar">
                <img
                    src="images/pratik.jpg" />
            </div>

            <div class="post__body">

                <div class="post__header">

                    <div class="post__headerText">

                        <h3>
                            <a href="">Pratik Joshi</a>
                            <span class="post__headerSpecial"><span class="material-icons post__badge">
                                    verified
                                </span><br><a href="">@HeadClerk1@NashikZP</a></span>
                        </h3>
                    </div><br>
                    <div class="post__headerDescription">
                        <div class="main-letter">

                            <p>Respected <a href="">Respected @DyEngineer1 Sir,</a></p>
                           
                            <p>Request for your kind advice. Thank you.</p>
                          
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>

`;
    conut = conut + 1;

}