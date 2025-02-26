//API key vrKPO5UnkVMAE0FGzPg7N9LV1XxgNkwX

document.getElementById('searchBtn').addEventListener('click', function() {
    let search = document.getElementById('searchFld').value;
    console.log('Search query:', search);
    performSearch(search);
});


function performSearch(search) {
    const apiKey = 'vrKPO5UnkVMAE0FGzPg7N9LV1XxgNkwX';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=10`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let gifContainer = document.getElementById('gifContainer');
        gifContainer.innerHTML = '';
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


async function openingImage() {
    const apiKey = 'vrKPO5UnkVMAE0FGzPg7N9LV1XxgNkwX';
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`;

    try{
    let response = await fetch(url);
    let data = await response.json();
    let differentGif = Math.floor(Math.random() * data.data.length);
    let img = document.createElement('img');
    img.src = data.data[differentGif].images.fixed_height.url;
    randomGif.appendChild(img);
    } catch(error) {
        console.error('Error Getting Gif:', error);
    }
   
}
openingImage();