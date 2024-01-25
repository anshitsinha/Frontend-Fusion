function handleFormSubmit(event) {
    event.preventDefault();
}
let electIP, lpgIP, caolIP, airIP, railIP, metroIP, busIP, carIP, petrolIP, dieselIP, cngIP, mealIP, totalEmission;

function calculator(){
    console.log("Submit Clicked!!")
   
    electIP=document.getElementById("elect").value;
    console.log(electIP);
    lpgIP=document.getElementById("lpg").value;
    caolIP=document.getElementById("coal").value;
    airIP=document.getElementById("air").value;
    railIP=document.getElementById("rail").value;
    metroIP=document.getElementById("metro").value;
    busIP=document.getElementById("bus").value;
    carIP=document.getElementById("car").value;
    petrolIP=document.getElementById("petrol").value;
    dieselIP=document.getElementById("diesel").value;
    cngIP=document.getElementById("cng").value;
    mealIP=document.querySelector('input[name="food"]:checked');
    console.log("Selected Food:", mealIP.value);
    
    if(mealIP==veg){
     totalEmission=(electIP*0.00071)+(lpgIP*0.00207)+(caolIP*0.0025)+(airIP*0.000121)+(railIP*0.0078/1000)+(metroIP*0.0139/1000)+(busIP*0.054/1000)+(carIP*0.1431/1000)+(2.176)+(petrolIP*2.34/1000)+(dieselIP*2.71/1000)+(cngIP*2.07/1000);
    }
    else if(mealIP==vegan){
        totalEmission=(electIP*0.00071)+(lpgIP*0.00207)+(caolIP*0.0025)+(airIP*0.000121)+(railIP*0.0078/1000)+(metroIP*0.0139/1000)+(busIP*0.054/1000)+(carIP*0.1431/1000)+(2.019)+(petrolIP*2.34/1000)+(dieselIP*2.71/1000)+(cngIP*2.07/1000);
    }
    else{
        totalEmission=(electIP*0.00071)+(lpgIP*0.00207)+(caolIP*0.0025)+(airIP*0.000121)+(railIP*0.0078/1000)+(metroIP*0.0139/1000)+(busIP*0.054/1000)+(carIP*0.1431/1000)+(3.017)+(petrolIP*2.34/1000)+(dieselIP*2.71/1000)+(cngIP*2.07/1000);
    }

    let target=document.getElementsByClassName("opBox")[0];
    target.innerHTML="Your approximate Carbon Footprint : "+totalEmission
}
