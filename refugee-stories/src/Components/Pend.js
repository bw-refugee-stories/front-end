import React from "react";
import { Icon } from "semantic-ui-react";

const Pend = (props) => (
    <p>
        <Icon name="server"/>
        {props.pending}
    </p>
);

export default Pend;