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


function appendData(data) {
  var findContainer = document.getElementsByClassName("column");
  mainContainer = findContainer[0];
  for (var i = 0; i < data.length; i++) {
  	var card = document.createElement("div");
  	card.className = "card p-4 py-6 has-background-warning-light rounded-xl is-cursor-pointer transform is-duration-300 hover-translate-y";
  	mainContainer.appendChild(card);

  	var card_content = document.createElement("div");
  	card_content.className = "card-content";
  	card.appendChild(card_content);

  	var content = document.createElement("div");
  	content.className = "content";
  	card_content.appendChild(content);

  	var wine_type = document.createElement("h5");
  	wine_type.className = "wine-type";
  	wine_type.innerHTML= data[i].category;
  	content.appendChild(wine_type);

  	var wine_name = document.createElement("h3");
  	wine_name.className = "is-size-1 has-text-weight-bold mb-6";
  	wine_name.innerHTML= data[i].wine_name;
  	content.appendChild(wine_name);

  	var wine_rec = document.createElement("h4");
  	wine_rec.className = "is-size-5 mb-5";
  	wine_rec.innerHTML= data[i].recommendation;
  	content.appendChild(wine_rec);

  	var wine_info = document.createElement("div");
  	wine_info.className = "is-size-6 has-text-weight-light";
  	content.appendChild(wine_info);

  	var producer_text = document.createElement("p");
  	producer_text.className = "info-item";
  	producer_text.innerHTML = 'Framleiðandi: ';
  	wine_info.appendChild(producer_text);
  	var producer = document.createElement("span");
  	producer.className = "has-text-weight-medium";
  	producer.innerHTML= data[i].producer_vivino;
  	producer_text.appendChild(producer);

  	var country_text = document.createElement("p");
  	country_text.className = "info-item";
  	country_text.innerHTML = 'Land: ';
  	wine_info.appendChild(country_text);
  	var country = document.createElement("span");
  	country.className = "has-text-weight-medium";
  	country.innerHTML= data[i].country;
  	country_text.appendChild(country);

   	var area_text = document.createElement("p");
  	area_text.className = "info-item";
  	area_text.innerHTML = 'Svæði: ';
  	wine_info.appendChild(area_text);
  	var area = document.createElement("span");
  	area.className = "has-text-weight-medium";
  	area.innerHTML= data[i].origin_place;
  	area_text.appendChild(area);

  	var taste_text = document.createElement("p");
  	taste_text.className = "info-item";
  	taste_text.innerHTML = 'Bragðflokkur: ';
  	wine_info.appendChild(taste_text);
  	var taste = document.createElement("span");
  	taste.className = "has-text-weight-medium";
  	taste.innerHTML= data[i].taste_group;
  	taste_text.appendChild(taste);
    
  }
}

