  
  $(function() {
    $('#submit').on('click', function() {
      event.preventDefault()
      let query = $('#search').val()
      let search = EbayAdapter.search(query)

      search.then(function(auctions) {
        auctions.forEach(auction => {
          $('body').append(`<p><img src="${auction.galleryURL[0]}"><a href="${auction.viewItemURL[0]}">${auction.title[0]}</a></p>`)
        })
      })


    })
  })