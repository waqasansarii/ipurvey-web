import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "../Layout/Navba";
import Blog from '../Pages/Blogs/Blog'
import SelectBlog from '../Pages/Blogs/OneBlogPage'
import TermAndCond from '../Pages/Terms/Terms'
import Privacy from '../Pages/privacy/Privacy'
import About from '../Pages/About/About'
import Footer from "../Layout/Footer";
import Contact from '../Pages/Contact/Contact'
import Home from '../Pages/Home/Home'
import CopyRight from "../Layout/CopyRight";


const AppRouter = ()=>{
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/blog'  component={Blog}/>
                <Route path='/blog/:id' component={SelectBlog} />
                <Route path='/terms' component={TermAndCond} />
                <Route path='/privacy' component={Privacy} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/' component={Home} />
            </Switch>
            <Footer />
            <CopyRight />
        </Router>
    )
}

export default AppRouter