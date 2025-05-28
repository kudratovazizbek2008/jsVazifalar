let list = document.querySelector(".list")
fetch('https://fakerestapi.azurewebsites.net/api/v1/Books').then(res => res.json()).then((data) => {
    console.log(data)
    main(data)
})


function main(result) {


    result.forEach(item => {
        console.log(item)
        let li = document.createElement("li")
        li.innerHTML = `
<a href="4vazifa.html">
<h3>Count : ${item.id}</h3>
<p> ${item.title}</p>
<p>${item.description}</p>
<p>${item.pageCount}</p>
<p>${item.excerpt}</p>
<img src="${item.publishDate}" alt="">
</a>


`


        list.appendChild(li)
    })
}
