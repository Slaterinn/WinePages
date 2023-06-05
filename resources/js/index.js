/*let json_data = [
  {
    "pk_wine": 8792,
    "vivino_id": 2714550,
    "wine_name": "Montes Alpha M",
    "wine_name_vivino": "Montes Alpha M Red",
    "volume": "750.0",
    "abv": "14.5",
    "price": "8998.0",
    "country": "chile",
    "origin_place": "Colchagua Valley",
    "origin_district": "Valle de Central",
    "grapes": "Cabernet Sauvignon 80%, Cabernet Franc 10%, Merlot 5%, Petit Verdot 5%",
    "produced_year": "2015",
    "container_type": "Flaska",
    "first_on_market": "2020-08-01",
    "taste_group": "Kr\u00f6ftugt og \u00f3s\u00e6tt",
    "category": "Red Wine",
    "food_pairing": "\u00c6EFHS",
    "producer": "Montes S.A.",
    "producer_vivino": "Montes",
    "carbon_footprint": "632.99",
    "closing": "KORKUR",
    "is_organic": "false",
    "link": "https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=8792",
    "link_vivino": "https://www.vivino.com/wines/2714550",
    "insert_date": "2023-01-30",
    "rating": "4.3",
    "rating_count": 18723,
    "rating_adjusted": "255.37602996019337",
    "rating_count_index": "1",
    "recommendation": "0.59",
    "insert_date_vivino": "2023-03-01",
    "modified_date_vivino": "2023-03-01"
  },
  {
    "pk_wine": 9565,
    "vivino_id": 4219950,
    "wine_name": "Castello di Querceto Riserva Chianti Classico",
    "wine_name_vivino": "Chianti Classico Riserva",
    "volume": "750.0",
    "abv": "13.5",
    "price": "4259.0",
    "country": "\u00edtal\u00eda",
    "origin_place": "Chianti Classico",
    "origin_district": "Toskana",
    "grapes": "Sangiovese 92%, Canaiolo, Ciliegiolo, Colorino, Mammolo",
    "produced_year": "2018",
    "container_type": "Flaska",
    "first_on_market": "2023-01-01",
    "taste_group": "Me\u00f0alfyllt og \u00f3s\u00e6tt",
    "category": "Red Wine",
    "food_pairing": "EFGJY",
    "producer": "Castello di Querceto",
    "producer_vivino": "Castello di Querceto",
    "carbon_footprint": "698.2",
    "closing": "KORKUR",
    "is_organic": "false",
    "link": "https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=9565",
    "link_vivino": "https://www.vivino.com/wines/4219950",
    "insert_date": "2023-01-30",
    "rating": "3.8",
    "rating_count": 6224,
    "rating_adjusted": "159.65321449284934",
    "rating_count_index": "1",
    "recommendation": "0.53",
    "insert_date_vivino": "2023-03-03",
    "modified_date_vivino": "2023-03-03"
  },
  {
    "pk_wine": 23851,
    "vivino_id": 4905595,
    "wine_name": "Beronia Reserva Seleccion de 198 Barricas",
    "wine_name_vivino": "Rioja Reserva Selecci\u00f3n de 198 Barricas",
    "volume": "750.0",
    "abv": "14.5",
    "price": "5190.0",
    "country": "sp\u00e1nn",
    "origin_place": "Rioja",
    "origin_district": "Rioja",
    "grapes": "Tempranillo 95%, Graciano 5%",
    "produced_year": "2013",
    "container_type": "Flaska",
    "first_on_market": "2021-11-01",
    "taste_group": "Kr\u00f6ftugt og \u00f3s\u00e6tt",
    "category": "Red Wine",
    "food_pairing": "EFHSY",
    "producer": "Bodegas Beronia S.A.",
    "producer_vivino": "Beronia",
    "carbon_footprint": "705.94",
    "closing": "KORKUR",
    "is_organic": "false",
    "link": "https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=23851",
    "link_vivino": "https://www.vivino.com/wines/4905595",
    "insert_date": "2023-01-30",
    "rating": "4.2",
    "rating_count": 765,
    "rating_adjusted": "233.53248654397087",
    "rating_count_index": "0.95",
    "recommendation": "0.67",
    "insert_date_vivino": "2023-03-03",
    "modified_date_vivino": "2023-03-03"
  },
  {
    "pk_wine": 20301,
    "vivino_id": 2525104,
    "wine_name": "Carlo Rossi Sweet Red Magnum",
    "wine_name_vivino": "Sweet Red",
    "volume": "1500.0",
    "abv": "8.0",
    "price": "2999.0",
    "country": "bandar\u00edkin",
    "origin_place": "",
    "origin_district": "",
    "grapes": "",
    "produced_year": "0",
    "container_type": "Flaska",
    "first_on_market": "2015-04-01",
    "taste_group": "L\u00e9tt og s\u00e6tt",
    "category": "Red Wine",
    "food_pairing": "KRVY",
    "producer": "Carlo Rossi",
    "producer_vivino": "Carlo Rossi",
    "carbon_footprint": "0.0",
    "closing": "SKRUF",
    "is_organic": "false",
    "link": "https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=20301",
    "link_vivino": "https://www.vivino.com/wines/2525104",
    "insert_date": "2023-01-30",
    "rating": "3.6",
    "rating_count": 3223,
    "rating_adjusted": "130.00184111207122",
    "rating_count_index": "1",
    "recommendation": "1.00",
    "insert_date_vivino": "2023-03-01",
    "modified_date_vivino": "2023-03-01"
  },
  {
    "pk_wine": 25112,
    "vivino_id": 1469898,
    "wine_name": "The Hess Collection Allomi Cabernet Sauvignon",
    "wine_name_vivino": "Allomi Cabernet Sauvignon",
    "volume": "750.0",
    "abv": "14.5",
    "price": "5299.0",
    "country": "bandar\u00edkin",
    "origin_place": "Napa Valley",
    "origin_district": "North Coast",
    "grapes": "Cabernet Sauvignon 85%, Petite Sirah 7%, Malbec 4%, Merlot 2%, Petit Verdot 2%",
    "produced_year": "2018",
    "container_type": "Flaska",
    "first_on_market": "2020-03-01",
    "taste_group": "Kr\u00f6ftugt og \u00f3s\u00e6tt",
    "category": "Red Wine",
    "food_pairing": "\u00c6EFGH",
    "producer": "Hess Family Wine Estates",
    "producer_vivino": "The Hess Collection",
    "carbon_footprint": "687.02",
    "closing": "STKORK-D",
    "is_organic": "false",
    "link": "https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=25112",
    "link_vivino": "https://www.vivino.com/wines/1469898",
    "insert_date": "2023-01-30",
    "rating": "4.1",
    "rating_count": 36412,
    "rating_adjusted": "213.09764760089598",
    "rating_count_index": "1",
    "recommendation": "0.64",
    "insert_date_vivino": "2023-03-01",
    "modified_date_vivino": "2023-03-01"
  },
  {
    "pk_wine": 26439,
    "vivino_id": 1497701,
    "wine_name": "Marques de la Concordia Vendimia Seleccionada Para Guarda",
    "wine_name_vivino": "Rioja Reserva",
    "volume": "750.0",
    "abv": "14.0",
    "price": "6998.0",
    "country": "sp\u00e1nn",
    "origin_place": "Rioja",
    "origin_district": "Rioja",
    "grapes": "Cabernet Sauvignon, Merlot, Syrah, Tempranillo",
    "produced_year": "2016",
    "container_type": "Flaska",
    "first_on_market": "2020-12-01",
    "taste_group": "Kr\u00f6ftugt og \u00f3s\u00e6tt",
    "category": "Red Wine",
    "food_pairing": "\u00c6EFHS",
    "producer": "Marques de la Concordia Family",
    "producer_vivino": "Marqu\u00e9s de C\u00e1ceres",
    "carbon_footprint": "795.81",
    "closing": "KORKUR",
    "is_organic": "false",
    "link": "https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=26439",
    "link_vivino": "https://www.vivino.com/wines/1497701",
    "insert_date": "2023-01-30",
    "rating": "3.8",
    "rating_count": 7711,
    "rating_adjusted": "159.65321449284934",
    "rating_count_index": "1",
    "recommendation": "0.42",
    "insert_date_vivino": "2023-03-03",
    "modified_date_vivino": "2023-03-03"
  },
  {
    "pk_wine": 6755,
    "vivino_id": 1520027,
    "wine_name": "Vega Sicilia Unico",
    "wine_name_vivino": "Unico",
    "volume": "750.0",
    "abv": "14.0",
    "price": "47654.0",
    "country": "sp\u00e1nn",
    "origin_place": "Ribera del Duero",
    "origin_district": "Castilla y Leon",
    "grapes": "Tempranillo 94%, Cabernet Sauvignon 6%",
    "produced_year": "2009",
    "container_type": "Flaska",
    "first_on_market": "2012-06-01",
    "taste_group": "Kr\u00f6ftugt og \u00f3s\u00e6tt",
    "category": "Red Wine",
    "food_pairing": "",
    "producer": "Bodegas Vega Sicilia",
    "producer_vivino": "N/F",
    "carbon_footprint": "0.0",
    "closing": "KORKUR",
    "is_organic": "false",
    "link": "https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=6755",
    "link_vivino": "https://www.vivino.com/wines/1520027",
    "insert_date": "2023-01-30",
    "rating": "4.7",
    "rating_count": 44951,
    "rating_adjusted": "358.07323521556947",
    "rating_count_index": "1",
    "recommendation": "0.36",
    "insert_date_vivino": "2023-03-02",
    "modified_date_vivino": "2023-03-02"
  },
  {
    "pk_wine": 25431,
    "vivino_id": 156848268,
    "wine_name": "Mucho Mas Tinto",
    "wine_name_vivino": "Mucho M\u00e1s Tinto",
    "volume": "750.0",
    "abv": "14.0",
    "price": "2399.0",
    "country": "sp\u00e1nn",
    "origin_place": "",
    "origin_district": "",
    "grapes": "",
    "produced_year": "0",
    "container_type": "Flaska",
    "first_on_market": "2022-06-01",
    "taste_group": "Kr\u00f6ftugt og millis\u00e6tt",
    "category": "Red Wine",
    "food_pairing": "JKRV",
    "producer": "Felix Solis",
    "producer_vivino": "F\u00e9lix Sol\u00eds",
    "carbon_footprint": "523.39",
    "closing": "STKORK-D",
    "is_organic": "false",
    "link": "https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=25431",
    "link_vivino": "https://www.vivino.com/wines/156848268",
    "insert_date": "2023-01-30",
    "rating": "4.2",
    "rating_count": 47878,
    "rating_adjusted": "233.53248654397087",
    "rating_count_index": "1",
    "recommendation": "1.00",
    "insert_date_vivino": "2023-03-01",
    "modified_date_vivino": "2023-03-01"
  },
  {
    "pk_wine": 4148,
    "vivino_id": 1525615,
    "wine_name": "Tommasi Ripasso",
    "wine_name_vivino": "Valpolicella Ripasso (Classico Superiore)",
    "volume": "750.0",
    "abv": "13.5",
    "price": "3699.0",
    "country": "\u00edtal\u00eda",
    "origin_place": "Valpolicella Classico",
    "origin_district": "Veneto ",
    "grapes": "Corvina 70%, Rondinella 25%, Corvinone 5%",
    "produced_year": "2017",
    "container_type": "Flaska",
    "first_on_market": "2004-05-01",
    "taste_group": "Me\u00f0alfyllt og \u00f3s\u00e6tt",
    "category": "Red Wine",
    "food_pairing": "\u00c6EFLT",
    "producer": "Tommasi Viticoltori",
    "producer_vivino": "Tommasi",
    "carbon_footprint": "638.37",
    "closing": "NOMA",
    "is_organic": "false",
    "link": "https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=4148",
    "link_vivino": "https://www.vivino.com/wines/1525615",
    "insert_date": "2023-01-30",
    "rating": "4.0",
    "rating_count": 52677,
    "rating_adjusted": "194.01172051333095",
    "rating_count_index": "1",
    "recommendation": "0.70",
    "insert_date_vivino": "2023-03-03",
    "modified_date_vivino": "2023-03-03"
  },
  {
    "pk_wine": 22512,
    "vivino_id": 1469449,
    "wine_name": "Decoy Cabernet Sauvignon",
    "wine_name_vivino": "Cabernet Sauvignon",
    "volume": "750.0",
    "abv": "13.9",
    "price": "5619.0",
    "country": "bandar\u00edkin",
    "origin_place": "Kaliforn\u00eda",
    "origin_district": "",
    "grapes": "Cabernet Sauvignon 90%, Merlot 10%",
    "produced_year": "2018",
    "container_type": "Flaska",
    "first_on_market": "2020-12-01",
    "taste_group": "Kr\u00f6ftugt og \u00f3s\u00e6tt",
    "category": "Red Wine",
    "food_pairing": "EFGJY",
    "producer": "Duckhorn Wine Company",
    "producer_vivino": "Deco(ded)",
    "carbon_footprint": "537.12",
    "closing": "KORKUR",
    "is_organic": "false",
    "link": "https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=22512",
    "link_vivino": "https://www.vivino.com/wines/1469449",
    "insert_date": "2023-01-30",
    "rating": "4.0",
    "rating_count": 60645,
    "rating_adjusted": "194.01172051333095",
    "rating_count_index": "1",
    "recommendation": "0.56",
    "insert_date_vivino": "2023-03-03",
    "modified_date_vivino": "2023-03-03"
  }
]*/



fetch('.wines_json.json')
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
