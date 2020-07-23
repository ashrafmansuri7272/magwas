  import {
    PersonDetails
  } from "../models/personDetails";
  
  /**
   * Method to create new person
   * @param {object} data person information to save
   */
  export const addPerson = (data) => {
    console.log('data :', data);
    const person = new PersonDetails(data);
    return person.save();
  };

  export const getUsers = (condition, selection) =>{
    return selection ? PersonDetails.find(condition, selection).lean() : PersonDetails.find(condition).lean();
  }
  