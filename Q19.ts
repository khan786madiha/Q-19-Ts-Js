// 19.	Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestArr: string[] = ["Tehreem" , "Merum" , "Konain" , "Habiba" , "Uswa"]

let canNotattend: string = "Konain";
let newGuest: string = "Zoya"
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("Ayesha");
let middleGuest: string = "Hibban";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Ambreen");
// console.log(guestArr);


 console.log(guestArr.length + " " + "people" + " " + "are invited to dinner");


