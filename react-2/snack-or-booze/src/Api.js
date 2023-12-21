import axios from "axios";

const BASE_API_URL = "http://localhost:3001";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async addSnack(newSnack) {
    const result = await axios.post(`${BASE_API_URL}/snacks`, newSnack);
    return result.data;
  }
  
  static async addDrink(newDrink) {
    const result = await axios.post(`${BASE_API_URL}/drinks`, newDrink);
    return result.data;
  }
  
  static async deleteSnack(id) {
    const result = await axios.delete(`${BASE_API_URL}/snacks/${id}`);
    return result.data;
  }
  
  static async deleteDrink(id) {
    const result = await axios.delete(`${BASE_API_URL}/drinks/${id}`);
    return result.data;
  }
  

}

export default SnackOrBoozeApi;
