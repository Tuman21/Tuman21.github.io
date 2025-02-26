//API key vrKPO5UnkVMAE0FGzPg7N9LV1XxgNkwX

document.getElementById('searchBtn').addEventListener('click', function() {
    let search = document.getElementById('searchFld').value;
    console.log('Search query:', search);
    performSearch(search);
});


function performSearch(search) {
    let apiKey = 'vrKPO5UnkVMAE0FGzPg7N9LV1XxgNkwX';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=10`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let gifContainer = document.getElementById('gifContainer');
        gifContainer.innerHTML = ''; // Clear previous results
        data.data.forEach(gif => {
            let img = document.createElement('img');
            img.src = gif.images.fixed_height.url;
            gifContainer.appendChild(img);
        });
    })
    .catch(error => {
        console.error('Error fetching GIFs:', error);
    });

}







async function getSyncData() {
    
    let apiKey = 'vrKPO5UnkVMAE0FGzPg7N9LV1XxgNkwX';
    
    let response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=vrKPO5UnkVMAE0FGzPg7N9LV1XxgNkwX&q=&limit=10&offset=0&rating=pg-13&lang=en&bundle=messaging_non_clips');

    
}