let counter=0;
const elem = document.getElementById('cat');
elem.addEventListener('click', function(){
  catClicked();
}, false);

function catClicked (){
  const elementClicked = event.target;
  updateCounter();
}

function updateCounter(){
    counter++;
    document.getElementById("counter-clicks").innerHTML = counter + " Clicks";
}