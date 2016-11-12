class EbayAdapter {
  static search(query) {
    return new Promise(function(resolve) {
      var timeLimit = 60000 // milliseconds
      var maxPrice = 1.00

      var deadline = new Date(Date.now() + timeLimit).toJSON()

      var apiURL = `https://svcs.ebay.com/services/search/FindingService/v1`
      var queryData = {
        'OPERATION-NAME': 'findItemsAdvanced',
        'SERVICE-VERSION': '1.0.0',
        'SECURITY-APPNAME': 'CalebCox-Test-PRD-745f6444c-e2e81b28',
        'RESPONSE-DATA-FORMAT': 'JSON',
        'REST-PAYLOAD': 'true',
        'keywords': query,
        'paginationInput.entriesPerPage': '3',
        'sortOrder': 'BestMatch',
        'itemFilter(0).name': 'EndTimeTo',  
        'itemFilter(0).value': deadline,
        'itemFilter(1).name': 'ListingType',
        'itemFilter(1).value': 'Auction',
        'itemFilter(2).name': 'MaxPrice',
        'itemFilter(2).value': maxPrice
      }

      $.get(apiURL, queryData, null, 'jsonp')
        .done(function(data) {
          let searchResults = data.findItemsAdvancedResponse[0].searchResult[0]
          let count = parseInt(searchResults['@count'])

          if (count > 0) { 
            var results = searchResults.item
          } else {
            var results = null
          }

          resolve(results)
        })
    })
  }
}