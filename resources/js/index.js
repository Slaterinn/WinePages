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
  var findContainers = document.getElementsByClassName("media-content");
  var mainContainer = findContainers[0]
  for (var i = 0; i < data.length; i++) {
    var wine_title = document.createElement("p");
    wine_title.className = "title is-4";
    div.innerHTML = data[i].wine_name;
    mainContainer.appendChild(div);
  }
}

/*appendData(data)*/
