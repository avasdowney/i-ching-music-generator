let synth;
let active = false;

var dict = {
    "":1
};

function setup () {
    Tone.Master.volume.value = 0;
  
    // Setup a synth with ToneJS
    synth = new Tone.Synth({
      oscillator : {
        type: 'triangle'
      }
    });

    drum = new Tone.MembraneSynth({
      oscillator : {
        type: 'triangle'
      }
    });

    noise = new Tone.NoiseSynth({
        oscillator : {
          type: 'triangle'
        }
      });

    test = new Tone.FMSynth({
      oscillator : {
        type: 'triangle'
      }
    });
    
    var feedbackDelay = new Tone.FeedbackDelay();
    synth.connect(feedbackDelay);
    synth.connect(Tone.Master);
    drum.connect(feedbackDelay);
    drum.connect(Tone.Master);
    noise.connect(feedbackDelay);
    noise.connect(Tone.Master);
    test.connect(feedbackDelay);
    test.connect(Tone.Master);
    feedbackDelay.connect(Tone.Master);
}

function play() {
    if (hexList.length > 1) {
        for (let i=0; i<hexList.length; i++) {
            music(hexList[i]);
            sleep(600);
        }
    }
}

function sound() {
    test.triggerAttackRelease("C4", 0.05); 
}

function music(hex) {
    switch(hex) {
        case "䷁":
            synth.triggerAttackRelease("A1", "8n"); 
            break;
        case "䷗":
            synth.triggerAttackRelease("A2", "8n"); 
            break;
        case "䷆":
            synth.triggerAttackRelease("A3", "8n"); 
            break;
        case "䷒":
            synth.triggerAttackRelease("A4", "8n"); 
            break;
        case "䷎":
            synth.triggerAttackRelease("A5", "8n"); 
            break;
        case "䷣":
            synth.triggerAttackRelease("A6", "8n"); 
            break;             
        case "䷭":
            synth.triggerAttackRelease("B1", "8n"); 
            break;             
        case "䷊":
            synth.triggerAttackRelease("B2", "8n"); 
            break;                
        case "䷏":
            synth.triggerAttackRelease("B3", "8n"); 
            break;              
        case "䷲":
            synth.triggerAttackRelease("B4", "8n"); 
            break;              
        case "䷧":
            synth.triggerAttackRelease("B5", "8n"); 
            break;              
        case "䷵":
            synth.triggerAttackRelease("B6", "8n"); 
            break;              
        case "䷽":
            synth.triggerAttackRelease("C1", "8n"); 
            break;                
        case "䷶":
            synth.triggerAttackRelease("C2", "8n"); 
            break;                
        case "䷟":
            synth.triggerAttackRelease("C3", "8n"); 
            break;               
        case "䷡":
            synth.triggerAttackRelease("C4", "8n"); 
            break;               
        case "䷇":
            synth.triggerAttackRelease("C5", "8n"); 
            break;               
        case "䷂":
            synth.triggerAttackRelease("C6", "8n"); 
            break;               
        case "䷜":
            synth.triggerAttackRelease("D1", "8n"); 
            break;               
        case "䷻":
            synth.triggerAttackRelease("D2", "8n"); 
            break;              
        case "䷦":
            synth.triggerAttackRelease("D3", "8n"); 
            break;
        case "䷾":
            synth.triggerAttackRelease("D4", "8n"); 
            break;
        case "䷯":
            synth.triggerAttackRelease("D5", "8n"); 
            break;
        case "䷄":
            synth.triggerAttackRelease("D6", "8n"); 
            break;
        case "䷬":
            synth.triggerAttackRelease("E1", "8n"); 
            break;
        case "䷐":
            synth.triggerAttackRelease("E2", "8n"); 
            break;
        case "䷮":
            synth.triggerAttackRelease("E3", "8n"); 
            break;
        case "䷹":
            synth.triggerAttackRelease("E4", "8n"); 
            break;
        case "䷞":
            synth.triggerAttackRelease("E5", "8n"); 
            break;
        case "䷰":
            synth.triggerAttackRelease("E6", "8n"); 
            break;
        case "䷛":
            synth.triggerAttackRelease("F1", "8n"); 
            break;
        case "䷪":
            synth.triggerAttackRelease("F2", "8n"); 
            break;
        case "䷖":
            synth.triggerAttackRelease("F3", "8n"); 
            break;
        case "䷚":
            synth.triggerAttackRelease("F4", "8n"); 
            break;
        case "䷃":
            synth.triggerAttackRelease("F5", "8n"); 
            break;
        case "䷨":
            synth.triggerAttackRelease("F6", "8n"); 
            break;
        case "䷳":
            synth.triggerAttackRelease("G1", "8n"); 
            break;
        case "䷕":
            synth.triggerAttackRelease("G2", "8n"); 
            break;
        case "䷑":
            synth.triggerAttackRelease("G3", "8n"); 
            break;
        case "䷙":
            synth.triggerAttackRelease("G4", "8n"); 
            break;
        case "䷢":
            synth.triggerAttackRelease("G5", "8n"); 
            break;
        case "䷔":
            synth.triggerAttackRelease("G6", "8n"); 
            break;
        case "䷿":
            drum.triggerAttackRelease("A2", "8n"); 
            break;
        case "䷥":
            drum.triggerAttackRelease("A4", "8n"); 
            break;
        case "䷷":
            drum.triggerAttackRelease("A6", "8n"); 
            break;
        case "䷝":
            drum.triggerAttackRelease("B2", "8n"); 
            break;
        case "䷱":
            drum.triggerAttackRelease("B4", "8n"); 
            break;
        case "䷍":
            drum.triggerAttackRelease("B6", "8n"); 
            break;
        case "䷓":
            drum.triggerAttackRelease("C2", "8n"); 
            break;
        case "䷩":
            drum.triggerAttackRelease("C4", "8n"); 
            break;
        case "䷺":
            drum.triggerAttackRelease("C6", "8n"); 
            break;
        case "䷼":
            drum.triggerAttackRelease("D4", "8n"); 
            break;
        case "䷴":
            drum.triggerAttackRelease("A1", "8n"); 
            break;
        case "䷤":
            drum.triggerAttackRelease("A3", "8n"); 
            break;
        case "䷸":
            drum.triggerAttackRelease("A5", "8n"); 
            break;
        case "䷈":
            drum.triggerAttackRelease("B1", "8n"); 
            break;
        case "䷋":
            drum.triggerAttackRelease("B3", "8n"); 
            break;
        case "䷘":
            drum.triggerAttackRelease("B5", "8n"); 
            break;
        case "䷅":
            drum.triggerAttackRelease("C1", "8n"); 
            break;
        case "䷉":
            drum.triggerAttackRelease("C3", "8n"); 
            break;
        case "䷠":
            drum.triggerAttackRelease("C5", "8n"); 
            break;
        case "䷌":
            drum.triggerAttackRelease("D1", "8n"); 
            break;
        case "䷫":
            drum.triggerAttackRelease("D3", "8n"); 
            break;
        case "䷀":
            drum.triggerAttackRelease("D5", "8n"); 
            break;
        default:
            return;
    }
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}