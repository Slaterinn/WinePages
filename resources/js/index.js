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
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].wine_name + ' ' + data[i].recommendation;
    mainContainer.appendChild(div);
  }
}

/*appendData(data)*/
