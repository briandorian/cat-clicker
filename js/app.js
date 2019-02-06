let first_counter=0;
let second_counter=0;
const first_cat = document.getElementById('cat');
const second_cat = document.getElementById('second_cat');
first_cat.addEventListener('click', function(){
  catClicked();
}, false);
second_cat.addEventListener('click', function(){
  catClicked();
}, false);

function catClicked (){
  updateCounter();
}

function updateCounter(){
    if (event.target.id == "cat"){
      first_counter++;
      document.getElementById("counter-clicks_kitty").innerHTML = first_counter + " Clicks";
    }
    else if (event.target.id == "second_cat"){
      second_counter++;
      document.getElementById("second_counter-clicks_missy").innerHTML = second_counter + " Clicks";
    }
  }