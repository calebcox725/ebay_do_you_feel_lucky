const Bid = (function(){

let id = 0;

return class {
  constructor(title){
    this.id = ++id;
    this.title = title;
    store.data.lists = [].concat(...store.data.lists, this);

  }};
}());
