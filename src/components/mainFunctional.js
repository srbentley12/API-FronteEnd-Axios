import React, {useState, useEffect} from "react";
import ronSwansonQuotes from "../APIs/ronSwansonQuotes";
import user from "../APIs/user";
import cats from "../APIs/cats";
import countries from "../APIs/countries";
import OutputList from "./outputList";
import SearchInput from "./searchInput";
import ButtonComponent from "./buttonComponent";


function MainFunctional() {
    //Api data storage
    const [data, setData] = useState({});
    //String of search input
    const [searchString, setSearchString] = useState("");
    //Current API selected for display
    const [apiInUse, setApiInUse] = useState("countries");


    useEffect(() => {
        //gets 50 random user names and saves the first names into the data state
        user.getRandomUserNames().then((response) => {
            //format the data into workable form other components
            const formattedData = response.data.results.map((a) => a.name.first);
            setData(prevState => {
                //names here is the name of the key in data and the button label
                const updatedData = {names: formattedData}
                //adds all the selected, formatted JSON data
                return {...prevState, ...updatedData};
            });
        });

        //takes 100 pictures of cats and saves the URL into data, can't currently search images due to
        //taking all api calls and adding them to the data all at once. Could be handled better for search by taking
        //all the raw JSON data and sorting through it later instead of formatting here.
        cats.get100Cats().then((response) => {
            const formattedData = response.data.map((a) => a.url);
            setData(prevState => {
                const updatedData = {cats: formattedData}
                return {...prevState, ...updatedData};
            });
        });

        countries.getCountries().then((response) => {
            const formattedData = response.data.map((a) => a.name);
            setData(prevState => {
                const updatedData = {countries: formattedData}
                return {...prevState, ...updatedData};
            });
        });

        ronSwansonQuotes.get100Quotes().then((response) => {
            const formattedData = response.data.map((a) => a.toString());
            setData(prevState => {
                const updatedData = {"Ron Swanson Quotes": formattedData}
                return {...prevState, ...updatedData};
            });
        });

    }, []);

    //Updates the search input which also updates the outputList
    const listHandler = (searchInput) => {
        setSearchString(searchInput);
    }

    //Changes the API in use state to display correct API data
    const buttonHandler = (value) => {
        setApiInUse(value);
    }


    return (
        <div className="App">
            <div>
                <ButtonComponent val={"countries"} buttonHandler={buttonHandler}/>
                <ButtonComponent val={"names"} buttonHandler={buttonHandler}/>
                <ButtonComponent val={"cats"} buttonHandler={buttonHandler}/>
                <ButtonComponent val={"Ron Swanson Quotes"} buttonHandler={buttonHandler}/>
            </div>

            <SearchInput updateSearch={listHandler}/>
            <OutputList data={data} searchString={searchString} activeApi={apiInUse}/>

        </div>
    );
}

export default MainFunctional;
