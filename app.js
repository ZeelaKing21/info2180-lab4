
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-btn");

    searchButton.addEventListener("click", function () {
        fetch("superheroes.php")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Unable to fetch superheroes");
                }
                return response.text();
            })
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error(error);
                alert("An error occurred while fetching superheroes.");
            });
    });
});
 