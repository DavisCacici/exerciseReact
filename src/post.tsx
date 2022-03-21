import React from "react";
import './index.scss';
import _ from "lodash";
// import "./ripasso";
// import "./lezione2.tsx";

import ReactDOM from 'react-dom';


interface Autor{
    readonly name: string;
    readonly surname: string;
}

interface Post{
    readonly title: string;
    readonly body: string;
    readonly autor: Autor;
}
const autor: Autor[] = [{name: 'davis', surname: 'cacici'}, {name: 'giacomo', surname: 'dradi'}]
export const posts: Post[] = [{title: 'hello world', body: 'this is the body', autor: autor[1]}, {title: 'hello world', body: 'this is the body', autor: autor[0]}];

export const Post: React.FunctionComponent<Post> = (props) =>{
    const {title, body, autor} = props;
    return <>
    <div className="card">
        <div>Titolo = {title}</div>
        <div>Body = {body}</div>
        <div>Autore = {autor.name} {autor.surname}</div>
        <hr />
    </div>
    </>;
}

// const App: React.FunctionComponent = () => {
//     return<>
//     {pots.map((value) => {
//         <post />
//     })}
//     </>;
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );