import axios from "axios";

const ronSwansonQuotes = {
    get100Quotes: () => {
        return new Promise((resolve, reject) => {
            axios
                .get("https://ron-swanson-quotes.herokuapp.com/v2/quotes/100")
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
};

export default ronSwansonQuotes;