
import { userDb } from '../utils/mockDb';

export default class userService{
    constructor() {
        this.data = userDb
    };

    getAll(){
        return userDb;
    }
    
    getById(id){
        const user = userDb.find(user => user.id === id);
        return user;
    }

    getByCategory(category){
        const item = this.data.filter(user => user.category === category); 
        return item || null;
        console.log(item);
    }

    storeUser(user){
        if(user) this.data.push(user);
    }

    

}