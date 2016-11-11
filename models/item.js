const Item = (function(){

let id = 0;

return class {
  constructor(){
    this.id = ++id;
    this.name = name;
    this.image = image;
    store.data.lists = [].concat(...store.data.lists, this);
  }};
}());
