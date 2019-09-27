import React from "react";
import { Icon } from "semantic-ui-react";

const Pend = (props) => (
    <p>
        <Icon name="server"/>
        {`Pending - ${props.pending}`}
    </p>
);

export default Pend;