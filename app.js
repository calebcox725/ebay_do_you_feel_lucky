$(function() {
  $('#submit').on('click', function() {
    event.preventDefault()
    search()
  })
})

$('#history').on('click', function() {
  event.preventDefault()

  let history = store.data.list
  $('#results').empty()
  
  history.forEach(search => {
    $('#results').append(`<p><img src="${search.imgURL}"><a href="${search.linkURL}">${search.description}</a></p>`)
  })
})