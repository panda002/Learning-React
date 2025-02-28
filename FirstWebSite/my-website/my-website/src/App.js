import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ErrorPage from "./pages/ErrorPage"
import NavBar from "./NavBar"
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/article/:name" component={ArticlePage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
