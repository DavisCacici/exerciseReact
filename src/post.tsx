import React from "react";
import './index.scss';
import _ from "lodash";



interface Autor{
    readonly name: string;
    readonly surname: string;
}

interface Post{
    readonly title: string;
    readonly body: string;
    readonly autor: Autor;
}

interface PostInterface{
    readonly post: Post;
}

const autor: Autor[] = [{name: 'davis', surname: 'cacici'}, {name: 'giacomo', surname: 'dradi'}]
export const posts: Post[] = [{title: 'hello world', body: 'this is the body', autor: autor[1]}, {title: 'hello world', body: 'this is the body', autor: autor[0]}];

export const PostComponent: React.FunctionComponent<PostInterface> = (props) =>{
    const {post} = props;
    return <>
    <div className="card">
        <div>Titolo = {post.title}</div>
        <div>Body = {post.body}</div>
        <div>Autore = {post.autor.name} {post.autor.surname}</div>
        <br />
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