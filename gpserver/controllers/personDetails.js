  
 import {addPerson ,getUsers} from '../operations/person'

 export const addPersonDetails = async (req,res) => {
 console.log('req :', req.body);
   try {
       if(req && req.body){
           const result  = await addPerson(req.body);
           res.send(result);
       }
   } catch (error) {
    throw new Error(error);
  }
 }

 export const getUserDetails = async (req, res) => {
   try {
    let condition = {};
     const users  = await getUsers(condition,null)
     console.log('users :', users);
     res.send(users);

   } catch (error) {
    throw new Error(error);

   }
 }