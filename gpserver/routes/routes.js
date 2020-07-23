import {addPersonDetails , getUserDetails} from '../controllers/personDetails'

export const routes = (app) =>{
    app.post('/api/addPersonInfo',addPersonDetails);
    app.get('/api/getUsers',getUserDetails)
}