  
  $(function() {
    $('#submit').on('click', function() {
      event.preventDefault()
      let query = $('#search').val()
      let search = EbayAdapter.search(query)

      search.then(function(auctions) {
        $('#results').empty()

        // auctions will be null if the search returned no matches
        if (auctions) {
          auctions.forEach(auction => {
            let linkURL = auction.viewItemURL[0]
            let imgURL = auction.galleryURL[0]
            let description = auction.title[0]
            let price = auction.sellingStatus[0].currentPrice[0]['__value__']
            let location = auction.location[0].split(",").join(", ")


            // TO DO: replace append argument with Handlebars HTML rendering
            $('#results').append(
              `<div class="thumbnail col-lg-4">
                <a href="${linkURL}" target="_blank">
                  <img src="${imgURL}" style="width: 300px; height: 300px;">
                </a>
                <div class="caption">
                  <a href="${linkURL}" target="_blank">
                    <p>${description}</p>
                  </a>
                    <b>$${price}</b> from ${location}
                </div>
              </div>`
            )
          })
        } else {
          $('#results').append('<hr><h2>No matches found!</h2>')
        }
      })
    })
  })