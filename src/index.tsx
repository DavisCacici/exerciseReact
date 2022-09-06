import './index.scss';
import React, { useState } from "react";
import { PostComponent, posts } from './post';
import { ButtonComponent } from './button';
import ReactDOM from 'react-dom';
import { CreatePostComponent } from './CreatePost';

interface PostProps{
    readonly title: string;
    readonly body: string;
    readonly autor: string;
    
}

const App: React.FunctionComponent = () => {
    
    return <div className='app'>
        {/* {posts.map((value) => {
         return <PostComponent post={value}/>
        })} */}
        {/* <TestComponentSenzaTag /> */}
        {/* <ButtonComponent returnFunction={()=> console.log('sono nella callback')} name='Console Log'/>
        <ButtonComponent returnFunction={()=> alert('sono nella callback')} name='Alert'/> */}
        <CreatePostComponent returnofFunction={(value)=> console.log(value)}/>
    </div>;
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);