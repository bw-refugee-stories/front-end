import React from "react";
import CardForStories from "./Card";

const CardList = (props) => (
    <div>
        {props.cuento.map(item => {
            return <CardForStories
                        key={item.id}
                        title={item.title}
                        name={`${item.name} - ${item.email}`}
                        contents={item.contents}
                    />
        })}
    </div>
);

export default CardList;