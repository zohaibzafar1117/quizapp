
function next1(){
    document.getElementById("q1").className = "noques"
    document.getElementById("q2").className = "ques"}
function next2(){
    document.getElementById("q2").className = "noques"
    document.getElementById("q3").className = "ques"}
function next3(){
    document.getElementById("q3").className = "noques"
    document.getElementById("q4").className = "ques"}
function next4(){
    document.getElementById("q4").className = "noques"
    document.getElementById("q5").className = "ques"}
function result(){
    var score = 0
    var d 
    var a1 = document.getElementById("q1-1")
    var a2 = document.getElementById("q2-1")
    var a3 = document.getElementById("q3-1")
    var a4 = document.getElementById("q4-1")
    var a5 = document.getElementById("q5-1")
    if(a1.checked == true){ score++; }
    if(a2.checked == true){ score++; }
    if(a3.checked == true){ score++; }
    if(a4.checked == true){ score++; }
    if(a5.checked == true){ score++; }
    d = score * 10
    var p = d/50
    var per = p*100
    var c = `  <h1>RESULT</h1> <br>
    <h3>Your score is `
    var f = ` out of 50</h3> <br>
    <h3> Percentage : ` + per + ` % </h3>`
    var n = c + d + f 
   
    document.getElementById("result").innerHTML =  n
    document.getElementById("q5").className = "noques"
    document.getElementById("result").className = "ques"
}