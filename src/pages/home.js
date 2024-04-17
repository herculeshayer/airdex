import React from "react";

import SearchBar from "../components/searchbar";

import { FaGithub } from "react-icons/fa";

const HomePage = () => {
    return (
        <div id="flex-container">
            <section id="homepage">
                <h1>AirDex 😷</h1>
                <p>
                    React.js application utilizing an external API allowing
                    users to search and display Air Quality Index forecasts for
                    applicable regions
                </p>

                <p>Find out when it's safe to venture outdoors.</p>
            </section>

            <SearchBar />

            <a href="https://github.com/herculeshayer/airdex">
                <FaGithub size="50" />
            </a>
        </div>
    );
};

export default HomePage;
