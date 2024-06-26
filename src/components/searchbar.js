import React, { useEffect, useState } from "react";
import RenderAllCities from "./renderAllCities";

import { GrRefresh } from "react-icons/gr";

const SearchBar = () => {
    const [keyword, setKeyword] = useState("");

    /**
     *
     * @param {error} e
     *
     * Reset keyword on press
     */
    function handleRefresh(e) {
        e.preventDefault();
        setKeyword("");
    }

    return (
        <>
            <div className="Search-Bar">
                <form onSubmit={handleRefresh}>
                    <input
                        name="city"
                        type="text"
                        placeholder="Enter City i.e. Vancouver, Montreal, etc"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit">
                        <GrRefresh />
                    </button>
                </form>
            </div>

            <RenderAllCities keyword={keyword} />
        </>
    );
};

export default SearchBar;
