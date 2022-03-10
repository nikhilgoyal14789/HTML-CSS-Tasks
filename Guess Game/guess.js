let random_no=Math.floor((Math.random()*60) + 1);

function myFunction()
{
    document.getElementById("result").style.display="block";
    let entered_no=document.getElementById("number").value;
    let result="";
    if(entered_no<random_no)
        result="TOO LOW!!!!";
    else if(entered_no>random_no)
        result="TOO HIGH!!!!";
    else
        result="MATCHED (SUCCESS)";

    document.getElementById("result").innerHTML=result;
}

function myFunctionReset()
{
    document.getElementById("number").value="";
    document.getElementById("result").style.display="none";
}