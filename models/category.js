class Category {
  constructor(name, id){
      this.name = name
      this.id = id
      $('#category').append(`<option value="${this.id}">${this.name}</option>`)
      store.categories = [...store.categories, this];
    }
}