function genhex() {
    hex = "";
    for (let i=0; i<6; i++) {
        hex += getline() + "<br>";
    }
    document.getElementById("hex").innerHTML = hex; 
}

function flipcoin() {
    // 2 is tails, 3 is heads
    return Math.floor(Math.random()*2)+2    
}

function getline() {
    lineval = 0;
    for (let i=0; i<3; i++) {
        lineval += flipcoin();
    }
    switch(lineval) {
        case 9:
            return "-- o --";
        case 8:
            return "-- \xa0\xa0 --";
        case 7:
            return "-------";
        case 6:
            return "-- x --";
    }
}