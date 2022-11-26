document.getElementById('formData').addEventListener('submit', retrieveName)

function retrieveName (e) {
    e.preventDefault()

    let name = document.getElementById('name').value

    fetch(`https://app.pushkar.tech/services/${name}`)
    .then((res)=> res.json())
    .then((data)=> {
        document.getElementById('output').innerHTML = `<li><b>Name</b> : ${data.name} <b>Category</b> : ${data.category} <br><br> <b>Description</b> : ${data.description}</li>`
    })
}

document.getElementById('postData').addEventListener('submit', postData)

function postData (e) {
    e.preventDefault()

    let name = document.getElementById('postName').value
    let category = document.getElementById('postCategory').value
    let description = document.getElementById('postDescription').value

    fetch('https://app.pushkar.tech/postData', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            'name' : name,
            'category' : category,
            'description' : description
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
}