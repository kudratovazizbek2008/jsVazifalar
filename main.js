let list = document.querySelector(".list")
fetch('https://api.spaceflightnewsapi.net/v4/articles/').then(res => res.json()).then((data) => {
    console.log(data)
    main(data.results)
})


function main(result) {


    result.forEach(item => {
        console.log(item)
        let li = document.createElement("li")
        li.innerHTML = `
<a href="${item.url}" target="_blank">
<img src="${item.image_url}" alt=""> 
<p>Count : ${item.id}</p>
<p>Summary : ${item.summary}</p>
<span>Title : ${item.title}</span>
</a>
`


        list.appendChild(li)
    })
}

