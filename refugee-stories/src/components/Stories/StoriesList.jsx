import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card} from 'semantic-ui-react';

export default function StoriesLIst() {
    const [stories, setStories] = useState([])
    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res=> {
            console.log(res)
            setStories(res.data);
        })
        .catch(error => {
            console.log('Server Error', error);
        })
        
    }, [])

    return (
        <section className='stories-list-grid-view'>
            {stories.map((story, index) =>(
                <StoryDetails key={index} story={story} />
            ))}
        </section>
    );
  };

  function StoryDetails({story}) {
      return(
        <Card className='story-card'>
            <Image src
        </Card>
      )
  }