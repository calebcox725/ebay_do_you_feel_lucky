const Seller = (function(){

  let id = 0;

  return class {
    constructor(username, feedbackScore, positiveFeedbackPercent){
      this.id = id++;
      this.username = username;
      this.feedbackScore = feedbackScore;
      this.positiveFeedbackPercent = positiveFeedbackPercent;
      store.sellers = [...store.sellers, this];
    }
  };
}());
