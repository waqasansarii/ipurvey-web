import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Layout/Navba";
import Blog from "../Pages/Blogs/Blog";
import SelectBlog from "../Pages/Blogs/OneBlogPage";
import TermAndCond from "../Pages/Terms/Terms";
import Privacy from "../Pages/privacy/Privacy";
import About from "../Pages/About/About";
import Footer from "../Layout/Footer";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import CopyRight from "../Layout/CopyRight";

import Login from "../Pages/CreateAccount/Login";
import SignUp from "../Pages/CreateAccount/SignUp";
import Forgot from "../Pages/CreateAccount/Forgot";
import ResetPassword from "../Pages/CreateAccount/ResetPassword";
import Faq from "../Pages/FAQ/Faq";
import Career from "../Pages/Career";
import Partners from "../Pages/Partners/Partners";
import Payment from "../Pages/Payment/Payment";
import Plan from "../Pages/Plan/Plan";
import ApiDoc from "../Pages/ApiDoc/ApiDoc";
import OurPlans from "../Pages/OurPlans/OurPlans";
import PlanPayment from "../Pages/Plan/PlanPayment";
import FeedBack from "../Components/Feedback/FeedBack";
import Developers from "../Pages/Developers";
import DashBoard from "../Pages/DashboardAccount/Dashboard";
import TravelBooking from "../Pages/DashboardAccount/TravelBooking";
import AccountInformation from "../Pages/DashboardAccount/AccountInfo";
import SecuritySetting from "../Pages/DashboardAccount/SecuritySetting";
import DeleteAccount from "../Pages/DashboardAccount/DeleteAccount";
import AccountActivity from "../Pages/DashboardAccount/AccountActivity";
import Notifications from "../Pages/DashboardAccount/Notification";
import ChatBox from "../Components/ChatBox";
import TravelClaim from "../Pages/TravelClaim";
import MobViewActitvityDetailPage from "../Pages/DashboardAccount/AccountActivity/MobViewActitvityDetailPage";
import SubscriptionManager from "../Pages/DashboardAccount/Subcription";
import StartSubscription from "../Pages/DashboardAccount/Subcription/StartSubscription";
import SelectMethod from "../Pages/DashboardAccount/Subcription/SelectMethod";
import MethodDetail from "../Pages/DashboardAccount/Subcription/MethodDetail";
import Failed from "../Pages/DashboardAccount/Subcription/Failed";
import Success from "../Pages/DashboardAccount/Subcription/Success";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <FeedBack />
      <ChatBox />
      <Switch>
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={SelectBlog} />
        <Route path="/terms" component={TermAndCond} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/reset" component={ResetPassword} />
        <Route path="/faq" component={Faq} />
        <Route path="/career" component={Career} />
        <Route path="/partners" component={Partners} />
        <Route path="/payment" component={Payment} />
        <Route path="/plan" component={Plan} />
        <Route path="/api-doc" component={ApiDoc} />
        <Route path="/our-plan" component={OurPlans} />
        <Route path="/planpayment" component={PlanPayment} />
        <Route path="/developer" component={Developers} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/travel-booking" component={TravelBooking} />
        <Route path="/account-info" component={AccountInformation} />
        <Route path="/security" component={SecuritySetting} />
        <Route path="/delete-account" component={DeleteAccount} />
        <Route exact path="/account-activity" component={AccountActivity} />
        <Route path="/notification" component={Notifications} />
        <Route
          exact
          path="/account-activity/:id"
          component={MobViewActitvityDetailPage}
        />
        <Route path="/travel-claim" component={TravelClaim} />
        <Route path="/manage-subscription" component={SubscriptionManager} />
        <Route path="/start-subsricption" component={StartSubscription} />
        <Route path="/select-method" component={SelectMethod} />
        <Route path="/method-detail" component={MethodDetail} />
        <Route path='/subs-failed'  component={Success}/>
        <Route path='/subs-succes' component={Failed} />
      </Switch>
      <Footer />
      <CopyRight />
    </Router>
  );
};

export default AppRouter;
