//we need to create onclick events to display the correct table info.
//as per the index.html, we have btns for ALL, FOOD, DRINK, CANDY, LOW
//we also need a form/input to update tables via the webpage

$(document).ready(function() {
  //$("#store_table").DataTable();

  $.get("/api/inven", function(response) {
    console.log(response);

    var col = [];
    for (var i = 0; i < response.length; i++) {
      for (var key in response[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }

    var table = document.createElement("table");
   
    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1); // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th"); // TABLE HEADER.
      th.innerHTML = col[i];
      tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < response.length; i++) {
      tr = table.insertRow(-1);

      for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);

        tabCell.innerHTML = response[i][col[j]];
      }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  });
});
