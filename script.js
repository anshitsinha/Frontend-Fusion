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


var p1 = document.querySelector(".p1");
var n1 = document.querySelector(".n1");
var p2 = document.querySelector(".p2");
var n2 = document.querySelector(".n2");
var p10 = document.querySelector(".p10");
var n10 = document.querySelector(".n10");
var p3 = document.querySelector(".p3");
var n3 = document.querySelector(".n3");
var p4 = document.querySelector(".p4");
var n4 = document.querySelector(".n4");
var p5 = document.querySelector(".p5");
var n5 = document.querySelector(".n5");

var electricity = document.querySelector(".electricity");
var houseFuel = document.querySelector(".houseFuel");
var fasttravel = document.querySelector(".fasttravel");
var slowtravel = document.querySelector(".slowtravel");

var travelFuel = document.querySelector(".travelFuel");
var meal = document.querySelector(".meal");
var submit = document.querySelector(".submit");

// next buttons

n1.addEventListener('click', function(event) {
    electricity.style.display = "none";
    houseFuel.style.display = "block";
});

n2.addEventListener('click', function(event) {
    houseFuel.style.display = "none";
    fasttravel.style.display = "block";
});
n10.addEventListener('click', function(event){
    fasttravel.style.display = "none";
    slowtravel.style.display = "block";  

});

n3.addEventListener('click', function(event) {
    slowtravel.style.display = "none";
    travelFuel.style.display = "block";
});

n4.addEventListener('click', function(event) {
    travelFuel.style.display = "none";
    meal.style.display = "block";
});

n5.addEventListener('click', function(event) {
    meal.style.display = "none";
    submit.style.display = "block";
});

// previous buttons

// p1.addEventListener('click', function(event) {
//     electricity.style.display = "none";
//     houseFuel.style.display = "block";
// });

p2.addEventListener('click', function(event) {
    houseFuel.style.display = "none";
    electricity.style.display = "block";
});
p10.addEventListener('click', function(event) {
    fasttravel.style.display = "none";
    houseFuel.style.display = "block";
});

p3.addEventListener('click', function(event) {
    slowtravel.style.display = "none";
    fasttravel.style.display = "block";
});

p4.addEventListener('click', function(event) {
    travelFuel.style.display = "none";
    slowtravel.style.display = "block";
});

p5.addEventListener('click', function(event) {
    meal.style.display = "none";
    travelFuel.style.display = "block";
});




