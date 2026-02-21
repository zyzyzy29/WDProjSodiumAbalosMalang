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