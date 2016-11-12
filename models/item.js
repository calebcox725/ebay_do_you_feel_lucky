const Item = (function(){

  let id = 0;

  return class {
    constructor(linkURL, imgURL, description, price, place){
      this.id = ++id;
      this.linkURL = linkURL;
      this.imgURL = imgURL;
      this.description = description;
      this.price = price;
      this.place = place;
      store.data.list = [...store.data.list, this];
    }};

}());
