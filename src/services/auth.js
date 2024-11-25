import axios from "axios";

class AuthService {
  async getToken(user){
    try{
      const { data }  = await axios.post("token/", user)
      return data.access
    }
    catch(error){
      console.log(error)
    }
  }
}

export default AuthService;