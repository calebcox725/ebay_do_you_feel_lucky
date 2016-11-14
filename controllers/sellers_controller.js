function createSeller(auction){
  var username = auction.sellerInfo[0].sellerUserName[0];
  var feedbackScore = auction.sellerInfo[0].feedbackScore[0];
  var positiveFeedbackPercent = auction.sellerInfo[0].positiveFeedbackPercent[0];
  return new Seller(username, feedbackScore, positiveFeedbackPercent);
}

function displaySeller(sellerId){
  var seller = store.sellers.find(seller => {
    return seller.id === parseInt(sellerId)
  })

  const src = $('#seller-template').html()
  const template = Handlebars.compile(src)
  const sellerInfo = template(seller)
  $(`#seller${sellerId}`).append(sellerInfo)
}