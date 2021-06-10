//sama dengan nilai
let result = 5 == "5";//hasil true karena nilai sama (walaupun dibandingkan dengan string) 
document.writeln(result);

//paragraf break
document.writeln('<br>');

//sama dengan nilai dan sama dengan tipe data
result = 5 === "5";//hasil false karena tipe data tidak sama (number dengan string) 
document.writeln(result);

//paragraf break
document.writeln('<br>');

//tidak sama dengan nilai
result = 5 != "5";//hasil false karena nilai tidak sama (walaupun dibandingkan dengan string) 
document.writeln(result);

//paragraf break
document.writeln('<br>');

//tidak sama dengan nilai dan tidak sama dengan tipe data
result = 5 !== "5";//hasil true karena tipe data tidak sama (number dengan string) 
document.writeln(result);

//paragraf break
document.writeln('<br>');

//lebih dari
result = 5 > "5";//hasil false karena 5 tidak lebih besar dari 5
document.writeln(result);

//paragraf break
document.writeln('<br>');

//lebih dari atau sama dengan
result = 5 >= "5";//hasil true karena 5 tidak lebih besar dari 5 tapi sama dengan 5 maka hasil true
document.writeln(result);

//paragraf break
document.writeln('<br>');

//kurang dari
result = 5 < "10"; //hasil true karena 5 lebih kecil dari 10
document.writeln(result);

//paragraf break
document.writeln('<br>');

//kurang dari atau sama dengan
result = 6 <= "5";//hasil false karena 6 lebih besar dari 5 dan tidak sama dengan 5 maka hasil false
document.writeln(result);

