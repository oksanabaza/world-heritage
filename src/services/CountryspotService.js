import axios from "axios";
import { user } from "../stores.js";
import sanitizeHtml from "sanitize-html";

export class CountryspotService {
  baseUrl = "";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    const countryspotCredentials = localStorage.countryspot;
    if (countryspotCredentials) {
      const savedUser = JSON.parse(countryspotCredentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token,
      });
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + savedUser.token;
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/api/users/authenticate`,
        { email, password }
      );
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token,
        });
        localStorage.countryspot = JSON.stringify({
          email: email,
          token: response.data.token,
        });
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: "",
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("countryspot");
  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: sanitizeHtml(firstName),
        lastName: sanitizeHtml(lastName),
        email: sanitizeHtml(email),
        password: sanitizeHtml(password),
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async addCountry(country) {
    try {
      const response = await axios.post(this.baseUrl + "/api/countries", country);
      return response.data;
    } catch (error) {
      return false;
    }
  }
  async getCountryById(countryid) {
    try {
      const response = await axios.get(this.baseUrl + "/api/countries/" + countryid);
      return response.data;
    } catch (error) {
      console.error("Error getting country by id:", error);
      return {};
    }
  }

  async getAllCountries() {
    try {
      const response = await axios.get(this.baseUrl + "/api/countries");
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getUserCountries() {
    const response = await axios.get(this.baseUrl + "/api/countries/usercountries");
    return response.data;
  }

  async getSpotsByCountryId(countryid) {
    try {
      console.log("countryspot-service", countryid);
      const response = await axios.get(
        this.baseUrl + "/api/countries/" + countryid + "/spots"
      );
      console.log("reponse", response);
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getAllSpots() {
    try {
      const response = await axios.get(this.baseUrl + "/api/spots");
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async addSpot(countryid, spot) {
    try {
      const response = await axios.post(
        this.baseUrl + "/api/countries/" + countryid + "/spots",
        spot
      );
      return response.data;
    } catch (error) {
      return false;
    }
  }

  async getSpotById(spotid) {
    try {
      const response = await axios.get(this.baseUrl + "/api/spots/" + spotid);
      return response.data;
    } catch (error) {
      return {};
    }
  }

  async updateSpot(countryid, spotid, spot) {
    try {
      const response = await axios.post(
        this.baseUrl + "/api/countries/" + countryid + "/spots/" + spotid,
        spot
      );
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async deleteSpot(spotid) {
    try {
      const response = await axios.delete(
        this.baseUrl + "/api/spots/" + spotid
      );
      return true;
    } catch (error) {
      return false;
    }
  }

  async deleteCountry(countryid) {
    try {
      const response = await axios.delete(
        this.baseUrl + "/api/countries/" + countryid
      );
      return true;
    } catch (error) {
      return false;
    }
  }

  async getAllUsers() {
    try {
      const response = await axios.get(this.baseUrl + "/api/users");
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getLoggedInUser() {
    try {
      const loggedInUser = await axios.get(
        this.baseUrl + "/api/users/loggedInUser"
      );
      return loggedInUser;
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  async updateUserDetails(userid, user) {
    try {
      const response = await axios.post(
        this.baseUrl + "/api/users/updateUser/" + userid,
        user
      );
      return response;
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  async deleteUser(userid) {
    try {
      const response = await axios.delete(
        this.baseUrl + "/api/users/" + userid
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getAnalyticsData() {
    try {
      const response = await axios.get(this.baseUrl + "/api/analytics");
      return response;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async uploadImage(spotid, image) {
    try {
      const response = await axios.post(
        this.baseUrl + "/api/spots/" + spotid + "/uploadimage",
        { imagefile: image },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteImage(spotid, imgid) {
    try {
      const response = await axios.delete(
        this.baseUrl + "/api/spots/" + spotid + "/deleteimage/" + imgid
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getSpotsPerCategory() {
    try {
      const info = await axios.get(this.baseUrl + "/api/spots/categories");
      return info.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
