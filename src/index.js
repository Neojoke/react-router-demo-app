import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Link } from 'react-router'

function Message(props) {
    return (<h3>Message's id is { props.params.id }</h3>);
}

function InBox(props) {
    return (
        <div>
        <p>This is Inbox</p>
        {props.children}
        </div>
    )
}
function About(props) {
    return (
        <p>This is About</p>
    )
}
const rootApp = (
    <Router>
        <Route path="/" component={ App }>
            <Route path="about" component={About}/>
            <Route path="inbox" component={InBox}>
                <Route path="messages/:id" component={Message}>
                </Route>
            </Route>
        </Route>
    </Router>
)
ReactDOM.render(rootApp, document.getElementById('root'));
registerServiceWorker();
