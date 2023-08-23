document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

    var searchInput = document.getElementById("search-input").value;
    var searchResults = document.getElementById("search-results");

    // Effectuer une requête AJAX vers un script PHP pour traiter la recherche
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                searchResults.innerHTML = xhr.responseText;
            } else {
                searchResults.innerHTML = "Une erreur s'est produite.";
            }
        }
    };

    xhr.open("GET", "search.php?q=" + encodeURIComponent(searchInput), true);
    xhr.send();
});
