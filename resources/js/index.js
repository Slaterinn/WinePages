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
	var wine_title = document.createElement("div");
    wine_title.className = "title"
    wine_title.innerHTML = data[i].wine_name;
    mainContainer.appendChild(wine_title);
  }
}

/*appendData(data)*/
