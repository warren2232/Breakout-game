var allUsers = new Array();
//CREATINF ARRAY OF USER DATA
for (var i = 0; i < localStorage.length; i++) {

 var key = localStorage.key(i);
 var temp = localStorage.getItem(key);
 allUsers[i] = JSON.parse(temp);
}

//SORTING OF SCORES
for (let i = 1; i < allUsers.length; i++) {
    for (let j = 0; j < allUsers.length - 1; j++) {
     if (allUsers[j].score < allUsers[j + 1].score) {
      let temp = allUsers[j + 1];
      allUsers[j + 1] = allUsers[j];
      allUsers[j] = temp;
     }
    }
   }

//DISPLAYING SCORES FROM ARRAY TO TABLE
let text = '';
let rank = 1;
for (let i = 0; i < allUsers.length; i++) {
 text += "<tr>";
 text += "<td>" + rank + "</td>";
 text += "<td>" + allUsers[i].text + "</td>";
 text += "<td>" + allUsers[i].score + "</td></tr>";
 rank++;
}

document.getElementsByTagName("tbody")[0].innerHTML = text;