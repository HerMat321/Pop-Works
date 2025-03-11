function back()
{
    location.replace("../www/index.html");
}

//Obsluga przycisku
document.querySelector("#back_button").addEventListener("click",back);