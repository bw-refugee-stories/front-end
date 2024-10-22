import React from "react";
import { Card } from "semantic-ui-react";


const CardForStories = (props) => (
    <Card>
        <Card.Content>
            <Card.Header>{props.title}</Card.Header>
            <Card.Meta>{props.name}</Card.Meta>
            <Card.Description>{props.contents}</Card.Description>
        </Card.Content>
    </Card>
    );

export default CardForStories;

