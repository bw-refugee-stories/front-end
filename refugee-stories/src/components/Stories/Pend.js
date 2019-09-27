import React from "react";
import {Icon} from "semantic-ui-react";


const Pend = (props) => (
    <p>
        <Icon name="user"/>
        {`Pending - ${props.pending}`}
    </p>
);

export default Pend;