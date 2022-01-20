import React,{lazy, Suspense} from 'react'
import './Menu.css'
import {HashRouter, Route , Routes} from 'react-router-dom'
/*import {Home} from '../Home/Home'
import {About} from '../About/About'
import {Contact} from '../Contact/Contact'
import {Service} from '../Service/Service'
import {PageNot} from '../PageNotFound/PageNot'*/
const Home=lazy(()=>import('../Home/Home'))
const About=lazy(()=>import('../About/About'))
const Contact=lazy(()=>import('../Contact/Contact'))
const Service=lazy(()=>import('../Service/Service'))
const PageNot=lazy(()=>import('../PageNotFound/PageNot'))
export const Menu = () => {
    return (
    <div>
        <div class="menu">
            <a href="#/home">Home</a>
            <a href="#/about">About</a>
            <a href="#/contact">Contact</a>
            <a href="#/service">Service</a>
        </div>
             <Suspense fallback="Loading....">
               <HashRouter>
                     <Routes>
                       <Route path='' element={<Home/>} />
                       <Route path='home' element={<Home/>} />
                       <Route path='about' element={<About/>} />
                       <Route path='contact' element={<Contact/>} />
                       <Route path='service' element={<Service/>} />
                       <Route path='/*' element={<PageNot/>} />

                     </Routes>
               </HashRouter>
               </Suspense>
    </div>
    )
}
