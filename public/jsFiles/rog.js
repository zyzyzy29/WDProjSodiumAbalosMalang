//switch pages using numbers
document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "1":
            window.location.href = "../../index.html";
            break;
        case "2":
            window.location.href = "../htmlFiles/tops.html";
            break;
        case "3":
            window.location.href = "../htmlFiles/bottoms.html";
            break;
        case "4":
            window.location.href = "../htmlFiles/colorCombi.html";
            break;
        case "5":
            window.location.href = "../htmlFiles/combi.html";
            break;
        case "6":
            window.location.href = "../htmlFiles/abtUs.html";
            break;
        case "7":
            window.location.href = "../htmlFiles/contUs.html";
            break;
        case "8":
            window.location.href = "../htmlFiles/sources.html";
            break;
    }
});

//for side bar
const rBtn = document.querySelector("[data-r-btn]");

rBtn.addEventListener("click", function(event){
    event.preventDefault();
    document.body.classList.toggle('sbe');
});

let matchFromTop = {
    1: [1, 2, 3, 7, 9, 10], 
    2: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12],
    3: [1, 2, 3, 4, 6, 7, 10, 12],
    4: [1, 3, 4, 6, 7, 10, 12],
    5: [1, 3, 4, 6, 7, 10, 11, 12],
    6: [1, 2, 3, 4, 6, 7, 8, 9, 10],
    7: [1, 3, 4, 6, 10, 11, 12],
    8: [1, 2, 3, 4, 7, 10, 12],
    9: [1, 2, 3, 5, 7, 10],
    10: [1, 2, 3, 5, 6, 7, 10],
    11: [1, 2, 3, 5, 6, 7, 10],
    12: [1, 3, 5, 7, 10]
};

let matchFromBttm = {
    1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    2: [1, 2, 3, 6, 8, 9, 10, 11],
    3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    4: [2, 3, 4, 5, 6, 7, 8],
    5: [9, 10, 11, 12],
    6: [2, 3, 4, 5, 6, 7, 10, 11],
    7: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12],
    8: [2, 6],
    9: [1, 2, 6],
    10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    11: [2, 5, 7],
    12: [2, 3, 4, 5, 7, 8]
};

let picsT = [
    "../../assets/GenPics/Tops/babyDoll.png",
    "../../assets/GenPics/Tops/tank.png",
    "../../assets/GenPics/Tops/babyT.png",
    "../../assets/GenPics/Tops/crop.png",
    "../../assets/GenPics/Tops/baggy.png",
    "../../assets/GenPics/Tops/tube.png",
    "../../assets/GenPics/Tops/offTheShoulder.png",
    "../../assets/GenPics/Tops/longSleeve.png",
    "../../assets/GenPics/Tops/fittedButtonUp.png",
    "../../assets/GenPics/Tops/buttonUp.png",
    "../../assets/GenPics/Tops/polo.png",
    "../../assets/GenPics/Tops/baggyButtonUp.png"
];

let picsB = [
    "../../assets/GenPics/Bottoms/baggyJ.png",
    "../../assets/GenPics/Bottoms/flare.png",
    "../../assets/GenPics/Bottoms/wide.png",
    "../../assets/GenPics/Bottoms/sweats.png",
    "../../assets/GenPics/Bottoms/dressPants.png",
    "../../assets/GenPics/Bottoms/jorts.png",
    "../../assets/GenPics/Bottoms/jeanMini.png",
    "../../assets/GenPics/Bottoms/mini.png",
    "../../assets/GenPics/Bottoms/flowy.png",
    "../../assets/GenPics/Bottoms/jeanShorts.png",
    "../../assets/GenPics/Bottoms/shorts.png",
    "../../assets/GenPics/Bottoms/tightShorts.png"
]



function generate(){
    var CT = Math.floor(Math.random() * 12) + 1;
    var checkCR = 0;

    while(checkCR != 1){
        var CB = Math.floor(Math.random() * 12) + 1;

        var rah = matchFromTop[CT];
        if(rah.indexOf(CB) !== -1){
            document.getElementById("CRtop").innerHTML = "<img src='" + picsT[CT-1] + "' alt='Random Top'>";
            document.getElementById("CRbtm").innerHTML = "<img src='" + picsB[CB-1] + "' alt='Random Bottom'>";
            checkCR++;
            break;
        }
                
    }  
            
}

function genBttm(){
    var FT = document.getElementById("chooseT").value;
    var checkB = 0;

    document.getElementById("Ftop").innerHTML = "<img src='" + picsT[FT-1] + "' alt='Chosen Top'>";

    while(checkB != 1){
        var RB = Math.floor(Math.random() * 12) + 1;

        var rah = matchFromTop[FT];
        if(rah.indexOf(RB) !== -1){
            document.getElementById("Rbtm").innerHTML = "<img src='" + picsB[RB-1] + "' alt='RandomBottom'>";
            checkB++;
            break;
        }    
    }  
}

function genTop(){
    var FB = document.getElementById("chooseB").value;
    var checkT = 0;

    document.getElementById("Fbtm").innerHTML = "<img src='" + picsB[FB-1] + "' alt='Chosen Bottom'>";

    while(checkT != 1){
        var RT = Math.floor(Math.random() * 12) + 1;

        var rah = matchFromBttm[FB];
        if(rah.indexOf(RT) !== -1){
            document.getElementById("Rtop").innerHTML = "<img src='" + picsT[RT-1] + "' alt='Random Top'>";
            checkT++;
            break;
        }
                
    }  
}