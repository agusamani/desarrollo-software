export default class CategoryService{
    constructor() {
        this.data = [
           {
               id: 1,
               type: 'Plomero',
           }]
    };

    getAll(){
        return this.data;
    }
    
    getById(id){
        return this.data.filter(Category => Category.id === id);
    }

    getByCategory(category){
        const item = this.data.filter(Category => Category.category === category); 
        return item || null;
    }

    storeCategory(Category){
        if(Category) this.data.push(Category);
    }

}