//Adds to original IIFE, needs to be after First IIFE JS
var Sedan = (function(newSedan){
  var max_occupancy = 6; 
  var current_occupancy = 0; 
//variable below will overwrite one on Sedan.js
  var type = "minivan";

  newSedan.getOccupancy = function(){
    return current_occupancy; 
  }; 

  newSedan.setOccupancy = function(occupancy){
 // <= translates to less than or equal to   
    if(occupancy <= max_occupancy){
           current_occupancy = occupancy;
     } else {
      //you can replace "alert" with "throw" and get rid of quotes, alerts error in DOM
      alert("Cannot exceed maximum occupancy of " + max_occupancy + "!");
     }
  };
//now you are overwriting what is on Sedan.js
  newSedan.getType = function(){
    return "minivan"; 
  }
//calling what you created above
  return newSedan;

})(Sedan || {});