
export default class fakeDb{
    constructor() {
        this.users = [
            {
                id:1,
                name: 'Mark Teer Stegen',
                category: 'Plomero',
            },
            {
                id:2,
                name: 'Nelson Semedo'},
            {
                id:3,
                name: 'Gerrard Pique'},]
    };

    getAll(){
        return this.users;
    }
    
    getById(id){
        return this.users.filter(user => user.id === id);
    }

    getByCategory(category){
        const item = this.users.filter(user => user.category === category); 
        return item || null;
    }

    storeUser(user){
        if(user) this.users.push(user);
    }

}