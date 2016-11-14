function search() {
  let query = $('#search').val()
  let search = EbayAdapter.search(query)
  search.then(function(auctions) {
    $('#results').empty()
    if (auctions) {
      var auction = randomize(auctions)
      var secondsRemaining = (new Date(auction.listingInfo[0].endTime[0]) - new Date()) / 1000
      var item = createItem(auction)
      var seller = createSeller(auction);
      // TO DO: replace append argument with Handlebars HTML rendering
      $('#results').append(
        `<a href="${item.linkURL}" target="_blank">
          <div class="thumbnail col-sm-4">
            <img src="${item.imgURL}" style="max-width: 100%; min-height: 250px;">
            <div class="caption">
              <p>${item.description}</p>
              <b>$${item.price}</b> from ${item.place}
            </div>
          </div>
          <div id='time'></div>
          <form>
            <button id="seller" data-seller=${seller.username} onclick="displaySeller(this)" class="btn btn-info">Show Seller Info</button>
          </form>
          <div id='seller'></div>
        </a>`
      )
      var display = $('#time')
      startTimer(secondsRemaining, display)
    } else {
      $('#results').append('<hr><h2>No matches found!</h2>')
    }
  })



  function startTimer(duration, display) {

      var start = Date.now(), diff, hours, minutes, seconds

      function timer() {
          // get the number of seconds that have elapsed since
          // startTimer() was called
          diff = duration - (((Date.now() - start) / 1000) | 0)
          // does the same job as parseInt truncates the float
          hours = (diff / (3600)) | 0
          minutes = ((diff % 3600) / 60) | 0
          seconds = (diff % 60) | 0
          hours = hours < 10 ? "0" + hours : hours
          minutes = minutes < 10 ? "0" + minutes : minutes
          seconds = seconds < 10 ? "0" + seconds : seconds
          $(display).text(hours + ":" + minutes + ":" + seconds + ")")
          if(seconds <= 0){
            clearInterval(interval)

          }
      }
      // we don't want to wait a full second before the timer starts

      var interval = setInterval(timer, 500)
  }

//   var countdown;
// var countdown_number;
//
// var audio = new Audio('audio/beep.mp3');
//
//
// function countdown_init() {
//     countdown_number = 11;
//     countdown_trigger();
// }
//
// function countdown_trigger() {
//     if(countdown_number > 0) {
//         countdown_number--;
//         document.getElementById('countdown_text').innerHTML = countdown_number;
//         if(countdown_number > 0) {
//             countdown = setTimeout('countdown_trigger()', 1000);
//
// if(countdown_number === 0) { audio.play(); }
//
//         }
//
//     }
// }


  function createItem(auction){
    var linkURL = auction.viewItemURL[0]
    var imgURL = auction.galleryURL[0]
    var description = auction.title[0]
    var price = auction.sellingStatus[0].currentPrice[0]['__value__']
    var place = auction.location[0].split(",").join(", ")
    return new Item(linkURL, imgURL, description, price, place)
  }

  function randomize(auction){
    var randomAuction = auction[Math.floor(Math.random()*auction.length)]
    return randomAuction
  }

  function createSeller(auction){
    var username = auction.sellerInfo[0].sellerUserName[0];
    var percent = auction.sellerInfo[0].positiveFeedbackPercent[0];
    var topRated = auction.sellerInfo[0].topRatedSeller[0];
    return new Seller(username, percent, topRated);

  }

  function displaySeller(event, data){
    var display = $('#seller');
    $('#seller').append(
      `<p>${data.seller}
      </p>`
    )
  }

  //   $.get(`https://svcs.ebay.com/services/search/FindingService/v1`, Data, null, 'jsonp').done(function(data) {
  //     let auctions = data.findItemsAdvancedResponse[0].searchResult[0].item
  //     // auctions.forEach(auction => {
  //     //   createItem(auction)
  //     //   $('.slick-div').append(`<p><img src="${auction.galleryURL[0]}"><a target="_blank" href="${auction.viewItemURL[0]}">${auction.title[0]}</a></p>`)
  //     // })
  //     // $('.slick-div').slick()
  //   })
  // }

}
