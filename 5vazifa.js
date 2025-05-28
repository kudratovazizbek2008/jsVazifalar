let list = document.querySelector(".list")
fetch('https://fakerestapi.azurewebsites.net/api/v1/Users').then(res => res.json()).then((data) => {
    console.log(data)
    main(data)
})


function main(result) {


    result.forEach(item => {
        console.log(item)
        let li = document.createElement("li")
        li.innerHTML = `
<h3>Count : ${item.id}</h3>
<p> ${item.userName}</p>
<p>${item.password}</p>



`


        list.appendChild(li)
    })
}
