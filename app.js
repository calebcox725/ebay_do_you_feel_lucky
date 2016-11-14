$(function() {
    $('#submit').on('click', function() {
      event.preventDefault()
      search()
    })
})

$('#history').on('click', function() {
    let history = store.data.list
    $('#results').empty()
    history.forEach(search => {
      $('#results').append(`<p><img src="${search.imgURL}"><a href="${search.linkURL}">${search.description}</a></p>`)
    })
})

// $('#seller').on('click', function() {
//     let seller = store.data.list
//     $('#results').empty()
//     history.forEach(search => {
//       $('#results').append(`<p><img src="${search.imgURL}"><a href="${search.linkURL}">${search.description}</a></p>`)
//     })
// })
