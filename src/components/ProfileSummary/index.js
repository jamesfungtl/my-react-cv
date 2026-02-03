import React from "react";
import data from "../../data/data.json";

export const ProfileSummary = () => {
    return (
        <section className="section summary-section">

            <h2 className="section-title">
                <span className="fa-stack fa-xs">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-user fa-stack-1x fa-inverse"></i>
                </span>
                {data.profileSummary.title}
            </h2>

            <div className="summary">
                {data.profileSummary.summary}
            </div>

        </section>
    );
};

export default ProfileSummary;