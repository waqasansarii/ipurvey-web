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
import HomeTwo from "../Pages/Home/HomeTwo";
import HomeThree from "../Pages/Home/HomeThree";
import HomeFour from "../Pages/Home/HomeFour";
import HomeFive from "../Pages/Home/HomeFive";
import HomeSix from "../Pages/Home/HomeSix";
import HomeEight from "../Pages/Home/HomeEight";
import HomeSeven from "../Pages/Home/HomeSeven";


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
                <Route exact path='/' component={Home} />
                <Route path='/home-two' component={HomeTwo} />
                <Route path='/home-three' component={HomeThree} />
                <Route path='/home-four' component={HomeFour} />
                <Route path='/home-five' component={HomeFive} />
                <Route path='/home-six' component={HomeSix} />
                <Route path='/home-seven' component={HomeSeven} />
                <Route path='/home-eight' component={HomeEight} />
            </Switch>
            <Footer />
            <CopyRight />
        </Router>
    )
}

export default AppRouter