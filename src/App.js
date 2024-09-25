import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuestionsPage from './pages/QuestionsPage';
import PostForm from './components/PostForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/post" component={PostForm} />
        <Route path="/questions" component={QuestionsPage} />
      </Switch>
    </Router>
  );
}

export default App;
