function createItem(auction){
  var linkURL = auction.viewItemURL[0]
  var imgURL = auction.pictureURLLarge[0]
  var description = auction.title[0]
  var time = (new Date(auction.listingInfo[0].endTime[0]) - new Date()) / 1000
  var price = auction.sellingStatus[0].currentPrice[0]['__value__']
  var place = auction.location[0].split(",").join(", ")

  var seller = createSeller(auction)

  return new Item(linkURL, imgURL, description, time, price, place, seller)
}

function displayItem(itemId){
  var item = store.items.find(item => {
    return item.id === parseInt(itemId)
  })

  const src = $('#auction-template').html()
  const template = Handlebars.compile(src)
  const auctionThumbnail = template(item)
  $('#results').append(auctionThumbnail)

  var timeId = $(`#time${item.id}`)
  startTimer(item.time, timeId)
  displaySeller(item.seller.id)
}

function startTimer(duration, timeId) {
  var start = Date.now(), diff, hours, minutes, seconds
  function timer() {
    diff = duration - (((Date.now() - start) / 1000) | 0)

    minutes = ((diff % 3600) / 60) | 0
    seconds = (diff % 60) | 0
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    $(timeId).text(minutes + ":" + seconds + " remaining!").css('font-size', '150%')
    let halfseconds = seconds*2;

    if (seconds <= 10 && seconds%2 ==0) {
      $(timeId).parent().parent().css('background', '#AB3428')
      $(timeId).css('color', 'black')
    }

    if (seconds <= 10 && seconds%2 ==1) {
      $(timeId).parent().parent().css('background', 'white')
      $(timeId).css('color', '#AB3428')
    }

    if(seconds <= 0){
      clearInterval(interval)
      $(timeId).parent().parent().css('background', '#AB3428')
      $(timeId).text("TOO LATE!").css('color', 'black')
    }
  }
  
  var interval = setInterval(timer, 500)
}
