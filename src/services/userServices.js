
import { userDb } from '../utils/mockDb';

export default class userService{
    constructor() {
        this.data = userDb
    };

    getAll(){
        return userDb;
    }
    
    getById(category){
        const user = userDb.filter( user => user.category === category);
        return user;
    }

    getByCategory(category){
        const item = this.data.filter(user => user.category === category); 
        return item || null;
    }

    storeUser(user){
        if(user) this.data.push(user);
    }

    

}