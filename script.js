console.log("works")
let search = document.querySelector('.btn')
search.addEventListener('click', e=>{
    console.log('Searching consoles')
    e.preventDefault()
    let input = document.querySelector('.form-control').value
    console.log(input)
    
    searchPostings(input)
})

function getPostings() {
    firebase.database().ref('/').on('value', (snapshot) => {
        let data = snapshot.val()
        let displayPostings = document.querySelector('#postings')
        for (key in data) {
            postings.innerHTML += `
            <div class="card" style="width: 100%;">
              <div class="card-body">
                <h5 class="card-title">${data[key].title}</h5>
                <p class="card-text">${data[key].desc}</p
                <p class="card-text">${data[key].plat}</p>

              </div>
            </div>`

        }
    })
}

function searchPostings(term) {
    let displayPostings = document.querySelector('#postings')
    displayPostings.innerHTML = ''
    firebase.database().ref('/').on('value', (snapshot) => {
        let data = snapshot.val()
        let displayPostings = document.querySelector('#postings')
        for (key in data) {
            if(term == data[key].plat){
            postings.innerHTML += `
            <div class="card" style="width: 100%;">
              <div class="card-body">
                <h5 class="card-title">${data[key].title}</h5>
                <p class="card-text">${data[key].desc}</p
                <p class="card-text">${data[key].plat}</p>

              </div>
            </div>`
            }
        }
    })
}


// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');

//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

window.onload = getPostings
