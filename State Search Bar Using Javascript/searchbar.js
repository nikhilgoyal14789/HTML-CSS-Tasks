let state = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"];

// function checkState()
// {
    document.getElementById("textbox").addEventListener("keyup",()=>
    {
        document.getElementById("resultstate").style.display="block";
        let character=document.getElementById("textbox").value;
        if(character==="")
            document.getElementById("resultstate").style.display="none";
        let length=character.length;
        let result=state.filter(value=>value.slice(0,length).toLowerCase().includes(character.toLowerCase())==true);
        
        let result1="";
        result.forEach(value=>
        {
                result1+=value+"<br>";
        })
        if(result1==="")
            result1="No State Present with this name";
        document.getElementById("resultstate1").innerHTML=result1;
    })
   
// }
