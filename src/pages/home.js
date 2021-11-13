import React from "react";


import SearchBar from "../components/searchbar";

const HomePage = () => {
    return (
        <div id="flex-container">
            <section id="homepage"> 
                <h1 >
                     AirDex   😷
                </h1>
                    <p>
                        Global warming is turning the ice caps to slush,
                        your forests to arugula, and the air like the inside of a barbeque.
                        
                    </p>
                    <p>
                        Find out when it's safe to venture outdoors.
                    </p>

            </section>
            
            <SearchBar />
        </div>
    );
}

export default HomePage;