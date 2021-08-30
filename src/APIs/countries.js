import axios from "axios";

//documentation @https://restcountries.eu/
//feel free to add more functions!

const countries = {
  getCountries: (cityName) => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

export default countries;
