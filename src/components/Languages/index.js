import React from "react";
import data from "../../data/data.json";

export const Languages = () => {
    const languageListWithId = data?.languages?.info?.map((item, idx) => ({ ...item, id: idx + 1 }));

    return (
        <div className="desktop-only">
            {data?.languages?.title && <div class="languages-container container-block">

                <h2 className="container-block-title">
                    {data.languages.title}
                </h2>
                <ul class="list-unstyled interests-list">
                    {
                        languageListWithId?.map(lang => (
                            <li>
                                {lang.language}
                                <span class="lang-desc">({lang.level})</span>
                            </li>
                        ))
                    }
                </ul>
            </div>}
        </div>
    );
};

export default Languages;
