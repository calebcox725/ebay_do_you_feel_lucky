const Category = (function(){

  let id = 0;

  return class {
    constructor(title){
      this.id = id++;
      this.title = title;
    }};

}());
