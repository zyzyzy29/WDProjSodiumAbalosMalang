document.addEventListener("keydown", function(event) {
    // Check the value of event.key
    switch (event.key) {
        case "n":
        case "N":
            // Redirect to the next page
            window.location.href = "public/htmlFiles/tops.html";
            break;
        case "p":
        case "P":
            // Redirect to the previous page
            window.location.href = "bottoms.html";
            break;
    }
});