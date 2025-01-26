const number_1 = document.getElementById("number_1");
const number_2 = document.getElementById("number_2");

function GENERATOR()
{
    let num_1 = Math.random()*100;
    num_1 = Math.ceil(num_1);
    let num_2 =Math.random()*100;
    num_2 = Math.ceil(num_2);
    console.log(num_1,num_2);
    number_1.textContent = num_1;
    number_2.textContent = num_2;
    return num_1+num_2;
}
let answer = GENERATOR();
document.getElementById("restartButton").onclick = function(){
    document.getElementById("result").textContent = "";
    document.getElementById("ansInput").value = "";
    answer = GENERATOR();
    window.answer = answer;
}
function CHECK()
{
    console.log("CHECKING");
    if(answer == document.getElementById("ansInput").value)
    {
        document.getElementById("result").textContent = "CONGRATULATION YOU WON ";
        document.getElementById("result").style.backgroundColor = "green";
    }
    else{
        document.getElementById("result").textContent = "PLEASE CHECK ONCE";
        document.getElementById("result").style.backgroundColor = "red" ;
    }
}