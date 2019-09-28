import React, {useState, useEffect} from "react";
import axios from 'axios'
import CardForStories from "./CardForStories";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../AppStories.css"
import '../../index.css';

const HomeLink =styled.h3`
    text-align: center;
    padding: 20px;
`;

const CardList = () => {
    const [story, setStory] = useState([]);
    let token = localStorage.getItem(token)

    useEffect(() => {
        axios.get('https://refu-stories-apiherokuapp.com/stories/a/pending', {headers: {authorization: token}})
            .then(res => {
                setStory(res.data);
                console.log('data', res)
            })
            .catch(err => console.log('Error: ', err))
    }, []);

    const handleRemoveStory = (id) => {
        console.log(id)
        setStory(story.filter (s => s.id !== id))
      }


    return (
        <div className="card-cont">
            <Header className="story-head" as="h1">Stories</Header>
            <Link className='home-page' to="/">Home</Link>
            {story.map(item => 
                <CardForStories
                    className="card"
                    key={item.id}
                    title={item.title}
                    name={`Author: ${(item.name !== null) ? item.name : "N/A"}  -  Email: ${(item.email !== null) ? item.email : "N/A"}`}
                    contents={item.contents} 
                    removeStory={handleRemoveStory} 
                />
            )}
            
        </div>
    );
};


export default CardList;

