var text = '';
function findMeal (){
    text = document.getElementById('meal-search').value;
    connectMeal(text)
}


function connectMeal (text) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
    .then(res=> res.json() )
    .then(data=> loadMeal(data));
   
}

connectMeal();

function loadMeal (data){

  console.table(data.meals[0]);

  var container = document.getElementById('main-container');

     var imgLink = data.meals[0].strMealThumb;
     var cat = data.meals[0].strCategory;
     var title = data.meals[0].strMeal;


     container.innerHTML = `<p><b> ${title} </b></p>
                         <img src="${imgLink}" <br/>
                         <p> Category: ${cat} </p>
                         <button onclick="showAll()"> Show All </button>`;
                         

 function showAll (text) {
     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
     .then(res=> res.json() )
     .then(data=> loadMeal(data));
 }


function showAll() {
    var newContainer = document.getElementById("new-container");

    newContainer.innerHTML = `<p><b> ${title} </b></p>
                         <img src="${imgLink}" <br/>
                         <p> Category: ${cat} </p>`;
}


    container.appendChild(newDiv);

}