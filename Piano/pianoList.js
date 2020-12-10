
function populatePiano(s1,s2){
    var s1=document.getElementById(s1);
    var s2=document.getElementById(s2);
    s2.innerHTML="";
    if(s1.value=="A"){
        var optionArray =["-A-a-n-l-a-cs-e|A","-Am-a-n-l-a-c-e|Am","-Adim-a-n-l-a-c-ds|Adim","-Aaug-a-n-l-a-cs-f|Aaug","-Amaj7-a-n-l-a-cs-e-gs|Amaj7","-A7-a-n-l-a-cs-e-g|A7","-Am7-a-n-l-a-c-e-g|Am7","-Adim7-a-n-l-a-c-ds-fs|Adim7","-Am(maj7)-a-n-l-a-c-e-gs|Am(maj7)","-Am7b5-a-n-l-a-c-ds-g|Am7b5","-Asus2-a-n-l-a-b-e|Asus2","-Asus2-a-n-l-a-b-e|Asus4","-A6-a-n-l-a-cs-e-fs|A6","-A6_9-a-n-l-a-cs-e-fs-b|A6/9","-A9-a-n-l-a-cs-e-g-b|A9","-A11-a-n-l-a-cs-d-e-g|A11","-A13-a-n-l-a-cs-e-g-fs|A13","-A5-a-n-l-a-e|A5"];
    }
    else if(s1.value=="A#"){
        var optionArray =["-As-a-sharp-l-as-d-f|A#","-Asm-a-sharp-l-as-cs-f|A#m","-Asdim-a-sharp-l-as-cs-e|A#dim","-Asaug-a-sharp-l-as-d-fs|A#aug","-Asmaj7-a-sharp-l-as-d-f-a|A#maj7","-As7-a-sharp-l-as-d-f-gs|A#7","-Asm7-a-sharp-l-as-cs-f-gs|A#m7","-Asdim7-a-sharp-l-as-cs-e-g|A#dim7","-Asm(maj7)-a-sharp-l-as-cs-f-a|A#m(maj7)","-Asm7b5-a-sharp-l-as-cs-e-gs|A#m7b5","-Assus2-a-sharp-l-as-c-f|A#sus2","-Assus4-a-sharp-l-as-ds-f|A#sus4","-As6-a-sharp-l-as-d-f-g|A#6","-As6_9-a-sharp-l-as-d-f-g-c|A#6/9","-As9-a-sharp-l-as-d-f-gs-c|A#9","-As11-a-sharp-l-as-d-ds-f-gs|A#11","-As13-a-sharp-l-as-d-f-gs-g|A#13","-As5-a-sharp-l-as-f|A#5"];
    }
    else if(s1.value=="Ab"){
        var optionArray =["-Ab-a-flat-l-ab-c-eb|Ab","-Abm-a-flat-l-ab-b-eb|Abm","-Abdim-a-flat-l-ab-b-d|Abdim","-Abaug-a-flat-l-ab-c-e|Abaug","-Abmaj7-a-flat-l-ab-c-eb-g|Abmaj7","-Ab7-a-flat-l-ab-c-eb-gb|Ab7","-Abm7-a-flat-l-ab-b-eb-gb|Abm7","-Abdim7-a-flat-l-ab-b-d-f|Abdim7","-Abm(maj7)-a-flat-l-ab-b-eb-g|Abm(maj7)","-Abm7b5-a-flat-l-ab-b-d-gb|Abm7b5","-Absus2-a-flat-l-ab-bb-eb|Absus2","-Absus4-a-flat-l-ab-db-eb|Absus4","-Ab6-a-flat-l-ab-c-eb-f|Ab6","-Ab6_9-a-flat-l-ab-c-eb-f-bb|Ab6/9","-Ab9-a-flat-l-ab-c-eb-gb-bb|Ab9","-Ab11-a-flat-l-gs-ab-c-cs-ds-fs|Ab11","-Ab13-a-flat-l-ab-c-eb-gb-f|Ab13","-Ab5-a-flat-l-ab-eb|Ab5"];
    }
    else if(s1.value=="B"){
        var optionArray =["-B-b-n-l-b-ds-fs|B","-Bm-b-n-l-b-d-fs|Bm","-Bdim-b-n-l-b-d-f|Bdim","-Baug-b-n-l-b-ds-g|Baug","-Bmaj7-b-n-l-b-ds-fs-as|Bmaj7","-B7-b-n-l-b-ds-fs-a|B7","-Bm7-b-n-l-b-d-fs-a|Bm7","-Bdim7-b-n-l-b-d-f-gs|Bdim7","-Bm(maj7)-b-n-l-b-d-fs-as|Bm(maj7)","-Bm7b5-b-n-l-b-d-f-a|Bm7b5","-Bsus2-b-n-l-b-cs-fs|Bsus2","-Bsus4-b-n-l-b-e-fs|Bsus4","-B6-b-n-l-b-ds-fs-gs|B6","-B6_9-b-n-l-b-ds-fs-gs-cs|B6/9","-B9-b-n-l-b-ds-fs-a-cs|B9","-B11-b-n-l-b-ds-e-fs-a|B11","-B13-b-n-l-b-ds-fs-a-gs|B13","-B5-b-n-l-b-fs|B5"];
    }
    else if(s1.value=="Bb"){
        var optionArray =["-Bb-b-flat-l-bb-d-f|Bb","-Bbm-b-flat-l-bb-db-f|Bbm","-Bbdim-b-flat-l-bb-db-e|Bbdim","-Bbaug-b-flat-l-bb-d-gb|Bbaug","-Bbmaj7-b-flat-l-bb-d-f-a|Bbmaj7","-Bb7-b-flat-l-bb-d-f-ab|Bb7","-Bbm7-b-flat-l-bb-db-f-ab|Bbm7","-Bbdim7-b-flat-l-bb-db-e-g|Bbdim7","-Bbm(maj7)-b-flat-l-bb-db-f-a|Bbm(maj7)","-Bbm7b5-b-flat-l-bb-db-e-ab|Bbm7b5","-Bbsus2-b-flat-l-bb-c-f|Bbsus2","-Bbsus4-b-flat-l-bb-eb-f|Bbsus4","-Bb6-b-flat-l-bb-d-f-g|Bb6","-Bb6_9-b-flat-l-bb-d-f-g-c|Bb6/9","-Bb9-b-flat-l-bb-d-f-ab-c|Bb9","-Bb11-b-flat-l-as-bb-d-ds-f-gs|Bb11","-Bb13-b-flat-l-bb-d-f-ab-g|Bb13","-Bb5-b-flat-l-bb-f|Bb5"];
    }
    else if(s1.value=="C"){
        var optionArray =["-C-c-n-l-c-e-g|C","-Cm-c-n-l-c-ds-g|Cm","-Cdim-c-n-l-c-ds-fs|Cdim","-Caug-c-n-l-c-e-gs|Caug","-Cmaj7-c-n-l-c-e-g-b|Cmaj7","-C7-c-n-l-c-e-g-as|C7","-Cm7-c-n-l-c-ds-g-as|Cm7","-Cdim7-c-n-l-c-ds-fs-a|Cdim7","-Cm(maj7)-c-n-l-c-ds-g-b|Cm(maj7)","-Cm7b5-c-n-l-c-ds-fs-as|Cm7b5","-Csus2-c-n-l-c-d-g|Csus2","-Csus4-c-n-l-c-f-g|Csus4","-C6-c-n-l-c-e-g-a|C6","-C6_9-c-n-l-c-e-g-a-d|C6/9","-C9-c-n-l-c-e-g-as-d|C9","-C11-c-n-l-c-e-f-g-as|C11","-C13-c-n-l-c-e-g-as-a|C13","-C5-c-n-l-c-g|C5"];
    }
    else if(s1.value=="C#"){
        var optionArray =["-Cs-c-sharp-l-cs-f-gs|C#","-Csm-c-sharp-l-cs-e-gs|C#m","-Csdim-c-sharp-l-cs-e-g|C#dim","-Csaug-c-sharp-l-cs-f-a|C#aug","-Csmaj7-c-sharp-l-cs-f-gs-c|C#maj7","-Cs7-c-sharp-l-cs-f-gs-b|C#7","-Csm7-c-sharp-l-cs-e-gs-b|C#m7","-Csdim7-c-sharp-l-cs-e-g-as|C#dim7","-Csm(maj7)-c-sharp-l-cs-e-gs-c|C#m(maj7)","-Csm7b5-c-sharp-l-cs-e-g-b|C#m7b5","-Cssus2-c-sharp-l-cs-ds-gs|C#sus2","-Cssus4-c-sharp-l-cs-fs-gs|C#sus4","-Cs6-c-sharp-l-cs-f-gs-as|C#6","-Cs6_9-c-sharp-l-cs-f-gs-as-ds|C#6/9","-Cs9-c-sharp-l-cs-f-gs-b-ds|C#9","-Cs11-c-sharp-l-cs-f-fs-gs-b|C#11","-Cs13-c-sharp-l-cs-f-gs-b-as|C#13","-Cs5-c-sharp-l-cs-gs|C#5"];
    }
    else if(s1.value=="D"){
        var optionArray =["-D-d-n-l-d-fs-a|D","-Dm-d-n-l-d-f-a|Dm","-Ddim-d-n-l-d-f-gs|Ddim","-Daug-d-n-l-d-fs-as|Daug","-Dmaj7-d-n-l-d-fs-a-cs|Dmaj7","-D7-d-n-l-d-fs-a-c|D7","-Dm7-d-n-l-d-f-a-c|Dm7","-Ddim7-d-n-l-d-f-gs-b|Ddim7","-Dm(maj7)-d-n-l-d-f-a-cs|Dm(maj7)","-Dm7b5-d-n-l-d-f-gs-c|Dm7b5","Dsus2-d-n-l-d-e-a|Dsus2","-Dsus4-d-n-l-d-g-a|Dsus4","-D6-d-n-l-d-fs-a-b|D6","-D6_9-d-n-l-d-fs-a-b-e|D6/9","-D9-d-n-l-d-fs-a-c-e|D9","-D11-d-n-l-d-fs-g-a-c|D11","-D13-d-n-l-d-fs-a-c-b|D13","-D5-d-n-l-d-a|D5"];
    }
    else if(s1.value=="Db"){
        var optionArray =["-Db-d-flat-l-db-f-ab|Db","-Dbm-d-flat-l-db-e-ab|Dbm","-Dbdim-d-flat-l-db-e-g|Dbdim","-Dbaug-d-flat-l-db-f-a|Dbaug","-Dbmaj7-d-flat-l-db-f-ab-c|Dbmaj7","-Db7-d-flat-l-db-f-ab-b|Db7","-Dbm7-d-flat-l-db-e-ab-b|Dbm7","-Dbdim7-d-flat-l-db-e-g-bb|Dbdim7","-Dbm(maj7)-d-flat-l-db-e-ab-c|Dbm(maj7)","-Dbm7b5-d-flat-l-db-e-g-b|Dbm7b5","-Dbsus2-d-flat-l-db-eb-ab|Dbsus2","-Dbsus4-d-flat-l-db-gb-ab|Dbsus4","-Db6-d-flat-l-db-f-ab-bb|Db6","-Db6_9-d-flat-l-db-f-ab-bb-eb|Db6/9","-Db9-d-flat-l-db-f-ab-b-eb|Db9","-Db11-d-flat-l-cs-db-f-fs-gs-b|Db11","-Db13-d-flat-l-db-f-ab-b-bb|Db13","-Db5-d-flat-l-db-ab|Db5"];
    }
    else if(s1.value=="D#"){
        var optionArray =["-Ds-d-sharp-l-ds-g-as|D#","-Dsm-d-sharp-l-ds-fs-as|D#m","-Dsdim-d-sharp-l-ds-fs-a|D#dim","-Dsaug-d-sharp-l-ds-g-b|D#aug","-Dsmaj7-d-sharp-l-ds-g-as-d|D#maj7","-Ds7-d-sharp-l-ds-g-as-cs|D#7","-Dsm7-d-sharp-l-ds-fs-as-cs|D#m7","-Dsdim7-d-sharp-l-ds-fs-a-c|D#dim7","-Dsm(maj7)-d-sharp-l-ds-fs-as-d|D#m(maj7)","-Dsm7b5-d-sharp-l-ds-fs-a-cs|D#m7b5","-Dssus2-d-sharp-l-ds-f-as|D#sus2","-Dssus4-d-sharp-l-ds-gs-as|D#sus4","-Ds6-d-sharp-l-ds-g-as-c|D#6","-Ds6_9-d-sharp-l-ds-g-as-c-f|D#6/9","-Ds9-d-sharp-l-ds-g-as-cs-f|D#9","-Ds11-d-sharp-l-ds-g-gs-as-cs|D#11","-Ds13-d-sharp-l-ds-g-as-cs-c|D#13","-Ds5-d-sharp-l-ds-as|D#5"];
    }
    else if(s1.value=="E"){
        var optionArray =["-E-e-n-l-e-gs-b|E","-Em-e-n-l-e-g-b|Em","-Edim-e-n-l-e-g-as|Edim","-Eaug-e-n-l-e-gs-c|Eaug","-Emaj7-e-n-l-e-gs-b-ds|Emaj7","-E7-e-n-l-e-gs-b-d|E7","-Em7-e-n-l-e-g-b-d|Em7","-Edim7-e-n-l-e-g-as-cs|Edim7","-Em(maj7)-e-n-l-e-g-b-ds|Em(maj7)","-Em7b5-e-n-l-e-g-as-d|Em7b5","-Esus2-e-n-l-e-fs-b|Esus2","-Esus4-e-n-l-e-a-b|Esus4","-E6-e-n-l-e-gs-b-cs|E6","-E6_9-e-n-l-e-gs-b-cs-fs|E6/9","-E9-e-n-l-e-gs-b-d-fs|E9","-E11-e-n-l-e-gs-a-b-d|E11","-E13-e-n-l-e-gs-b-d-cs|E13","-E5-e-n-l-e-b|E5"];
    }
    else if(s1.value=="Eb"){
        var optionArray =["-Eb-e-flat-l-eb-g-bb|Eb","-Ebm-e-flat-l-eb-gb-bb|Ebm","-Ebdim-e-flat-l-eb-gb-a|Ebdim","-Ebaug-e-flat-l-eb-g-b|Ebaug","-Ebmaj7-e-flat-l-eb-g-bb-d|Ebmaj7","-Eb7-e-flat-l-eb-g-bb-db|Eb7","-Ebm7-e-flat-l-eb-gb-bb-db|Ebm7","-Ebdim7-e-flat-l-eb-gb-a-c|Ebdim7","-Ebm(maj7)-e-flat-l-eb-gb-bb-d|Ebm(maj7)","-Ebm7b5-e-flat-l-eb-gb-a-db|Ebm7b5","-Ebsus2-e-flat-l-eb-f-bb|Ebsus2","-Ebsus4-e-flat-l-eb-ab-bb|Ebsus4","-Eb6-e-flat-l-eb-g-bb-c|Eb6","-Eb6_9-e-flat-l-eb-g-bb-c-f|Eb6/9","-Eb9-e-flat-l-eb-g-bb-db-f|Eb9","-Eb11-e-flat-l-ds-eb-g-gs-as-cs|Eb11","-Eb13-e-flat-l-eb-g-bb-db-c|Eb13","-Eb5-e-flat-l-eb-bb|Eb5"];
    }
    else if(s1.value=="F"){
        var optionArray =["-F-f-n-l-f-a-c|F","-Fm-f-n-l-f-gs-c|Fm","-Fdim-f-n-l-f-gs-b|Fdim","-Faug-f-n-l-f-a-cs|Faug","-Fmaj7-f-n-l-f-a-c-e|Fmaj7","-F7-f-n-l-f-a-c-ds|F7","-Fm7-f-n-l-f-gs-c-ds|Fm7","-Fdim7-f-n-l-f-gs-b-d|Fdim7","-Fm(maj7)-f-n-l-f-gs-c-e|Fm(maj7)","-Fm7b5-f-n-l-f-gs-b-ds|Fm7b5","-Fsus2-f-n-l-f-g-c|Fsus2","-Fsus4-f-n-l-f-as-c|Fsus4","-F6-f-n-l-f-a-c-d|F6","-F6_9-f-n-l-f-a-c-d-g|F6/9","-F9-f-n-l-f-a-c-ds-g|F9","-F11-f-n-l-f-a-as-c-ds|F11","-F13-f-n-l-f-a-c-ds-d|F13","-F5-f-n-l-f-c|F5"];
    }
    else if(s1.value=="F#"){
        var optionArray =["-F5-f-n-l-f-c|F#","-Fsm-f-sharp-l-fs-a-cs|F#m","-Fsdim-f-sharp-l-fs-a-c|F#dim","-Fsaug-f-sharp-l-fs-as-d|F#aug","-Fsmaj7-f-sharp-l-fs-as-cs-f|F#maj7","-Fs7-f-sharp-l-fs-as-cs-e|F#7","-Fsm7-f-sharp-l-fs-a-cs-e|F#m7","-Fsdim7-f-sharp-l-fs-a-c-ds|F#dim7","-Fsm(maj7)-f-sharp-l-fs-a-cs-f|F#m(maj7)","-Fsm7b5-f-sharp-l-fs-a-c-e|F#m7b5","-Fssus2-f-sharp-l-fs-gs-cs|F#sus2","-Fssus4-f-sharp-l-fs-b-cs|F#sus4","-Fs6-f-sharp-l-fs-as-cs-ds|F#6","-Fs6_9-f-sharp-l-fs-as-cs-ds-gs|F#6/9","-Fs9-f-sharp-l-fs-as-cs-e-gs|F#9","-Fs11-f-sharp-l-fs-as-b-cs-e|F#11","-Fs13-f-sharp-l-fs-as-cs-e-ds|F#13","-Fs5-f-sharp-l-fs-cs|F#5"];
    }
    else if(s1.value=="G"){
        var optionArray =["-G-g-n-l-g-b-d|G","-Gm-g-n-l-g-as-d|Gm","-Gdim-g-n-l-g-as-cs|Gdim","-Gaug-g-n-l-g-b-ds|Gaug","-Gmaj7-g-n-l-g-b-d-fs|Gmaj7","-G7-g-n-l-g-b-d-f|G7","-Gm7-g-n-l-g-as-d-f|Gm7","-Gdim7-g-n-l-g-as-cs-e|Gdim7","-Gm(maj7)-g-n-l-g-as-d-fs|Gm(maj7)","-Gm7b5-g-n-l-g-as-cs-f|Gm7b5","-Gsus2-g-n-l-g-a-d|Gsus2","-Gsus4-g-n-l-g-c-d|Gsus4","-G6-g-n-l-g-b-d-e|G6","-G6_9-g-n-l-g-b-d-e-a|G6/9","-G9-g-n-l-g-b-d-f-a|G9","G-G11-g-n-l-g-b-c-d-f|G11","-G13-g-n-l-g-b-d-f-e|G13","-G5-g-n-l-g-d|G5"];
    }
    else if(s1.value=="G#"){
        var optionArray =["-Gs-g-sharp-l-gs-c-ds|G#","-Gsm-g-sharp-l-gs-b-ds|G#m","-Gsdim-g-sharp-l-gs-b-d|G#dim","-Gsaug-g-sharp-l-gs-c-e|G#aug","-Gsmaj7-g-sharp-l-gs-c-ds-g|G#maj7","-Gs7-g-sharp-l-gs-c-ds-fs|G#7","-Gsm7-g-sharp-l-gs-b-ds-fs|G#m7","-Gsdim7-g-sharp-l-gs-b-d-f|G#dim7","-Gsm(maj7)-g-sharp-l-gs-b-ds-g|G#m(maj7)","-Gsm7b5-g-sharp-l-gs-b-d-fs|G#m7b5","-Gssus2-g-sharp-l-gs-as-ds|G#sus2","-Gssus4-g-sharp-l-gs-cs-ds|G#sus4","-Gs6-g-sharp-l-gs-c-ds-f|G#6","-Gs6_9-g-sharp-l-gs-c-ds-f-as|G#6/9","-Gs9-g-sharp-l-gs-c-ds-fs-as|G#9","-Gs11-g-sharp-l-gs-c-cs-ds-fs|G#11","-Gs13-g-sharp-l-gs-c-ds-fs-f|G#13","-Gs5-g-sharp-l-gs-ds|G#5"];
    }
    else if(s1.value=="Gb"){
        var optionArray =["-Gb-g-flat-l-gb-bb-db|Gb","-Gbm-g-flat-l-gb-a-db|Gbm","-Gbdim-g-flat-l-gb-a-c|Gbdim","-Gbaug-g-flat-l-gb-bb-d|Gbaug","-Gbmaj7-g-flat-l-gb-bb-db-f|Gbmaj7","-Gb7-g-flat-l-gb-bb-db-e|Gb7","-Gbm7-g-flat-l-gb-a-db-e|Gbm7","-Gbdim7-g-flat-l-gb-a-c-eb|Gbdim7","-Gbm(maj7)-g-flat-l-gb-a-db-f|Gbm(maj7)","-Gbm7b5-g-flat-l-gb-a-c-e|Gbm7b5","-Gbsus2-g-flat-l-gb-ab-db|Gbsus2","-Gbsus4-g-flat-l-gb-b-db|Gbsus4","-Gb6-g-flat-l-gb-bb-db-eb|Gb6","-Gb6_9-g-flat-l-gb-bb-db-eb-ab|Gb6/9","-Gb9-g-flat-l-gb-bb-db-e-ab|Gb9","-Gb11-g-flat-l-fs-gb-as-b-cs-e|Gb11","-Gb13-g-flat-l-gb-bb-db-e-eb|Gb13","-Gb5-g-flat-l-gb-db|Gb5"];
    }
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}
var count=1;
function getPianoChord(){
        if(count==1)
        {
            document.getElementById("firstPiano").style.display = "none";
            document.getElementsByClassName("imageSpot")[0].style.display = "block";
            count=0;
        }
        //get chord from select box
        var selectTwo = document.getElementById('pianoChordScale');
        var extension = selectTwo.options[selectTwo.selectedIndex].value;
        var name = selectTwo.options[selectTwo.selectedIndex].text;

        //generates image tag
        var imgTag= document.getElementById('scapiobjid1');
        imgTag.innerHTML="<img alt="+name+"\" piano chord\" title="+name+"\" piano chord\" height=\"300px;\" src=\"https://www.scales-chords.com/chord-charts/piano"+extension+".jpg\">";

        //changes insert tag chord attribute
        document.getElementsByTagName("ins")[0].setAttribute("chord",name);
        //var inser = document.getElementsByTagName("ins")[0].getAttribute("chord");

}