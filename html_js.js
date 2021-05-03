//Tia Deloach Benson
//2/20/20


//Question 1: Create an array named inputtable
var inputtable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Question 1: ", inputtable);


//Initialize a few variables for future problems
var x = 0, y = 0, z = 0;

//Question 2a: create an array named fiveTable that are multiples of 5
var fiveTable = inputtable.map(function(x) //Multiples of 5 are created by using map on inputtable
{
    return x * 5; //multiply each element by 5
})
console.log("Question 2a: ", fiveTable);


//Question 2b: create an array named thirteenTable that are multiples of 13 
var thirteenTable = inputtable.map(function(y) //Multiples of 13 are created by using map on inputtable
{
    return y * 13; //Multiply each element by 13
})
console.log("Question 2b: ", thirteenTable);


//Question 2c: create an array named squaresTable that are a set of squares from inputtable
var squaresTable = inputtable.map(function(z) //Squares are created by using map on inputtable
{
    return z * z; //square each element
})
console.log("Question 2c: ", squaresTable);


//Question 3: get odd multiples of 5 between 1 and 100
var fives = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
var oddFives = fives.filter(fives => fives%2 != 0); //numbers are odd if there is a remainder when dividing by 2
console.log("Question 3: ", oddFives);


var add = 0, now = 0; //initialize variables for question 4

//Question 4: Get sum of even multiples of 7
var sevens = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98];
var evenSevens = sevens.filter(sevens => sevens%2 == 0); //numbers are even if there is no remainder when dividing by 2

var addEvenSevens = evenSevens.reduce(function(add, now) //add all even numbers together by using the reduce function
{
    return add + now;
}, 0) //must set incremental, current, and initial values for reduce function
console.log("Question 4: ", addEvenSevens);


//Question 5: Use currying to rewrite volume function
//Volume function will take one parameter at a time
function cylinder_volume(r) //Take radius parameter first, 
{ 
    return function(h) //then take height parameter
    {
        return 3.14*r*r*h;
    }
}

var volume = cylinder_volume(5)(10); //radius = 5, height = 10
console.log("Question 5: ", volume);


//Question 6: Use closure to wrap HTML tags
function makeTag(beginTag, endTag) //create makeTag function that uses closure
{
    return function(text)
    {
        return beginTag+text+endTag;
    }
}

//create initial tags
var table = ["<table>", "</table>"]; 
var th = ["<th>", "</th>"];
var tr = ["<tr>", "</tr>"];
var td = ["<td>", "</td>"];

//Row 1
var tableHeader = makeTag(th[0], th[1]); //create CSE majors header tag
var headerComplete = tableHeader("CSE Majors");

var tableHeader2 = makeTag(th[0], th[1]); //create Fine Arts majors header tag
var headerComplete2 = tableHeader2("Fine Arts Majors");

var header = headerComplete + headerComplete2; //combine both headers to create the first row

var row1 = makeTag(tr[0], tr[1]); //add row tags to headers to complete row 1
var row1Complete = row1(header);


//Row 2
var tableData = makeTag(td[0], td[1]); //create Computer Science data tag
var dataComplete = tableData("Computer Science");

var tableData2 = makeTag(td[0], td[1]); //create Music data tag
var dataComplete2 = tableData2("Music");

var data1 = dataComplete + dataComplete2; //combine both data elements to create the second row

var row2 = makeTag(tr[0], tr[1]); //add row tags to data to complete row 2
var row2Complete = row2(data1);


//Row 3
var tableData3 = makeTag(td[0], td[1]); //create Software Engineering data tag
var dataComplete3 = tableData3("Software Engineering");

var tableData4 = makeTag(td[0], td[1]); //create Art data tag
var dataComplete4 = tableData4("Art");

var data2 = dataComplete3 + dataComplete4; //combine both data elements to create the third row

var row3 = makeTag(tr[0], tr[1]); //add row tags to data to complete row 3
var row3Complete = row3(data2);


//Row 4
var tableData5 = makeTag(td[0], td[1]); //create Computer Engineering data tag
var dataComplete5 = tableData5("Computer Engineering");

var tableData6 = makeTag(td[0], td[1]); //create Theatre data tag
var dataComplete6 = tableData6("Theatre");

var data3 = dataComplete5 + dataComplete6; //combine both data elements to create the fourth row

var row4 = makeTag(tr[0], tr[1]); //add row tags to data to complete row 4
var row4Complete = row4(data3);

var everything = row1Complete + row2Complete + row3Complete + row4Complete; //combine everything to create an HTML format

var tableTag = makeTag(table[0], table[1]); //finally, add table tags to complete table
var tableComplete = tableTag(everything);

//Output HTML table graphically and in HTML tag format
console.log(tableComplete); 
document.write(tableComplete);








