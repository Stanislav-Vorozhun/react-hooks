import React, { Fragment } from "react";
import { Card } from "../components/Card";
import { Search } from "../components/Search";

export const Home = () => {
    const cardsArray = new Array(15).fill("").map((_, i) => i)
    return (
        <Fragment>
            <Search />
            <div className="row">
                {cardsArray.map(card => {
                    return (
                        <div className="col-sm-3 mb-4" key={card}>
                            <Card />
                        </div>)
                })}
            </div>
        </Fragment>
    )
}