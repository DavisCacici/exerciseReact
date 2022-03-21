import './index.scss';
import { PostComponent, posts } from './post';
import ReactDOM from 'react-dom';


const App: React.FunctionComponent = () => {

    return <div className='app'>
        {posts.map((value) => {
         return <PostComponent post={value}/>
        })}
        {/* <TestComponentSenzaTag /> */}
    </div>;
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);