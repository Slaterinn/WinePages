fetch('./resources/data/wines_json.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

var myEl = document.createElement('div');

var myLi = document.createElement('li');

var myA = document.createElement('a');

var myImg = document.createElement('img');

function appendData(data) {
  var findContainers = document.getElementsByClassName("cards");
  var mainContainer = findContainers[0]
  for (var i = 0; i < data.length; i++) {
    var card_container = document.createElement("div");
    card_container.className = "card container myData";
    
    var card_content = document.createElement("div");
    card_content.className = "card-content"
    
    var card_media = document.createElement("div");
    card_media.className = "media"
	
	var card_media_content = document.createElement("div");
    card_media_content.className = "media-content"
	
	var wine_title = document.createElement("p");
    wine_title.className = "title"
    wine_title.innerHTML = data[i].wine_name;
    var wine_subtitle = document.createElement("p");
    wine_title.className = "subtitle"
    wine_subtitle.innerHTML = data[i].producer_vivino;

    card_media_content.appendChild(wine_title);
    card_media_content.appendChild(wine_subtitle);
    card_media.appendChild(card_media_content);
    card_content.appendChild(card_media);
    card_container.appendChild(card_content);
    mainContainer.appendChild(card_container);


    
  }
}

