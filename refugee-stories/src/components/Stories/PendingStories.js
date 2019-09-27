import React from "react";
import PendingCard from "./PendingCard.js";
import {Header} from "semantic-ui-react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import "../../AppStories.css"

const HomeLink =styled.h3`
    text-align: center;
    padding: 20px;
`;


const PendingStories = (props) => {
    return (
        <div className="card-cont">
            <Header className="story-head" as="h1">Stories</Header>
            <HomeLink>
                <Link to="/">Home</Link>
            </HomeLink>
            {props.data.map(item => {
                return <PendingCard
                    className="card"
                    key={item.id}
                    title={item.title}
                    name={`Author: ${(item.name !== null) ? item.name : "N/A"}  -  Email: ${(item.email !== null) ? item.email : "N/A"}`}
                    contents={item.contents}
                />
            })}
            <HomeLink>
                <Link to="/">Home</Link>
            </HomeLink>
        </div>
    );
};

export default PendingStories;