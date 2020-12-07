
function populateGuitar(s1,s2){
    var s1=document.getElementById(s1);
    var s2=document.getElementById(s2);
    s2.innerHTML="";
    if(s1.value=="A"){
        var optionArray =["-A-a-n-l-v-x-0-2-2-2-0|A","-Am-a-n-l-v-x-0-2-2-1-0|Am","-Adim-a-n-l-v-x-0-1-2-1-x|Adim","-Aaug-a-n-l-v-x-0-3-2-2-1|Aaug","-Amaj7-a-n-l-v-x-0-2-1-2-0|Amaj7","-A7-a-n-l-v-x-0-2-0-2-0|A7","-Am7-a-n-l-v-x-0-2-0-1-0|Am7","-Adim7-a-n-l-v-x-0-1-2-1-2|Adim7","-Am(maj7)-a-n-l-v-x-0-2-2-1-4|Am(maj7)","-Am7b5-a-n-l-v-x-0-1-2-1-3|Am7b5","-Asus2-a-n-l-v-x-0-2-2-0-0|Asus2","-Asus4-a-n-l-v-x-0-0-2-3-0|Asus4","-A6-a-n-l-v-x-0-2-2-2-2|A6","-A6_9-a-n-l-v-x-0-4-4-2-0|A6/9","-A9-a-n-l-v-x-0-2-4-2-3|A9","-A11-a-n-l-v-x-0-0-0-2-0|A11","-A13-a-n-l-v-x-0-2-0-2-2|A13","-A5-a-n-l-v-x-0-2-2-x-x|A5"];
    }
    else if(s1.value=="A#"){
        var optionArray =["-As-a-sharp-l-v-6-8-8-7-6-6|A#","-Asm-a-sharp-l-v-6-8-8-6-6-6|A#m","-Asdim-a-sharp-l-v-x-1-2-3-2-0|A#dim","-Asaug-a-sharp-l-v-x-1-0-3-3-1|A#aug","-Asmaj7-a-sharp-l-v-6-x-7-7-6-x|A#maj7","-As7-a-sharp-l-v-x-1-3-1-3-1|A#7","-Asm7-a-sharp-l-v-x-1-3-1-2-1|A#m7","-Asdim7-a-sharp-l-v-x-1-2-0-2-x|A#dim7","-Asm(maj7)-a-sharp-l-v-x-1-3-2-2-1|A#m(maj7)","-Asm7b5-a-sharp-l-v-x-1-x-1-2-0|A#m7b5","-Assus2-a-sharp-l-v-x-1-3-3-1-1|A#sus2","-Assus4-a-sharp-l-v-x-1-1-3-4-1|A#sus4","-As6-a-sharp-l-v-x-1-3-3-3-3|A#6","-As6_9-a-sharp-l-v-x-1-0-0-1-1|A#6/9","-As9-a-sharp-l-v-x-1-0-1-1-1|A#9","-As11-a-sharp-l-v-x-1-1-1-3-1|A#11","-As13-a-sharp-l-v-x-1-x-1-3-3|A#13","-As5-a-sharp-l-v-x-1-3-3-x-x|A#5"];
    }
    else if(s1.value=="Ab"){
        var optionArray =["-Ab-a-flat-l-v-4-6-6-5-4-4|Ab","-Abm-a-flat-l-v-x-11-13-13-12-11|Abm","-Abdim-a-flat-l-v-4-2-0-1-0-x|Abdim","-Abaug-a-flat-l-v-4-3-2-1-1-x|Abaug","-Abmaj7-a-flat-l-v-4-6-5-5-4-4|Abmaj7","-Ab7-a-flat-l-v-4-6-4-5-4-4|Ab7","-Abm7-a-flat-l-v-4-x-4-4-4-x|Abm7","-Abdim7-a-flat-l-v-4-x-3-4-3-x|Abdim7","-Abm(maj7)-a-flat-l-v-4-6-5-4-4-4|Abm(maj7)","-Abm7b5-a-flat-l-v-x-x-6-7-7-7|Abm7b5","-Absus2-a-flat-l-v-x-x-6-8-6-7|Absus2","-Absus4-a-flat-l-v-4-6-6-6-4-4|Absus4","-Ab6-a-flat-l-v-x-x-6-8-6-8|Ab6","-Ab6_9-a-flat-l-v-x-x-6-5-6-6|Ab6/9","-Ab9-a-flat-l-v-4-x-4-3-1-x|Ab9","-Ab11-a-flat-l-v-4-4-4-5-4-4|Ab11","-Ab13-a-flat-l-v-4-x-4-5-6-x|Ab13","-Ab5-a-flat-l-v-4-6-6-x-x-x|Ab5"];
    }
    else if(s1.value=="B"){
        var optionArray =["-B-b-n-l-v-x-2-4-4-4-2|B","-Bm-b-n-l-v-7-9-9-7-7-7|Bm","-Bdim-b-n-l-v-x-x-9-10-12-10|Bdim","-Baug-b-n-l-v-x-2-1-0-0-3|Baug","-Bmaj7-b-n-l-v-x-x-9-8-7-6|Bmaj7","-B7-b-n-l-v-x-2-1-2-0-2|B7","-Bm7-b-n-l-v-x-2-0-2-0-2|Bm7","-Bdim7-b-n-l-v-x-2-3-1-3-x|Bdim7","-Bm(maj7)-b-n-l-v-7-9-8-7-7-7|Bm(maj7)","-Bm7b5-b-n-l-v-x-2-x-2-3-1|Bm7b5","-Bsus2-b-n-l-v-x-2-4-4-2-2|Bsus2","-Bsus4-b-n-l-v-x-2-2-4-5-2|Bsus4","-B6-b-n-l-b-ds-fs-gs|B6","-B6_9-b-n-l-v-x-2-1-1-2-2|B6/9","-B9-b-n-l-v-x-2-1-2-2-x|B9","-B11-b-n-l-v-x-2-2-2-4-2|B11","-B13-b-n-l-v-x-2-x-2-4-4|B13","-B5-b-n-l-v-7-9-9-x-x-x|B5"];
    }
    else if(s1.value=="Bb"){
        var optionArray =["-Bb-b-flat-l-v-6-8-8-7-6-6|Bb","-Bbm-b-flat-l-v-6-8-8-6-6-6|Bbm","-Bbdim-b-flat-l-v-x-1-2-3-2-0|Bbdim","-Bbaug-b-flat-l-v-x-1-0-3-3-1|Bbaug","-Bbmaj7-b-flat-l-v-6-x-7-7-6-x|Bbmaj7","-Bb7-b-flat-l-v-x-1-3-1-3-1|Bb7","-Bbm7-b-flat-l-v-x-1-3-1-2-1|Bbm7","-Bbdim7-b-flat-l-v-x-1-2-0-2-x|Bbdim7","-Bbm(maj7)-b-flat-l-v-x-1-3-2-2-1|Bbm(maj7)","-Bbm7b5-b-flat-l-v-x-1-x-1-2-0|Bbm7b5","-Bbsus2-b-flat-l-v-x-1-3-3-1-1|Bbsus2","-Bbsus4-b-flat-l-v-x-1-1-3-4-1|Bbsus4","-Bb6-b-flat-l-v-x-1-3-3-3-3|Bb6","-Bb6_9-b-flat-l-v-x-1-0-0-1-1|Bb6/9","-Bb9-b-flat-l-v-x-1-0-1-1-1|Bb9","-Bb11-b-flat-l-v-x-1-1-1-3-1|Bb11","-Bb13-b-flat-l-v-x-1-x-1-3-3|Bb13","-Bb5-b-flat-l-v-x-1-3-3-x-x|Bb5"];
    }
    else if(s1.value=="C"){
        var optionArray =["-C-c-n-l-v-x-3-2-0-1-0|C","-Cm-c-n-l-v-x-3-5-5-4-3|Cm","-Cdim-c-n-l-v-x-3-1-x-1-1|Cdim","-Caug-c-n-l-v-x-3-2-1-1-0|Caug","-Cmaj7-c-n-l-v-x-3-2-0-0-0|Cmaj7","-C7-c-n-l-v-x-3-2-3-1-0|C7","-Cm7-c-n-l-v-x-3-5-3-4-3|Cm7","-Cdim7-c-n-l-v-x-3-x-2-4-2|Cdim7","-Cm(maj7)-c-n-l-v-x-3-5-4-4-3|Cm(maj7)","-Cm7b5-c-n-l-v-x-3-4-3-4-x|Cm7b5","-Csus2-c-n-l-v-x-3-0-0-3-3|Csus2","-Csus4-c-n-l-v-8-10-10-10-8-8|Csus4","-C6-c-n-l-v-x-3-5-5-5-5|C6","-C6_9-c-n-l-v-x-3-2-2-3-3|C6/9","-C9-c-n-l-v-x-3-2-3-3-3|C9","-C11-c-n-l-v-x-3-3-3-5-3|C11","-C13-c-n-l-v-8-x-8-9-10-x|C13","-C5-c-n-l-v-x-3-5-5-x-x|C5"];
    }
    else if(s1.value=="C#"){
        var optionArray =["-Cs-c-sharp-l-v-x-4-6-6-6-4|C#","-Csm-c-sharp-l-v-x-4-6-6-5-4|C#m","-Csdim-c-sharp-l-v-x-4-2-0-2-0|C#dim","-Csaug-c-sharp-l-v-x-4-3-2-2-x|C#aug","-Csmaj7-c-sharp-l-v-x-4-3-1-1-1|C#maj7","-Cs7-c-sharp-l-v-x-4-6-4-6-4|C#7","-Csm7-c-sharp-l-v-x-4-2-1-0-0|C#m7","-Csdim7-c-sharp-l-v-9-x-8-9-8-x|C#dim7","-Csm(maj7)-c-sharp-l-v-9-11-10-9-9-9|C#m(maj7)","-Csm7b5-c-sharp-l-v-x-4-2-0-0-0|C#m7b5","-Cssus2-c-sharp-l-v-x-4-6-6-4-4|C#sus2","-Cssus4-c-sharp-l-v-x-4-4-6-7-4|C#sus4","-Cs6-c-sharp-l-v-x-4-6-6-6-6|C#6","-Cs6_9-c-sharp-l-v-x-x-11-10-11-11|C#6/9","-Cs9-c-sharp-l-v-9-8-9-8-x-x|C#9","-Cs11-c-sharp-l-v-x-4-4-4-6-4|C#11","-Cs13-c-sharp-l-v-9-x-9-10-11-x|C#13","-Cs5-c-sharp-l-v-x-4-6-6-x-x|C#5"];
    }
    else if(s1.value=="D"){
        var optionArray =["-D-d-n-l-v-x-x-0-2-3-2|D","-Dm-d-n-l-v-x-x-0-2-3-1|Dm","-Ddim-d-n-l-v-x-x-0-1-3-1|Ddim","-Daug-d-n-l-v-x-x-0-3-3-2|Daug","-Dmaj7-d-n-l-v-x-5-4-2-2-2|Dmaj7","-D7-d-n-l-v-x-x-0-2-1-2|D7","-Dm7-d-n-l-v-x-x-0-2-1-1|Dm7","-Ddim7-d-n-l-v-x-x-0-1-0-1|Ddim7","-Dm(maj7)-d-n-l-v-x-x-0-2-2-1|Dm(maj7)","-Dm7b5-d-n-l-v-x-x-0-1-1-1|Dm7b5","-Dsus2-d-n-l-v-x-x-0-2-3-0|Dsus2","-Dsus4-d-n-l-v-x-x-0-2-3-3|Dsus4","-D6-d-n-l-v-x-x-0-2-0-2|D6","-D6_9-d-n-l-v-x-5-4-2-0-0|D6/9","-D9-d-n-l-v-x-5-4-5-5-5|D9","-D11-d-n-l-v-x-5-5-5-7-5|D11","-D13-d-n-l-v-x-5-x-5-7-7|D13","-D5-d-n-l-v-x-5-7-7-x-x|D5"];
    }
    else if(s1.value=="Db"){
        var optionArray =["-Db-d-flat-l-v-x-4-6-6-6-4|Db","-Dbm-d-flat-l-v-x-4-2-1-3-x|Dbm","-d-flat-l-v-x-4-2-0-2-0|Dbdim","-Dbaug-d-flat-l-v-x-4-3-2-2-x|Dbaug","-Dbmaj7-d-flat-l-v-x-4-3-1-1-1|Dbmaj7","-Db7-d-flat-l-v-x-4-6-4-6-4|Db7","-Dbm7-d-flat-l-v-x-4-2-1-0-0|Dbm7","-Dbdim7-d-flat-l-v-9-x-8-9-8-x|Dbdim7","-Dbm(maj7)-d-flat-l-v-9-11-10-9-9-9|Dbm(maj7)","-Dbm7b5-d-flat-l-v-x-4-2-0-0-0|Dbm7b5","-Dbsus2-d-flat-l-v-x-4-6-6-4-4|Dbsus2","-Dbsus4-d-flat-l-v-x-4-4-6-7-4|Dbsus4","-Db6-d-flat-l-v-x-4-6-6-6-6|Db6","-Db6_9-d-flat-l-v-x-x-11-10-11-11|Db6/9","-Db9-d-flat-l-v-9-8-9-8-x-x|Db9","-Db11-d-flat-l-v-x-4-4-4-6-4|Db11","-Db13-d-flat-l-v-9-x-9-10-11-x|Db13","-Db5-d-flat-l-v-x-4-6-6-x-x|Db5"];
    }
    else if(s1.value=="D#"){
        var optionArray =["-Ds-d-sharp-l-v-x-x-1-3-4-3|D#","-Dsm-d-sharp-l-v-11-13-13-11-11-11|D#m","-Dsdim-d-sharp-l-v-x-x-1-2-4-2|D#dim","-Dsaug-d-sharp-l-v-x-x-1-0-0-3|D#aug","-Dsmaj7-d-sharp-l-v-x-x-1-3-3-3|D#maj7","-Ds7-d-sharp-l-v-x-x-1-3-2-3|D#7","-Dsm7-d-sharp-l-v-x-x-1-3-2-2|D#m7","-Dsdim7-d-sharp-l-v-x-x-1-2-1-2|D#dim7","-Dsm(maj7)-d-sharp-l-v-x-x-1-3-3-2|D#m(maj7)","-Dsm7b5-d-sharp-l-v-x-x-1-2-2-2|D#m7b5","-Dssus2-d-sharp-l-v-x-x-1-3-4-1|D#sus2","-Dssus4-d-sharp-l-v-x-x-1-3-4-4|D#sus4","-Ds6-d-sharp-l-v-x-x-1-3-1-3|D#6","-Ds6_9-d-sharp-l-v-11-8-8-8-8-8|D#6/9","-Ds9-d-sharp-l-v-x-x-1-0-2-1|D#9","-Ds11-d-sharp-l-v-x-6-6-6-8-6|D#11","-Ds13-d-sharp-l-v-11-x-11-12-13|D#13","-Ds5-d-sharp-l-v-x-6-8-8-x-x|D#5"];
    }
    else if(s1.value=="E"){
        var optionArray =["-E-e-n-l-v-0-2-2-1-0-0|E","-Em-e-n-l-v-0-2-2-0-0-0|Em","-Edim-e-n-l-v-x-x-2-3-5-3|Edim","-Eaug-e-n-l-v-0-3-2-1-3-0|Eaug","-Emaj7-e-n-l-v-0-2-1-1-0-0|Emaj7","-E7-e-n-l-v-0-2-0-1-0-0|E7","-Em7-e-n-l-v-0-2-2-0-3-0|Em7","-Edim7-e-n-l-v-x-x-2-3-2-3|Edim7","-Em(maj7)-e-n-l-v-0-2-1-0-0-0|Em(maj7)","-Em7b5-e-n-l-v-x-x-2-3-3-3|Em7b5","-Esus2-e-n-l-v-0-2-4-4-0-0|Esus2","-Esus4-e-n-l-v-0-2-2-2-0-0|Esus4","-E6-e-n-l-v-0-2-2-1-2-0|E6","-E6_9-e-n-l-v-0-2-x-1-2-2|E6/9","-E9-e-n-l-v-0-2-0-1-0-2|E9","-E11-e-n-l-v-0-0-0-1-0-0|E11","-E13-e-n-l-v-0-x-0-1-2-|E13","-E5-e-n-l-v-0-2-2-x-x-x|E5"];
    }
    else if(s1.value=="Eb"){
        var optionArray =["-Eb-e-flat-l-v-x-x-1-3-4-3|Eb","-Ebm-e-flat-l-v-11-13-13-11-11-11|Ebm","-Ebdim-e-flat-l-v-x-x-1-2-4-2|Ebdim","-Ebaug-e-flat-l-v-x-x-1-0-0-3|Ebaug","-Ebmaj7-e-flat-l-v-x-x-1-3-3-3|Ebmaj7","-Eb7-e-flat-l-v-x-x-1-3-2-3|Eb7","-Ebm7-e-flat-l-v-x-x-1-3-2-2|Ebm7","-Ebdim7-e-flat-l-v-x-x-1-2-1-2|Ebdim7","-Ebm(maj7)-e-flat-l-v-x-x-1-3-3-2|Ebm(maj7)","-Ebm7b5-e-flat-l-v-x-x-1-2-2-2|Ebm7b5","-Ebsus2-e-flat-l-v-x-x-1-3-4-1|Ebsus2","-Ebsus4-e-flat-l-v-x-x-1-3-4-4|Ebsus4","-Eb6-e-flat-l-v-x-x-1-3-1-3|Eb6","-Eb6_9-e-flat-l-v-11-8-8-8-8-8|Eb6/9","-Eb9-e-flat-l-v-x-x-1-0-2-1|Eb9","-Eb11-e-flat-l-v-x-6-6-6-8-6|Eb11","-Eb13-e-flat-l-v-11-x-11-12-13-x|Eb13","-Eb5-e-flat-l-v-x-6-8-8-x-x|Eb5"];
    }
    else if(s1.value=="F"){
        var optionArray =["-F-f-n-l-v-1-3-3-2-1-1|F","-Fm-f-n-l-v-1-3-3-1-1-1|Fm","-Fdim-f-n-l-v-x-x-3-1-0-1|Fdim","-Faug-f-n-l-v-x-x-3-2-2-1|Faug","-Fmaj7-f-n-l-v-1-x-2-2-1-x|Fmaj7","-F7-f-n-l-v-1-x-1-2-1-x|F7","-Fm7-f-n-l-v-1-3-3-1-4-1|Fm7","-Fdim7-f-n-l-v-x-x-3-4-3-4|Fdim7","-Fm(maj7)-f-n-l-v-1-3-2-1-1-1|Fm(maj7)","-Fm7b5-f-n-l-v-x-x-3-4-4-4|Fm7b5","-Fsus2-f-n-l-v-x-8-10-10-8-8|Fsus2","-Fsus4-f-n-l-v-1-3-3-3-1-1|Fsus4","-F6-f-n-l-v-1-3-x-2-3-x|F6","-F6_9-f-n-l-v-13-10-10-10-10-10|F6/9","-F9-f-n-l-v-1-3-1-2-1-3|F9","-F11-f-n-l-v-1-1-1-2-1-1|F11","-F13-f-n-l-v-1-3-1-2-3-1|F13","-F5-f-n-l-v-1-3-3-x-x-x|F5"];
    }
    else if(s1.value=="F#"){
        var optionArray =["-Fs-f-sharp-l-v-2-4-4-3-2-2|F#","-Fsm-f-sharp-l-v-2-4-4-2-2-2|F#m","-Fsdim-f-sharp-l-v-x-x-4-2-1-2|F#dim","-Fsaug-f-sharp-l-v-x-x-4-3-3-2|F#aug","-Fsmaj7-f-sharp-l-v-x-x-4-3-2-1|F#maj7","-Fs7-f-sharp-l-v-x-x-4-3-2-0|F#7","-Fsm7-f-sharp-l-v-2-x-2-2-2-x|F#m7","-Fsdim7-f-sharp-l-v-2-x-1-2-1-x|F#dim7","-Fsm(maj7)-f-sharp-l-v-2-4-3-2-2-2|F#m(maj7)","-Fsm7b5-f-sharp-l-v-x-x-4-5-5-5|F#m7b5","-Fssus2-f-sharp-l-v-x-9-11-11-9-9|F#sus2","-Fssus4-f-sharp-l-v-2-4-4-4-2-2|F#sus4","-Fs6-f-sharp-l-v-x-9-11-11-11-11|F#6","-Fs6_9-f-sharp-l-v-x-x-4-3-4-4|F#6/9","-Fs9-f-sharp-l-v-x-x-4-3-5-4|F#9","-Fs11-f-sharp-l-v-2-2-2-3-2-2|F#11","-Fs13-f-sharp-l-v-2-x-2-3-4-4|F#13","-Fs5-f-sharp-l-v-2-4-4-x-x-x|F#5"];
    }
    else if(s1.value=="G"){
        var optionArray =["-G-g-n-l-v-3-2-0-0-0-3|G","-Gm-g-n-l-v-x-10-12-12-11-10|Gm","-Gdim-g-n-l-v-x-x-x-0-2-3|Gdim","-Gaug-g-n-l-v-3-2-1-0-0-3|Gaug","-Gmaj7-g-n-l-v-3-2-0-0-0-2|Gmaj7","-G7-g-n-l-v-3-2-0-0-0-1|G7","-Gm7-g-n-l-v-3-x-3-3-3-x|Gm7","-Gdim7-g-n-l-v-3-x-2-3-2-x|Gdim7","-Gm(maj7)-g-n-l-v-3-5-4-3-3-3|Gm(maj7)","-Gm7b5-g-n-l-v-x-x-5-6-6-6|Gm7b5","-Gsus2-g-n-l-v-x-10-12-12-10-10|Gsus2","-Gsus4-g-n-l-v-3-5-5-5-3-3|Gsus4","-G6-g-n-l-v-3-5-5-3-3-3|G6","-G6_9-g-n-l-v-3-2-2-2-3-3|G6/9","-G9-g-n-l-v-3-x-0-2-0-1|G9","-G11-g-n-l-v-3-3-0-0-0-1|G11","-G13-g-n-l-v-3-x-3-0-0-0|G13","-G5-g-n-l-v-3-5-5-x-x-x|G5"];
    }
    else if(s1.value=="G#"){
        var optionArray =["-Gs-g-sharp-l-v-4-6-6-5-4-4|G#","-Gsm-g-sharp-l-v-x-11-13-13-12-11|G#m","-Gsdim-g-sharp-l-v-4-2-0-1-0-x|G#dim","-Gsaug-g-sharp-l-v-4-3-2-1-1-x|G#aug","-Gsmaj7-g-sharp-l-v-4-6-5-5-4-4|G#maj7","-Gs7-g-sharp-l-v-4-6-4-5-4-4|G#7","-Gsm7-g-sharp-l-v-4-x-4-4-4-x|G#m7","-Gsdim7-g-sharp-l-v-4-x-3-4-3-x|G#dim7","-Gsm(maj7)-g-sharp-l-v-4-6-5-4-4-4|G#m(maj7)","-Gsm7b5-g-sharp-l-v-x-x-6-7-7-7|G#m7b5","-Gssus2-g-sharp-l-v-x-x-6-8-6-7|G#sus2","-Gssus4-g-sharp-l-v-4-6-6-6-4-4|G#sus4","-Gs6-g-sharp-l-v-x-x-6-8-6-8|G#6","-Gs6_9-g-sharp-l-v-x-x-6-5-6-6|G#6/9","-Gs9-g-sharp-l-v-4-x-4-3-1-x|G#9","-Gs11-g-sharp-l-v-4-4-4-5-4-4|G#11","-Gs13-g-sharp-l-v-4-x-4-5-6-x|G#13","-Gs5-g-sharp-l-v-4-6-6-x-x-x|G#5"];
    }
    else if(s1.value=="Gb"){
        var optionArray =["-Gb-g-flat-l-v-2-4-4-3-2-2|Gb","-Gbm-g-flat-l-v-2-4-4-2-2-2|Gbm","-Gbdim-g-flat-l-v-x-x-4-2-1-2|Gbdim","-Gbaug-g-flat-l-v-x-x-4-3-4-2|Gbaug","-Gbmaj7-g-flat-l-v-x-x-4-3-2-1|Gbmaj7","-Gb7-g-flat-l-v-x-x-4-3-2-0|Gb7","-Gbm7-g-flat-l-v-2-x-2-2-2-x|Gbm7","-Gbdim7-g-flat-l-v-2-x-1-2-1-x|Gbdim7","-Gbm(maj7)-g-flat-l-v-2-4-3-2-2-2|Gbm(maj7)","-Gbm7b5-g-flat-l-v-x-x-4-5-5-5|Gbm7b5","-Gbsus2-g-flat-l-v-x-9-11-11-9-9|Gbsus2","-Gbsus4-g-flat-l-v-2-4-4-4-2-2|Gbsus4","--Gb6-g-flat-l-v-x-9-11-11-11-11|Gb6","-Gb6_9-g-flat-l-v-x-x-4-3-4-4|Gb6/9","-Gb9-g-flat-l-v-x-x-4-3-5-4|Gb9","-Gb11-g-flat-l-v-2-2-2-3-2-2|Gb11","-Gb13-g-flat-l-v-2-x-2-3-4-4|Gb13","-Gb5-g-flat-l-v-2-4-4-x-x-x|Gb5"];
    }
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
    //remove blank guitar

    console.log("faf")

}
var count=1;

function getGuitarChord(){
    if(count==1)
    {
        document.getElementById("firstGuitar").style.display = "none";
        document.getElementsByClassName("imageSpot")[0].style.display = "block";
        count=0;
    }
    //get chord from select box
    var selectTwo = document.getElementById('guitarChordScale');
    var extension = selectTwo.options[selectTwo.selectedIndex].value;
    var name = selectTwo.options[selectTwo.selectedIndex].text;
    //extension="-C-c-n-l-v-x-3-2-0-1-0";

    //generates image tag
    var imgTag= document.getElementById('scapiobjid1');
    imgTag.innerHTML="<img alt="+name+"\" guitar chord\" title="+name+"\" guitar chord\" height=\"300px;\" src=\"https://www.scales-chords.com/chord-charts/guitar"+extension+".png\">";

    //changes insert tag chord attribute
    document.getElementsByTagName("ins")[0].setAttribute("chord",name);
    var inser = document.getElementsByTagName("ins")[0].getAttribute("chord");

}