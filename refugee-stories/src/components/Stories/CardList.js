import React, { useState, useEffect } from "react";
import axios from "axios"
import CardForStories from "./CardForStories";
// import { Header } from "semantic-ui-react";
import "../../AppStories.css"
import { Link } from "react-router-dom";
import '../../index.css';


const CardList = () => {
    const [story, setStory] = useState([]);
    const [refreshCount, setRefreshCount] = useState(0);

    useEffect(() => {
        axios.get('https://refu-stories-api.herokuapp.com/stories')
            .then(res => {
                setStory(res.data);
                console.log('data', res)
            })
            .catch(err => console.log('Error: ', err))
    }, [refreshCount]);

    const handleRemoveStory = (id) => {
        axios.delete(`https://refu-stories-api.herokuapp.com/stories/${id}`)
            .then (res => {
               console.log(res.data)
               setRefreshCount(+1)
            } )
            .catch(err => console.log('Error: ', err))        
      }

      const handleApproveStory = (id) => {
        axios.put(`https://cors-anywhere.herokuapp.com/http://refu-stories-api.herokuapp.com/stories/${id}`)
            .then (res => {
               console.log('Approve', res.data)
               setRefreshCount(+1)
            })
            .catch(err => console.log('Error: ', err))
        
      }
    


    return (
        <div className="card-cont">
            {/* <Header className="story-head" as="h1">Stories</Header> */}
            <Link className='home-page' to="/">Home</Link>
            {story.map(item => 
                <CardForStories
                    className="card"
                    key={item.id}
                    title={item.title}
                    name={`Author: ${(item.name !== null) ? item.name : "N/A"}  -  Email: ${(item.email !== null) ? item.email : "N/A"}`}
                    contents={item.contents} 
                    removeStory={() => handleRemoveStory(item.id)} 
                    addStory={() => handleApproveStory(item.id)} 
                />
            )}
            
        </div>
    );
};


export default CardList;


