let submit = document.querySelector('#submit')


submit.addEventListener("click", (e) => {
    e.preventDefault()


    let title = document.querySelector('#postingTitle').value
    let desc = document.querySelector('#postingDescription').value
    let plat = document.getElementById("platforms");
    let full = document.querySelector('#wholePage')
    console.log(plat)
    let strUser = plat.options[plat.selectedIndex].value;
    console.log(strUser)
    let posting = {
        title: title,
        desc: desc,
        plat: strUser,
    }
    console.log(posting)
    firebase.database().ref('/').push(posting)


    full.innerHTML = "<p id='submitted'>Your code has been sucsessfully submited</p>"
    })
