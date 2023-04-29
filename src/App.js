import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Footer from "./Components/Home/Footer/Footer";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from './Components/NotFound/NotFound';
import Shops from "./Components/Shops/Shops";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DetailsId from "./Components/DetailsId/DetailsId";
import Service from "./Components/Home/Service/Service";
import About from "./Components/About/About";
import Post from "./Components/Home/Booking/Posts/Post";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/shops">
              <Shops></Shops>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/service">
              <Service></Service>
            </Route>
            <Route path="/About">
              <About></About>
            </Route>
            <Route path="/post">
              <Post></Post>
            </Route>
              <Route exact path="/Detils/:DetilsId">
                 <DetailsId></DetailsId>
              </Route>
             <Route  path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
