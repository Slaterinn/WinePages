let data, query, result;

fetch('./resources/data/wines_json.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (fetched_data) {
    data = fetched_data;
    
 
     //sort
    data = data.sort((a, b) => {
    if (a.recommendation > b.recommendation) {
      return -1;
      }
    });

    query = buildFilter(filter);
    result = filterData(data, query);
    appendData(result);
    
    typeColor();



  })
  .catch(function (err) {
    console.log(err);
  });


let filter = {
  category: '',
  sweetness: '',
  boldness: '',
  price: 1000000,
  is_organic: '',
  food_pairing: ''
}


function searchFunction() {
  //Declare variables:
  var input, filter, table, cards, card, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("listings");
  cards = document.getElementsByClassName("card");
  
  //breyti gildi í filter object
  
  //Loop through all cards and hide those that don't match the search string
  
  for (i=0; i<cards.length; i++) {
    card = cards[i].getElementsByTagName("h3")[0];
    if(card) {
      txtValue = card.innerHTML;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = ""
      } else {
        cards[i].style.display = "none"
      }
    }
  }
}


function filterType(selectedInput) {
  var value = selectedInput.value;  
  console.log(value);
  //Tek input frá filter og tæmi filter ef það er allt valið:
  if (value == 'Allar víntegundir') {
    filter.category = '';
  } else {
    filter.category = value;  
  }
  
  query = buildFilter(filter);
  //filter data:
  result = filterData(data, query);

  appendData(result);
  typeColor();
}


function filterTaste(selectedInput) {
  var value = selectedInput.value;
  console.log(value);
  //Tek input frá filter og tæmi filter ef það er allt valið:
  if (value == 'Allt valið') {
    filter.sweetness = '';
  } else {
    filter.sweetness = value;  
  }

  query = buildFilter(filter);
  //filter data:
  result = filterData(data, query);

  appendData(result);
  typeColor();
}

function filterTaste2(selectedInput) {
  var value = selectedInput.value;
  console.log(value);
  //Tek input frá filter og tæmi filter ef það er allt valið:
  if (value == 'Allt valið') {
    filter.boldness = '';
  } else {
    filter.boldness = value;  
  }

  query = buildFilter(filter);
  //filter data:
  result = filterData(data, query);

  appendData(result);
  typeColor();
}


function filterOrganic(selectedInput) {
  var value = selectedInput.value;
  if (value == 'Lífræn vín') {
    value = 'true'
  } else {
    value = ''
  }

  console.log(value);
  //Tek input frá filter og tæmi filter ef það er allt valið:
  if (value == 'Öll vín') {
    filter.is_organic = '';
  } else {
    filter.is_organic = value;  
  }

  query = buildFilter(filter);
  //filter data:
  result = filterData(data, query);

  appendData(result);
  typeColor();
}


function filterFood(selectedInput) {
  var value = selectedInput.value;
  console.log(value);
  if (value == 'Nautakjöt') {
    value = 'E'
  } else if (value == 'Grillmatur') {
    value = 'J'
  } else if (value == 'Austurlenskt') {
    value = 'K'
  } else if (value == 'Fiskur') {
    value = 'C'
  } else if (value == 'Grænmetisréttir') {
    value = 'I'
  } else if (value == 'Lambakjöt') {
    value = 'F'
  } else if (value == 'Pasta') {
    value = 'M'
  } else if (value == 'Sushi') {
    value = '4'
  } else if (value == 'Villibráð') {
    value = 'H'
  } else if (value == 'Án matar') {
    value = 'W'
  } else {
    value = ''
  }

  console.log(value);
  //Tek input frá filter og tæmi filter ef það er allt valið:
  if (value == 'Allt valið') {
    filter.food_pairing = '';
  } else {
    filter.food_pairing = value;  
  }

  query = buildFilter(filter);
  //filter data:
  result = filterData(data, query);

  appendData(result);
  typeColor();
}


function filterPrice(selectedInput) {
  var value = selectedInput.value;
  //Tek input frá filter og tæmi filter ef það er allt valið:

  if (value == 'Öll verð') {
    filter.price = 1000000;
  } else if (value == 'Undir 3.000') {
    filter.price = 3000;  
  } else if (value == 'Undir 5.000') {
    filter.price = 5000;
  } else if (value == 'Undir 10.000') {
    filter.price = 10000;
  } else {
    filter.price = 20000
  };

  //query = buildFilter(filter);
  //filter data:
  result = filterData(data, query);

  appendData(result);
  typeColor();
}


buildFilter = (filter) => {
    let query = {};
    for (let keys in filter) {
        if (filter[keys].length > 0) {
            query[keys] = filter[keys];
        }
    }
    return query;
}

filterData = (data, query) => {
  const filteredData = data.filter( (item) => {
    if(parseInt(item['price']) > filter['price']){
      return false;
    }

    for (let key in query) {
        console.log(item['wine_name']);
        console.log(item[key] + ' - ' + query[key] )
        console.log('passar food pairing? ' + item[key].includes(query[key]))
        if (item[key] === undefined || item[key] === null || !item[key].includes(query[key]) || parseInt(item['price']) > filter['price'] ) {
          return false;
        }
    }
      return true;
  });
  return filteredData;
}



//query[key] !== (item[key].toUpperCase())


/*Bý til html partinn*/
function appendData(data) {
  var mainContainer = document.getElementById("listings");
  mainContainer.innerHTML = '';

  for (var i = 0; i < data.length; i++) {

    var card = document.createElement("div");
    card.className = "card p-4 py-4 has-background-warning-light rounded-xl is-cursor-pointer transform is-duration-300 hover-translate-y";
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
    wine_name.className = "is-size-2 has-text-weight-bold mb-6";
    wine_name.innerHTML= data[i].wine_name;
    content.appendChild(wine_name);

    var wine_rec = document.createElement("h4");
    wine_rec.className = "is-size-5 mb-5";
    wine_rec.innerHTML = 'Meðmæli: ' + parseInt(data[i].recommendation*100) + '%';
    content.appendChild(wine_rec);

    var columns = document.createElement("div");
    columns.className = "columns";
    content.appendChild(columns);

    var column_left = document.createElement("div");
    column_left.className = "column py-0";
    columns.appendChild(column_left);

    var producer_value = document.createElement("p");
    producer_value.className = "title is-size-6 mt-2 has-text-grey-dark";
    if (data[i].producer_vivino = 'N/F') {
      producer_value.innerHTML = data[i].producer
    } else {
      producer_value.innerHTML = data[i].producer_vivino;
    }
    
    var producer = document.createElement("p");
    producer.className = "subtitle is-7 pt-1 has-text-grey is-uppercase";
    producer.innerHTML = 'Framleiðandi';

    var country_value = document.createElement("p");
    country_value.className = "title is-size-6 mt-2 has-text-grey-dark";
    //Gerði land initCap
    var country_text = data[i].country
    var firstLetter = country_text.charAt(0)
    var firstLetterCap = firstLetter.toUpperCase()
    var remainingLetters = country_text.slice(1)
    var countryInitCap = firstLetterCap + remainingLetters

    country_value.innerHTML = countryInitCap;
    var country = document.createElement("p");
    country.className = "subtitle is-7 pt-1 has-text-grey is-uppercase";
    country.innerHTML = "Land";

    var area_value = document.createElement("p");
    area_value.className = "title is-size-6 mt-2 has-text-grey-dark";
    area_value.innerHTML = data[i].origin_place;
    var area = document.createElement("p");
    area.className = "subtitle is-7 pt-1 has-text-grey is-uppercase";
    area.innerHTML = "Svæði";

    var taste_value = document.createElement("p");
    taste_value.className = "title is-size-6 mt-2 has-text-grey-dark";
    taste_value.innerHTML = data[i].taste_group;
    var taste = document.createElement("p");
    taste.className = "subtitle is-7 pt-1 has-text-grey is-uppercase";
    taste.innerHTML = "Bragðflokkur";

    if (producer_value.innerHTML !== ""){
      column_left.appendChild(producer_value);
      column_left.appendChild(producer);
    };
    
    if (country_value.innerHTML !== ""){
    column_left.appendChild(country_value);
    column_left.appendChild(country);
    };

    if (area_value.innerHTML !== ""){
    column_left.appendChild(area_value);
    column_left.appendChild(area);
    };
    
    if (taste_value.innerHTML !== ""){
    column_left.appendChild(taste_value);
    column_left.appendChild(taste);
    };


    var column_right = document.createElement("div");
    column_right.className = "column py-0";
    columns.appendChild(column_right);

    var price_value = document.createElement("p");
    price_value.className = "title is-size-6 mt-2 has-text-grey-dark";
    price_value.innerHTML = parseInt(data[i].price).toLocaleString("de-DE");
    var price = document.createElement("p");
    price.className = "subtitle is-7 pt-1 has-text-grey is-uppercase";
    price.innerHTML = "Verð";

    var rating_value = document.createElement("p");
    rating_value.className = "title is-size-6 mt-2 has-text-grey-dark";
    rating_value.innerHTML = data[i].rating;
    var rating = document.createElement("p");
    rating.className = "subtitle is-7 pt-1 has-text-grey is-uppercase";
    rating.innerHTML = "Einkunn";

    var grapes_value = document.createElement("p");
    grapes_value.className = "title is-size-6 mt-2 has-text-grey-dark";
    grapes_value.innerHTML = data[i].grapes;
    var grapes = document.createElement("p");
    grapes.className = "subtitle is-7 pt-1 has-text-grey is-uppercase";
    grapes.innerHTML = "Þrúgur";



    if (price_value.innerHTML !== ""){
    column_right.appendChild(price_value);
    column_right.appendChild(price);
    };
    
    if (rating_value.innerHTML !== ""){
    column_right.appendChild(rating_value);
    column_right.appendChild(rating);
    };

    if (grapes_value.innerHTML !== ""){
    column_right.appendChild(grapes_value);
    column_right.appendChild(grapes);
    };
    //Bæti við linkunum neðst í card
    var footer = document.createElement("footer");
    footer.className = "card-footer";
    card.appendChild(footer);
    
    var footer_content_vin = document.createElement("p");
    footer_content_vin.className = "card-footer-item pb-0";
    footer.appendChild(footer_content_vin);

    var footer_link_vin = document.createElement("a");
    footer_link_vin.href = data[i].link;
    footer_link_vin.innerHTML = 'Vínbúðin';
    footer_link_vin.setAttribute('target', '_blank');
    footer_content_vin.appendChild(footer_link_vin);

    var footer_content_viv = document.createElement("p");
    footer_content_viv.className = "card-footer-item pb-0";
    footer.appendChild(footer_content_viv);

    var footer_link_viv = document.createElement("a");
    footer_link_viv.href = data[i].link_vivino;
    footer_link_viv.innerHTML = 'Vivino';
    footer_link_viv.setAttribute('target', '_blank');
    footer_content_viv.appendChild(footer_link_viv);
  }
}




function sortByField(selectedInput){
  var value = selectedInput.value.toUpperCase();
  if (value == 'MEÐMÆLUM') {
    console.log(value);
    //Raða json eftir recommendation
    data = data.sort((a, b) => {
      if (a.recommendation > b.recommendation) {
        return -1;
      }
    })
    var result = filterData(data, query);
    appendData(result);
    typeColor();
  } else if (value == 'VERÐI (DÝRAST EFST)') {
    console.log(value);
    //Raða json eftir rating
    data = data.sort((a, b) => {
      if (parseInt(a.price) > parseInt(b.price) ) {
        return -1;
      }
    })
    var result = filterData(data, query);
    appendData(result);
    typeColor();
  } else if (value == 'VERÐI (ÓDÝRAST EFST)') {
    console.log(value);
    //Raða json eftir rating
    data = data.sort((a, b) => {
      if (parseInt(b.price) > parseInt(a.price) ) {
        return -1;
      }
    })
    var result = filterData(data, query);
    appendData(result);
    typeColor();
  } else {
    console.log(value);
    //Raða json eftir rating
    data = data.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      }
    })
    var result = filterData(data, query);
    appendData(result);
    typeColor();
  }
}

function typeColor() {
  //Declare variables:
  var cards, wine_type, wine_type_value;
  cards = document.getElementsByClassName("card");
  //wine_type = document.getElementsByClassName("wine-type");
  //wine_type_value = wine_type.innerHTML.toUpperCase();
    
  //Loop through all cards and change color of all wine type texts depending on the value
  
  for (i=0; i<cards.length; i++) {
    var card = cards[i].getElementsByClassName("wine-type");
    if(card && card[0].innerHTML === 'Red Wine') {
      card[0].style.color = "#A82548";
    } else if (card && card[0].innerHTML === 'Rose'){
      card[0].style.color = "#F98E72";
    } else if (card && card[0].innerHTML === 'Sparkling Wine'){
      card[0].style.color = "#F6CE97";
    } else {
      card[0].style.color = "#dbdd46";
    }
  }
}




//typeColor var hér


//filter data:
/*var result = filterData(data, query);
appendData(result);
typeColor();*/


function showHideFilters() {
  var x = document.getElementById("filter-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}