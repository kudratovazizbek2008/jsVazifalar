let list = document.querySelector(".list")
fetch('https://fakerestapi.azurewebsites.net/api/v1/Activities').then(res => res.json()).then((data) => {
    console.log(data)
    main(data)
})


function main(result) {


    result.forEach(item => {
        console.log(item)
        let li = document.createElement("li")
        li.innerHTML = `
<a href="3vazifa.html">
<h3>Count : ${item.id}</h3>
<p> ${item.title}</p>
<img src="${item.dueDate}" alt="">
<p>${item.completed}</p>


</a>

`


        list.appendChild(li)
    })
}
