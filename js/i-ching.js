function genHex() {
    hex = "";
    for (let i=0; i<6; i++) {
        hex += getLine();
    } 

    simplifyHex(hex);
    document.getElementById("hex").innerHTML = hexList;
    button.style.visibility = 'visible';
}

function play() {
    if (hexList.length > 1) {
        document.getElementById("hex").innerHTML = "";
        document.getElementById("error").innerHTML = "Playing music based on hexgrams.";
    }
}

function flipCoin() {
    // 2 is tails, 3 is heads
    return Math.floor(Math.random()*2)+2    
}

function getLine() {
    lineVal = 0;
    for (let i=0; i<3; i++) {
        lineVal += flipCoin();
    }
    switch(lineVal) {
        case 9:
            return "b"; // -- o --
        case 8:
            return "b"; // --   --
        case 7:
            return "c"; // -------
        case 6:
            return "c"; // -- x --
    }
}

function simplifyHex(hex) {
    switch(hex) {
        case "bbbbbb":
            hexList.push("䷁");
            break;
        case "cbbbbb":
            hexList.push("䷗");
            break;
        case "bcbbbb":
            hexList.push("䷆");
            break;
        case "ccbbbb":
            hexList.push("䷒");
            break;
        case "bbcbbb":
            hexList.push("䷎");
            break;
        case "cbcbbb":
            hexList.push("䷣");
            break;
        case "bccbbb":
            hexList.push("䷭");
            break;
        case "cccbbb":
            hexList.push("䷊");
            break;
        case "bbbcbb":
            hexList.push("䷏");
            break;
        case "cbbcbb":
            hexList.push("䷲");
            break;
        case "bcbcbb":
            hexList.push("䷧");
            break;
        case "ccbcbb":
            hexList.push("䷵");
            break;
        case "bbccbb":
            hexList.push("䷽");
            break;
        case "cbccbb":
            hexList.push("䷶");
            break;
        case "bcccbb":
            hexList.push("䷟");
            break;
        case "ccccbb":
            hexList.push("䷡"); 
            break;
        case "bbbbcb":
            hexList.push("䷇");
            break;
        case "cbbbcb":
            hexList.push("䷂");
            break;
        case "bcbbcb":
            hexList.push("䷜");
            break;
        case "ccbbcb":
            hexList.push("䷻");
            break;
        case "bbcbcb":
            hexList.push("䷦");
            break;
        case "cbcbcb":
            hexList.push("䷾");
            break;
        case "bccbcb":
            hexList.push("䷯");
            break;
        case "cccbcb":
            hexList.push("䷄");
            break;
        case "bbbccb":
            hexList.push("䷬");
            break;
        case "cbbccb":
            hexList.push("䷐");
            break;
        case "bcbccb":
            hexList.push("䷮");
            break;
        case "ccbccb":
            hexList.push("䷹");
            break;
        case "bbcccb":
            hexList.push("䷞");
            break;
        case "cbcccb":
            hexList.push("䷰");
            break;
        case "bccccb":
            hexList.push("䷛");
            break;
        case "cccccb":
            hexList.push("䷪");
            break;
        case "bbbbbc":
            hexList.push("䷖");
            break;
        case "cbbbbc":
            hexList.push("䷚");
            break;
        case "bcbbbc":
            hexList.push("䷃");
            break;
        case "ccbbbc":
            hexList.push("䷨");
            break;
        case "bbcbbc":
            hexList.push("䷳");
            break;
        case "cbcbbc":
            hexList.push("䷕");
            break;
        case "bccbbc":
            hexList.push("䷑");
            break;
        case "cccbbc":
            hexList.push("䷙");
            break;
        case "bbbcbc":
            hexList.push("䷢");
            break;
        case "cbbcbc":
            hexList.push("䷔");
            break;
        case "bcbcbc":
            hexList.push("䷿");
            break;
        case "ccbcbc":
            hexList.push("䷥");
            break;
        case "bbccbc":
            hexList.push("䷷");
            break;
        case "cbccbc":
            hexList.push("䷝");
            break;
        case "bcccbc":
            hexList.push("䷱");
            break;
        case "ccccbc":
            hexList.push("䷍");
            break; 
        case "bbbbcc":
            hexList.push("䷓");
            break;
        case "cbbbcc":
            hexList.push("䷩");
            break;
        case "bcbbcc":
            hexList.push("䷺");
            break;
        case "ccbbcc":
            hexList.push("䷼");
            break;
        case "bbcbcc":
            hexList.push("䷴");
            break;
        case "cbcbcc":
            hexList.push("䷤");
            break;
        case "bccbcc":
            hexList.push("䷸");
            break;
        case "cccbcc":
            hexList.push("䷈");
            break;
        case "bbbccc":
            hexList.push("䷋");
            break;
        case "cbbccc":
            hexList.push("䷘");
            break;
        case "bcbccc":
            hexList.push("䷅");
            break;
        case "ccbccc":
            hexList.push("䷉");
            break;
        case "bbcccc":
            hexList.push("䷠");
            break;
        case "cbcccc":
            hexList.push("䷌");
            break;
        case "bccccc":
            hexList.push("䷫");
            break;
        case "cccccc":
            hexList.push("䷀");
            break;
    }
}

var hexList = [];

function getHex() {
    return hexList;
}