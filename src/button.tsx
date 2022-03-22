import React from "react";
import './index.scss';
import _ from "lodash";

interface DataProps{
    readonly returnFunction: () => void;
    readonly name: string;
}


export const ButtonComponent: React.FunctionComponent<DataProps> = (props) => {
    const {returnFunction, name} = props;
    return <>
        <button onClick={() => returnFunction()}>{name}</button>
    </>;
}

