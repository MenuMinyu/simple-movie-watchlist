//Array for added movies
let movie = [];

//The code for listening to the button click to commence below functions
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("addButton");
    event.preventDefault();
    button.addEventListener("click", fetchData);
    button.addEventListener("click", delayedRenderTable);
});

//the api is slow to get movies so this function renders the table a few seconds later incase it doesn't render instantly. 
function delayedRenderTable(){
  setTimeout( renderTable, 200);
  setTimeout(renderTable, 600);
}
//fetches data from the movie api
function fetchData(){
    const title = document.getElementById("title").value;
    console.log(title)
    const response = fetch(`https://www.omdbapi.com/?t=${title}&apikey=d10ed52b`)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        console.log(jsonData);
        movie.push(jsonData);
        console.log(movie)

       
    }
    
    )
}

//renders table of movies
function renderTable() {
  let table = 
  `
    <table>
      <tr>
        <th>Title</th>
        <th>Year</th>
        <th>Description</th>
        <th>Remove</th>
      </tr>
  `;


  movie.forEach((movie, i) => {
    table += 
    `
      <tr>
        <td>${movie.Title}</td> 
        <td>${movie.Year}</td>
        <td>${movie.Plot}</td>
        <td><button onclick="removeMovie(${i})">Remove</button></td>
      </tr>
    `;
  });

  table += `</table>`;
  
  document.getElementById("tableContainer").innerHTML = table;
}

function removeMovie(index) {
  movie.splice(index, 1);
  renderTable();
}

renderTable();


//JQuery related code

$(function() {

  $("#movieForm").validate({
    rules: {
      title: {
        required: true,
        maxlength: 70
      }

    },
    
    messages: {
        title: {
                required: "You must put in a title",
                maxlength: "You exceeded the limit"
            },
    },

    submitHandler: function(form) {
      form.submit();
    }
  })
})