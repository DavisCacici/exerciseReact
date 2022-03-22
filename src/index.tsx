import './index.scss';
import { PostComponent, posts } from './post';
import { ButtonComponent } from './button';
import ReactDOM from 'react-dom';


const App: React.FunctionComponent = () => {

    return <div className='app'>
        {/* {posts.map((value) => {
         return <PostComponent post={value}/>
        })} */}
        {/* <TestComponentSenzaTag /> */}
        <ButtonComponent returnFunction={()=> console.log('sono nella callback')} name='Console Log'/>
        <ButtonComponent returnFunction={()=> alert('sono nella callback')} name='Alert'/>
    </div>;
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);