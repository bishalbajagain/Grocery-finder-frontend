import React from "react";
import RenderRanking from "../RenderRanking";

const RecipieRankingPage = () => {

    return (
        <div className="rankingContainer">
            <h1>Category Ranking</h1>
            <ul className="rankingItems">
                <RenderRanking />
            </ul>
        </div>

    );


};
export default RecipieRankingPage;