const Bid = (function(){

  let id = 0;

  return class {
    constructor(title){
      this.id = id++;
      this.title = title;
      store.data.list = [...store.data.list, this];
    }};

}());
