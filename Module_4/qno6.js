document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('searchForm');
    const jokesSection = document.getElementById('jokesSection');

    form.onsubmit = function(event) {
        event.preventDefault();

        const query = document.getElementById('query').value; // Get the search term

        fetch('https://api.chucknorris.io/jokes/search?query=' + query)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                jokesSection.innerHTML = '';
                data.result.forEach(function(joke) {
                    const jokeArticle = document.createElement('article');
                    const jokeParagraph = document.createElement('p');
                    jokeParagraph.textContent = joke.value; // Set joke text
                    jokeArticle.appendChild(jokeParagraph);
                    jokesSection.appendChild(jokeArticle);
                });
            });
    };
});