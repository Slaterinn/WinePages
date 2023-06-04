fetch('./data/wines_json.json')
    .then((response) => response.json())
    .then((json) => console.log(json));


function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].wine_name + ' ' + data[i].recommendation;
    mainContainer.appendChild(div);
  }
}