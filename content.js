let api = "https://kontests.net/api/v1/all"
let response = fetch(api)
response.then((v) => {
  return v.json()
}).then((contests) => {
  console.log(contests)
  ihtml = ""
  for (item in contests) {
    console.log(contests[item])
    ihtml += `
     <div class="card" >
                <img src="https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=400" class="card-img-top" alt=not found">
            <div class="card-body">
                  <h5 class="card-title">${contests[item].name}</h5>
                    <p class="card-text">Status is ${contests[item].status}</p>
                       <p class="card-text">In 24 hr?  ${contests[item].in_24_hours}</p>
                 <p class="card-text">${contests[item].start_time}</p>
                   <p class="card-text">${contests[item].end_time}</p>
                    <a href="${contests[item].url}" class="btn btn-primary">   <p class="card-text"> Visit</p></a>
            </div>
      </div>
    `
  }
  cardContainer.innerHTML = ihtml
})

