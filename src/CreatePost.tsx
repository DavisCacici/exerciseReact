import React, { useState } from "react";
import './index.scss';
import _ from "lodash";
import { ButtonComponent } from './button';

interface PostProps{
    readonly title: string;
    readonly body: string;
    readonly autor: string;
    
}

interface ReturnFunction{
    readonly returnofFunction: (post:PostProps) => void;
}

export const CreatePostComponent: React.FunctionComponent<ReturnFunction> = (props) => {
    const {returnofFunction} = props;
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [autor, setAutor] = useState("");
    // const [post, setPost] = useState<PostProps>();


    return <>
        <div>autore: <input type="text"  onChange={(e) => setAutor(e.target.value)}/></div><br />
        <div>Title: <input type="text" onChange={(e) => setTitle(e.target.value)}/></div><br />
        <div>body: <textarea onChange={(e) => setBody(e.target.value)} ></textarea></div><br />

        <ButtonComponent returnFunction={()=> {
            const post: PostProps = {
                title: title,
                body: body,
                autor: autor,
            }
            returnofFunction(post)
        }} name='crea'/>

    </>;
}