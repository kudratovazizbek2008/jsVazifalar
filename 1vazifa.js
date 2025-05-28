let list = document.querySelector(".list")
fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors').then(res => res.json()).then((data) => {
    console.log(data)
    main(data)
})


function main(result) {


    result.forEach(item => {
        console.log(item)
        let li = document.createElement("li")
        li.innerHTML = `
<a href="2vazifa.html">
<h3>Count : ${item.id}</h3>
<p> ${item.idBook}</p>
<p>${item.firstName}</p>
<p>${item.lastName}</p>
</a>


`


        list.appendChild(li)
    })
}

