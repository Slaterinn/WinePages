fetch('./data/wines_json.json')
    .then((response) => response.json())
    .then((json) => console.log(json));