import React from 'react';
import {
    About,
    Contact,
    Footer,
    Home,
    Navigation,
    MobileNavigation,
    Projects,
} from './Components/initializeComponents';

import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

function Router() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer />
            <MobileNavigation />
        </BrowserRouter>
    )
}

export default Router
