import React from "react";
import { Card, Button } from "semantic-ui-react";


const CardForStories = (props) => (
    <Card>
        <Card.Content>
            <Card.Header>{props.title}</Card.Header>
            <Card.Meta>{props.name}</Card.Meta>
            <Card.Description>{props.contents}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button basic color="green">Approve</Button>
            <Button basic color="red" onClick={ () => props.removeStory(props.id)}>Decline</Button>
        </Card.Content>
    </Card>
    );

export default CardForStories;

