import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from '../Nav/Home.js';
import About from '../Nav/About.js';
import Media from '../Nav/Media.js';
import Contact from '../Nav/Contact.js';

function Main() {
    return (
        <BrowserRouter>
            <span><Link to='/home'>Home</Link></span> &nbsp;
            <span><Link to='/about'>About</Link></span> &nbsp;
            <span><Link to='/media'>Media</Link></span> &nbsp;
            <span><Link to='/contact'>Contact</Link></span>

            <Routes>
                <Route path='/' element={<Navigate to='/home'/>}/>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/media' element={<Media/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Main;