let synth;
let active = false;

function setup () {
    createCanvas(windowWidth, windowHeight);
    Tone.Master.volume.value = 0;
  
    // Setup a synth with ToneJS
    synth = new Tone.Synth({
      oscillator : {
        type: 'sine'
      }
    });
    
    var feedbackDelay = new Tone.FeedbackDelay('8n',  0.6);
    synth.connect(feedbackDelay);
    synth.connect(Tone.Master);
    feedbackDelay.connect(Tone.Master);
    
    frameRate(25);
}

function play() {
    if (hexList.length > 1) {
        document.getElementById("hex").innerHTML = "";
        document.getElementById('error').style.visibility = 'visible';
        document.getElementById('play').style.visibility = 'hidden';
        document.getElementById("error").innerHTML = "Playing music based on hexgrams.";
    }
}

function sound() {
    synth.triggerAttackRelease("C4", "2n");
}

function music() {
    for (let i=0; i<hexList.length; i++) {
        switch(hex) {
            case "䷁":
                synth.triggerAttackRelease("C4", "8n");
                break;
            case "䷗":
                synth.triggerAttackRelease("C4", "8n");
                break;
            case "䷆":
                synth.triggerAttackRelease("C4", "8n");
                break;
            case "䷒":
                synth.triggerAttackRelease("C4", "8n");
                break;
            case "䷎":
                synth.triggerAttackRelease("C4", "8n");
                break;
            case "䷣":
                synth.triggerAttackRelease("C4", "8n");
                break;
            case "䷭":
                synth.triggerAttackRelease("C4", "8n");
                break;
            case "䷊":
                synth.triggerAttackRelease("C4", "8n");
                break;
            case "䷏":
                synth.triggerAttackRelease("C4", "8n");
                break;
            case "䷲":
                synth.triggerAttackRelease("C4", "8n");
                break;
            case "䷧":
                synth.triggerAttackRelease("C4", "8n");
                break;
            case "䷵":
                synth.triggerAttackRelease("C4", "8n");
                break;
            case "䷽":
                break;
            case "䷶":
                break;
            case "䷟":
                break;
            case "䷡":
                break;
            case "䷇":
                break;
            case "䷂":
                break;
            case "䷜":
                break;
            case "䷻":
                break;
            case "䷦":
                break;
            case "䷾":
                break;
            case "䷯":
                break;
            case "䷄":
                break;
            case "䷬":
                break;
            case "䷐":
                break;
            case "䷮":
                break;
            case "䷹":
                break;
            case "䷞":
                break;
            case "䷰":
                break;
            case "䷛":
                break;
            case "䷪":
                break;
            case "䷖":
                break;
            case "䷚":
                break;
            case "䷃":
                break;
            case "䷨":
                break;
            case "䷳":
                break;
            case "䷕":
                break;
            case "䷑":
                break;
            case "䷙":
                break;
            case "䷢":
                break;
            case "䷔":
                break;
            case "䷿":
                break;
            case "䷥":
                break;
            case "䷷":
                break;
            case "䷝":
                break;
            case "䷱":
                break;
            case "䷍":
                break; 
            case "䷓":
                break;
            case "䷩":
                break;
            case "䷺":
                break;
            case "䷼":
                break;
            case "䷴":
                break;
            case "䷤":
                break;
            case "䷸":
                break;
            case "䷈":
                break;
            case "䷋":
                break;
            case "䷘":
                break;
            case "䷅":
                break;
            case "䷉":
                break;
            case "䷠":
                break;
            case "䷌":
                break;
            case "䷫":
                break;
            case "䷀":
                break;
        }
        setTimeout(100);
    }
}