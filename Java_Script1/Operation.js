let book = ["math","physics","bio","computer",];
console.log(book.length);
book.push("Hindi");
book.push("Deepak");
book.pop("Deepak");
// To add first side 
// use unshift
// to add back side in array element use push/
book.unshift("Rshu");
book.splice(1,2); //use to remove element in between
let position =  book.indexOf("math");
console.log(position);

//console.log(book);

