//Why is this last on HTML? Anything you want the other JS files to do and this returns to the DOM
console.log("Sedan IIFE", Sedan); 
console.log("Sedan Color", Sedan.getColor()); 
console.log("Sedan Type", Sedan.getType()); 
//setting the occupancy on line 6, so you can see it on line 7
console.log("Sedan Set Occupany", Sedan.setOccupancy(7));
console.log("Sedan Set Occupany", Sedan.getOccupancy());