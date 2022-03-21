import './index.scss';
import { Post, posts } from './post';
import ReactDOM from 'react-dom';





const App: React.FunctionComponent = () => {

    return <div className='app'>
        {posts.map((value) => {
         return <Post title={value.title} body={value.body} autor={value.autor}/>
        })}
        {/* <TestComponentSenzaTag /> */}
    </div>;
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);