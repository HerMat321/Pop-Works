function slider()
{
    const image = document.querySelector(".slider img"); // Pobieramy obrazek
    const totalImages = 3; // Liczba obrazów w folderze
    let i = 1; // Zaczynamy od pierwszego obrazka

    //Zmienianie obrazków w divie
    setInterval(() => {
        i++; 
        if (i > totalImages)
        {
            i = 1;
        } 
        image.src = `../img/car_cleaning_slider/${i}.png`;
    }, 2500); 
}


slider();