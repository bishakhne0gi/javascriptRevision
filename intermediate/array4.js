const user = ["Irshit", "Arnab", "Riddhiman", "Anurag"];

//slice from start_pos to end_pos-1
console.log(user.slice(1, 3));

//slice from 0
console.log(user.slice(1));


//delete start_pos to end_pos and place the value instead given
user.splice(1, 2, "ne0gi02")
console.log(user);