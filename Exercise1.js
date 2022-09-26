/*Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM
 has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.*/

window.onload=function(){
    alert("page is loaded")
}

//Replace the text "Change me" with "Hello World!".
window.onload=function(){
let ChangeName=document.getElementById("change_heading");
ChangeName.innerText="Hello World!"
}

/*When a user hovers over one of the colored boxes change the text to display the color that is being
 hovered over.*/

 window.onload = function(){
    var el = document.getElementById("change_heading");
    el.innerText = "Hello world!";

    var section = document.querySelector("section");
    section.addEventListener("mouseover", function(event){
        var selectedColor = document.querySelector('.selected');
        selectedColor.innerText = event.target.className;
    })
}

//Create a new div element.
/*Give your new div a class of purple and style it so that it has a background color of purple.

Append your new div to the page to the section tag.*/

window.onload=function(){
    var el=document.getElementById("change_heading");
    el.innerText="Hello World!";
    var section=document.querySelector("section");
    section.addEventListener("mouseover",function(event){
        var selectedColor=document.querySelector(".selected");
        selectedColor.innerText=event.target.className
    })

var newDiv=document.createElement("div");
newDiv.className="purple";
section.appendChild(newDiv)
}

//Car game
window.onload = function(){
    var el = document.getElementById("change_heading");
    el.innerText = "Hello world!";

    var section = document.querySelector("section")
    section.addEventListener("mouseover", function(event){})

    var newDiv = document.createElement("div");
    newDiv.className = "purple";
    section.appendChild(newDiv);

    var button = document.querySelector("button");
    var car1 = document.querySelector('.car1');
    var car2 = document.querySelector('.car2');
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;

    function reset(car1, car2){
        clearTimeout(car1.timer);
        clearTimeout(car2.timer);
        car1.style.marginLeft = 0;
        car2.style.marginLeft = 0;
        button.disabled = false;
    }

    button.addEventListener("click", function(event){
        button.disabled = true;
        car1.timer = setInterval(function(){
            car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*60 + 'px';
            if(parseInt(car1.style.marginLeft) > window.innerWidth){
                alert("Car 1 wins!");
                reset(car1,car2);
            }
        },60)
        car2.timer = setInterval(function(){
            car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*60 + 'px';
            if(parseInt(car2.style.marginLeft) > window.innerWidth){
                alert("Car 2 wins!");
                reset(car1,car2);
            }
        },60)


    })
}