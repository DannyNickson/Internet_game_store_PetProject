import axios from "axios"

export default class PostService {

    static async registrationUser(userObj)
    {
        const response = await axios.post('http://localhost:7000/api/user/registration',{
            username:userObj.username,
            email:userObj.email,
            password:userObj.password,
        })
        return response
    }

    static async getAll() {
        const response = await axios.get('http://localhost:7000/api/user/userlist')
        return response.data

    }

}