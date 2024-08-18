// // 01
var a = +prompt("enter any number");
document.write("<b>Result</b> <br> The value of a is :",a,"<br>....................................<br>");
document.write("The value of ++a  is ",++a,"<br>now the value of a is : ",a,"<br><br><br>");
document.write("The value of a++  is ",a++,"<br>now the value of a is : ",a,"<br><br><br>");
document.write("The value of --a  is ",--a,"<br>now the value of a is : ",a,"<br><br><br>");
document.write("The value of a--  is ",a--,"<br>now the value of a is : ",a,"<br><br><br>");

// // 02

var A = 2; 
var B = 1;
var result = --A - --B + ++B + B--;
document.write("A is : <b>",A,"</b></br>");
document.write("B is : <b>",B,"</b></br>");
document.write("the result of --A is ",--A,"</b></br>" )
document.write("the result of --A - --B is ",--A - --B,"</b></br>" )
document.write("the result of --A - --B + ++B is ",--A - --B + ++B,"</b></br>" )
document.write("the final result of --A - --B + ++B + B-- is <b>",result,"</b></br></br></br>");


// //03

var user_name = prompt("enter your name");
alert("hello "  , user_name , " nice to meet you");

// // 04

var table =prompt("Enter a table number you want to print :" ,5);
var increment =1;
document.write("<b> Table of ",table,"</b></br>"
    ,table," x " , increment, " = ",table*increment ,"<br>"
    ,table," x " , ++increment , " = ",table*increment,"<br>"
    ,table," x " , ++increment , " = ",table*increment,"<br>"
    ,table," x " , ++increment , " = ",table*increment,"<br>"
    ,table," x " , ++increment , " = ",table*increment,"<br>"
    ,table," x " , ++increment , " = ",table*increment,"<br>"
    ,table," x " , ++increment , " = ",table*increment,"<br>"
    ,table," x " , ++increment , " = ",table*increment,"<br>"
    ,table," x " , ++increment , " = ",table*increment,"<br>"
    ,table," x " , ++increment , " = ",table*increment,"<br> <br><br>"
);

// // 05

var subject_one = prompt("Enter your first subject :");
var subject_two = prompt("Enter your second subject :");
var subject_three = prompt("Enter your third subject :");
var first_marks = +prompt("Enter your marks of "+ subject_one);
var second_marks = +prompt("Enter your marks of "+ subject_two);
var third_marks = +prompt("Enter your marks of "+ subject_three);
var total_marks = 100;
var all_subject_total = 100*3;
var obtained_marks =first_marks+second_marks+third_marks;
var percentageOfFirst = first_marks/all_subject_total*100;
var percentageOfSecond = second_marks/all_subject_total*100;
var percentageOfthird = third_marks/all_subject_total*100;
var percentage = obtained_marks/all_subject_total*100;
document.write("<table border = '1px'>"+
    "<th>"+"Total Marks"+"</th>"+
    "<th>"+"obtained marks"+"</th>"+
    "<th>"+"percentage"+"</th>",
   
    "<tr>"+
    "<td>",subject_one,"</td>"+
    "<td>",first_marks,"</td>"+
    "<td>",percentageOfFirst,"%","</td>"+
    "</tr>"+
    "<tr>"+
    "<td>",subject_two,"</td>"+
    "<td>",second_marks,"</td>"+
    "<td>",percentageOfSecond,"%","</td>"+
  

    "</tr>"+
    "<tr>"+
    "<td>",subject_three,"</td>"+
    "<td>",third_marks,"</td>"+
    "<td>",percentageOfthird,"%","</td>"+
    
    "</tr>"+
    
    "</tr>"+
    "<tr>"+
  
    "<td>","</td>"+
    "<td><b>",obtained_marks,"</b></td>"+
    "<td><b>",percentage,"%","</b></td>"+
    "</tr>"+

   
"</table>");