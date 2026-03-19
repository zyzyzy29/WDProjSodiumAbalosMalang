var video = document.getElementById('video');
var captureB = document.getElementById('captureB');
var pCont = document.getElementById('photos');
var timerI = document.getElementById('timer');

//alert to access cam
navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream;
});

//capture
captureB.addEventListener('click', () => {
    var timer = timerI.value - 1;
    if(timer > 0){
        captureB.disabled = true;
        var countdown = setInterval(() =>{
            captureB.textContent = `Capturing in ${timer}...`;
            if(timer <= 0){
                clearInterval(countdown);
                captureB.textContent = 'Capture';
                captureB.disabled = false;
                takePhoto();
            }
            timer--;
        }, 1000);
    }

    else{
        takePhoto();
    }
});

function takePhoto(){
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    //get the image from the video and convert to png
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL('img/jpeg');

    //create pics list
    var photoD = document.createElement('div');
    photoD.classList.add('photo');

    var img = document.createElement('img');
    img.src = dataURL;
    photoD.appendChild(img);

    //let ppl download img
    var downloadB = document.createElement('button');
    downloadB.textContent = 'Download';
    downloadB.addEventListener('click', () => {
        var a = document.createElement('a');
        a.href = dataURL;
        a.download = 'photo.jpeg';
        a.click();
    });

    photoD.appendChild(downloadB);
    pCont.appendChild(photoD);
}

//switch pages using numbers
document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "1":
            window.location.href = "index.html";
            break;
        case "2":
            window.location.href = "public/htmlFiles/tops.html";
            break;
        case "3":
            window.location.href = "public/htmlFiles/bottoms.html";
            break;
        case "4":
            window.location.href = "public/htmlFiles/colorCombi.html";
            break;
        case "5":
            window.location.href = "public/htmlFiles/combi.html";
            break;
        case "6":
            window.location.href = "public/htmlFiles.photobooth.html"
        case "7":
            window.location.href = "public/htmlFiles/abtUs.html";
            break;
        case "8":
            window.location.href = "public/htmlFiles/contUs.html";
            break;
        case "9":
            window.location.href = "public/htmlFiles/sources.html";
            break;
    }
});

//for hamburger menu button
const ham = document.querySelector('.ham');
    const offScreen = document.querySelector('.offScreen');

    ham.addEventListener('click', () => {
        ham.classList.toggle('active');
        offScreen.classList.toggle('active');
    });

function sub(event) {
    // 1. Prevents the 405 error and page reload
    event.preventDefault(); 

    // 2. Confirmation dialog
    if(!confirm('Confirm submission?')){
        return false;
    }

    // 3. Get values (Make sure these IDs match your HTML exactly)
    const newSuggestion = {
        fullName: document.getElementById('fname').value,
        discord: document.getElementById('dc').value || "N/A",
        email: document.getElementById('em').value || "N/A",
        subject: document.getElementById('sbj').value,
        message: document.getElementById('m').value,
        date: new Date().toLocaleDateString()
    };

    // 4. Save logic
    let suggestions = JSON.parse(localStorage.getItem('suggestionsData')) || [];
    suggestions.push(newSuggestion);
    localStorage.setItem('suggestionsData', JSON.stringify(suggestions));

    alert("Suggestion Saved!");
    
    // 5. Reset form and stay on page
    document.getElementById('suggestionForm').reset();
}