import React from "react";
import CardForStories from "./Card";

const CardList = (props) => (
    <div>
        {props.cuento.map(item => {
            return <CardForStories
                        key={item.id}
                        title={item.title}
                        name={`Author: ${(item.name !== null) ? item.name : "N/A"}  -  Email: ${(item.email !== null) ? item.email : "N/A"}`}
                        contents={item.contents}
                    />
        })}
    </div>
);

export default CardList;