import React from "react";
import CardForStories from "./Card";
import "../App.css";

const CardList = (props) => (
    <div className="card-cont">
        {props.cuento.map(item => {
            return <CardForStories
                        className="card"
                        key={item.id}
                        title={item.title}
                        name={`Author: ${(item.name !== null) ? item.name : "N/A"}  -  Email: ${(item.email !== null) ? item.email : "N/A"}`}
                        contents={item.contents}
                    />
        })}
    </div>
);

export default CardList;