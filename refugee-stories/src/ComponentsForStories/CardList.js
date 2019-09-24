import React from "react";
import CardForStories from "./Card";
import { Header } from "semantic-ui-react";
import "../AppStories.css";

const CardList = (props) => (
    <div className="card-cont">
        <Header className="story-head" as="h1">Stories</Header>
        {props.cuento.map(item => {
            return <CardForStories
                        className="card"
                        key={item.id}
                        title={item.title}
                        name={`Author: ${(item.name !== null) ? item.name : "N/A"}  -  Email: ${(item.email !== null) ? item.email : "N/A"}`}
                        contents={item.contents}
                        pend={item.pending}
                    />
        })}
    </div>
);

export default CardList;