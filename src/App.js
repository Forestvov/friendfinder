import './App.css';
import Header from "./views/components/Header/Header";
import Footer from "./views/components/Footer/Footer";
import Profile from "./views/components/Profile/Profile";
import {BrowserRouter} from "react-router-dom";

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
            <App/>
        </BrowserRouter>
    )
}

export default friendfinderAppp;
