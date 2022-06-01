import React from 'react';
import {Header} from "./components/header/header";
import {Info} from "./components/info/info";
import {Price} from "./components/price/price";
import {Speakers} from "./components/speakers/speakers";
import {Footer} from "./components/footer/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Info/>
            <Price/>
            <Speakers/>
            <Footer/>
        </div>
    );
}

export default App;
