import {BrowserRouter} from "react-router-dom";
import store from "./redux";
import {Provider} from "react-redux"

import './App.css';

import Header from "./views/components/Header/Header";
import Footer from "./views/components/Footer/Footer";
import Profile from "./views/components/Profile/Profile";



const App = () =>  {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <Profile/>
            </div>
            <Footer/>
        </div>
    );
}

const friendfinderAppp = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
            <App/>
            </Provider>
        </BrowserRouter>
    )
}

export default friendfinderAppp;
