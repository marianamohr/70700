import userModel from "./models/User.js";


export default class Users {
    
    get = (params) =>{
        return userModel.find(params);
    }

    getBy = (params) =>{
        return userModel.findOne(params);
    }

    save = (doc) =>{
        return userModel.create(doc);
    }

    update = async (id,doc) =>{
        await userModel.findByIdAndUpdate(id,{$set:doc})
        return userModel.findById(id)
    }

    delete = (id) =>{
        return userModel.findByIdAndDelete(id);
    }
}