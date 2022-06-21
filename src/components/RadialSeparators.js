import React from "react";
import _ from "lodash";

function Separator(props) {
    return (
        <div
            style={{
                position: "absolute",
                height: "100%",
                transform: `rotate(${props.turns}turn)`
            }}
        >
            <div style={props.style} />
        </div>
    );
}

function RadialSeparators(props) {
    const angle = props.circleRatio;
    const sections = props.count + 1;
    const sep = (angle / sections)
    return _.range(props.count).map(index => (
        <Separator key={index} turns={(sep * index) + (sep - angle / 2)} style={props.style} />
    ));
}

export default RadialSeparators;
