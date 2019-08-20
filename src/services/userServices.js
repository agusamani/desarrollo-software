
export default class userService{
    constructor() {
        this.data = [
            {
                id:1,
                name: 'Mark Teer Stegen',
                categoryId: 1,

            },
            {
                id:2,
                name: 'Nelson Semedo',
                categoryId: 2,
            },
            {
                id:3,
                name: 'Gerrard Pique'},]
    };

    getAll(){
        return this.data;
    }
    
    getById(id){
        const user = this.data.find(user => user.id === id);
        const categories  = [
            {
                id: 1,
                type: 'Plomero',
                nombre: 'Agustin',
            },
            {
                id: 2,
                type: 'Electricista',
                nombre: 'Alan',
            },
        ];
    debugger;
        const categoryData = categories.find(category => category.id === user.categoryId);
        const devu = {
            ...user, 
            ...categoryData,
        }; 
        debugger;
        return devu;
    }

    getByCategory(category){
        const item = this.data.filter(user => user.category === category); 
        return item || null;
    }

    storeUser(user){
        if(user) this.data.push(user);
    }

    

}