const Seller = (function(){

  let id = 0;

  return class {
    constructor(username, positiveFeedbackPercent, topRatedSeller){
      this.id = id++;
      this.username = username;
      this.positiveFeedbackPercent = positiveFeedbackPercent;
      this.topRatedSeller = topRatedSeller;
      store.sellers = [...store.sellers, this];
    }};

}());
