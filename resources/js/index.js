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

    card_media_content.appendChild(wine_title);
    card_media.appendChild(card_media_content);
    card_content.appendChild(card_media);
    card_container.appendChild(card_content);
    mainContainer.appendChild(card_container);


    wine_title.innerHTML = data[i].wine_name;
    mainContainer.appendChild(wine_title);
  }
}



	<div class="card container myData">
	  <div class="card-content">
	    <div class="media">
	      <div class="media-content">
	        <!--<p class="title is-4">John Smith</p> -->
	        <!--<p class="subtitle is-6">@johnsmith</p>-->
	      </div>
	    </div>

	    <div class="content">
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
	      <a href="#">#css</a> <a href="#">#responsive</a>
	      <br>
	      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
	    </div>
	  </div>
	</div>