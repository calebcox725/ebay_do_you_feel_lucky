  
  $(function() {
    var query = 'card'
    var timeLimit = 60000 //milliseconds
    var maxPrice = 1

    var deadline = new Date(Date.now() + timeLimit).toJSON()
    var queryData = {
      'OPERATION-NAME': 'findItemsAdvanced',
      'SERVICE-VERSION': '1.0.0',
      'SECURITY-APPNAME': 'CalebCox-Test-PRD-745f6444c-e2e81b28',
      'RESPONSE-DATA-FORMAT': 'JSON',
      'REST-PAYLOAD': 'true',
      'keywords': query,
      'paginationInput.entriesPerPage': '10',
      'itemFilter(0).name': 'EndTimeTo',  
      'itemFilter(0).value': deadline,
      'itemFilter(1).name': 'ListingType',
      'itemFilter(1).value': 'Auction',
      'itemFilter(2).name': 'MaxPrice',
      'itemFilter(2).value': maxPrice
    }

    $.get(`https://svcs.ebay.com/services/search/FindingService/v1`, queryData, null, 'jsonp').done(function(data) {
      var auctions = data.findItemsAdvancedResponse[0].searchResult[0].item
      auctions.forEach(auction => {
        $('body').append(`<a href="${auction.viewItemURL[0]}"></a>`)
      })

    })

  })