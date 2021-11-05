import React from "react";
import { Route, Link } from "react-router-dom";

import "./styles.css";

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      <Link to="/topics">Topics</Link>
      {/* or */}
      <button onClick={() => props.history.push("/topics")}>Topics </button>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = (props) => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
      <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link>
      <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>
    </div>
  );
};

const TopicDetail = (props) => {
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/blog/asdqw/topics" component={TopicsList} />
      <Route path="/blog/asdqw/topics/:topicId" component={TopicDetail} />
      <Route exact path="/blog/topics" component={TopicsList} />
      <Route path="/blog/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;
