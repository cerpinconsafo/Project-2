//we need to create onclick events to display the correct table info.
//as per the index.html, we have btns for ALL, FOOD, DRINK, CANDY, LOW
//we also need a form/input to update tables via the webpage

//i have no idea how to create a conditional inside my for loop to only populate the table if a certain string is present

// $(document).ready(function() {
//all button filter
$("#allBtn").on("click", function() {
  $.get("/api/inven", function(response) {
    console.log(response);
    // create an array for col headers
    var col = [];
    for (var i = 0; i < response.length; i++) {
      for (var key in response[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }
    var table = document.createElement("table");
    // create the table using headers
    var tr = table.insertRow(-1); // table row
    for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th"); // table head
      th.innerHTML = col[i];
      tr.appendChild(th);
    }
    // use JSON to add to rows
    for (var i = 0; i < response.length; i++) {
      tr = table.insertRow(-1);
      for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = response[i][col[j]];
      }
    }
    // add the full table to html div
    var divContainer = document.getElementById("showTable");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  });
});
