import React from "react";
import data from "../../data/data.json";
import Contact from "../Contact";
import Education from "../Education";

export const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <div className="profile-container">
                {data?.sidebar?.name && <h1 className="name">{data.sidebar.name}</h1>}
                {data?.sidebar?.tagline && <h3 className="tagline">{data.sidebar.tagline}</h3>}
            </div>
            <Contact />
            <Education />
        </div>
    );
};

export default Sidebar;
