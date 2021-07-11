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
import Login from "../Pages/CreateAccount/Login";
import SignUp from "../Pages/CreateAccount/SignUp";
import Forgot from "../Pages/CreateAccount/Forgot";
import ResetPassword from "../Pages/CreateAccount/ResetPassword";
import Faq from "../Pages/FAQ/Faq";
import Career from "../Pages/Career";
import Developers from "../Pages/Developers";
import DashBoard from "../Pages/DashboardAccount/Dashboard";
import TravelBooking from "../Pages/DashboardAccount/TravelBooking";
import AccountInformation from "../Pages/DashboardAccount/AccountInfo";
import SecuritySetting from "../Pages/DashboardAccount/SecuritySetting";
import DeleteAccount from "../Pages/DashboardAccount/DeleteAccount";
import AccountActivity from "../Pages/DashboardAccount/AccountActivity";
import Notifications from "../Pages/DashboardAccount/Notification";


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
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />
                <Route path='/forgot' component={Forgot} />
                <Route path='/reset' component={ResetPassword} />
                <Route path='/faq' component={Faq} />
                <Route path='/career' component={Career} />
                <Route path='/developer' component={Developers} />
                <Route path='/dashboard' component={DashBoard} />
                <Route path='/travel-booking' component={TravelBooking} />
                <Route path='/account-info' component={AccountInformation} />
                <Route path='/security' component={SecuritySetting} />
                <Route path='/delete-account' component={DeleteAccount} />
                <Route path='/account-activity' component={AccountActivity} />
                <Route path='/notification' component={Notifications}  />
            </Switch>
            <Footer />
            <CopyRight />
        </Router>
    )
}

export default AppRouter