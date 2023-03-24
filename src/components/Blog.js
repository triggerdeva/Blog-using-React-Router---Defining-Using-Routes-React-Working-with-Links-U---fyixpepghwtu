import React from 'react';
import { Link, NavLink, Switch,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import PostDetail from "./PostDetail";
import PostList from "./PostList";


export default function Blog() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/posts"}>Posts</Link>
        </nav>
  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/posts"} component={PostList}/>
          <Route exact path={"/posts/:id"} component={PostDetail}/>
        </Switch>
      </div>
    );
  }
