import React from "react";
import { Card } from "semantic-ui-react";
import Pend from ".//Pend.js";


const CardForStories = (props) => (
    <Card
        header={props.title}
        meta={props.name} // remember to add props.email
        description={props.contents}
        extra={ <Pend pending={props.pend} /> }
    />
);

export default CardForStories;