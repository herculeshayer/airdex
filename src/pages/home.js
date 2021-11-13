import React from "react";

// import GetAQIInformation from "../components/GetAQI";
import SearchBar from "../components/searchbar";
// id="homepage"
const HomePage = () => {
    return (
        <div id="flex-container">
            <section id="homepage"> 
                <h1 >
                    😷 AirDex   
                </h1>
                    <p>
                        🔥 Global warming is turning the ice caps to water,
                        your forrests to ash, and the air you breathe toxic.
                        
                    </p>
                    <p>
                        Find out when it's okay for you to step outside.
                    </p>

            </section>
            
            <SearchBar />
        </div>
    );
}

export default HomePage;