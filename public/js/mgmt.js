//we need to create onclick events to display the correct table info.
//as per the index.html, we have btns for ALL, FOOD, DRINK, CANDY, LOW
//we also need a form/input to update tables via the webpage

//starts DataTable on DOC load
$(document).ready(function() {
  //$("#store_table").DataTable();

  $.get("/api/examples", function(result) {
    console.log(result);
  });
});

//reads method to read all the data from Store Database
// let showAll = function(){
//     $("#allBtn").on("click", function(){
//         db.Store.findAll()
//         .then(function(dbStoreAll){
//             console.log(dbStoreAll);
//             return dbStoreAll;
//         });
//     }
//     )};

//reads method to read only the data of the button clicked on
// let showSpecific = function(){
//     $("button").click(function(){
//         let value=$(this).attr("value");
//         //show specific data from DB
//         db.Store.findOne({
//             where: {
//                 type: value
//             }
//         }).then(function(dbStoreSpec){
//             console.log(dbStoreSpec);
//             return dbStoreSpec;
//         });
//     })
// };

//update stock quantity based on the name entered and value specified into a form
// let updateDb = function(){
//     //take the user input of the stock quantity form input field
//     let newStock = $("#stockInput").val();
//     let idUpd = $("#idInput").val();
//     let updateEntry = {
//         quantity = newStock
//     }
// ;
//     db.Store.update(updateEntry, {
//         where: {
//             id: idUpd
//         }
//     }).then(function(dbUpdate){
//         console.log(dbUpdate);
//     });
// }

//delete an entry
// let deleteDb  = function(){
//     let idUpd = $("#idInput").val();

//     db.Store.destroy({
//     where: {
//         id: idUpd
//     }
// }).then(function(dbDestroy){
//     console.log(dbDestroy)
// });
//}
