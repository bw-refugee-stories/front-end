import React, { useState, useEffect } from "react";
import axios from "axios"
import CardForStories from "./Card";
import { Header } from "semantic-ui-react";
import "../AppStories.css";


const CardList = () => {
    const [story, setStory] = useState([]);

    useEffect(() => {
        axios.get('https://refu-stories-api.herokuapp.com/stories')
            .then(res => {
                setStory(res.data);
            })
            .catch(err => console.log('Error: ', err))
    }, []);


    return (
        <div className="card-cont">
            <Header className="story-head" as="h1">Stories</Header>
            {story.map(item => {
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
};




export default CardList;

{/*<div className="card-cont">*/}
{/*    <Header className="story-head" as="h1">Stories</Header>*/}
{/*    {story.map(item => {*/}
{/*        return <CardForStories*/}
{/*            className="card"*/}
{/*            key={item.id}*/}
{/*            title={item.title}*/}
{/*            name={`Author: ${(item.name !== null) ? item.name : "N/A"}  -  Email: ${(item.email !== null) ? item.email : "N/A"}`}*/}
{/*            contents={item.contents}*/}
{/*            pending={item.pending}*/}
{/*        />*/}
{/*    })}*/}
{/*</div>*/}