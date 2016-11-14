const Seller = (function(){

  let id = 0;

  return class {
    constructor(username, percent, topRated){
      this.id = id++;
      this.username = username;
      this.positiveFeedbackPercent = percent;
      this.topRatedSeller = topRated;
      store.data.list = [...store.data.list, this];
    }};

}());
