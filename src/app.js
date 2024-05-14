import React from 'react';
import { useLocation } from 'react-router-dom';

import Settings from './components/Settings/Settings.jsx';
import Modules from './components/Modules/Modules.jsx';
import { ModuleProvider } from './contexts/ModuleContext.jsx';
import QuotesList from './components/QuoteRequests/quoteRequests.jsx'; 
import EnquiryMessages from './components/EnquiryMessages/enquiryMessages.jsx';

const Route = () => {
    const location = new URLSearchParams(useLocation().hash);
    return (
        <>
            { location.get('tab') === 'settings' && <Settings initialTab='general' /> }
            { location.get('tab') === 'modules' && <Modules/> }
            { location.get('tab') === 'quote-requests' && <QuotesList />}
            { location.get('tab') === 'enquiry-messages' && <EnquiryMessages />}
        </>
    );
}

const App = () => {
    const currentUrl = window.location.href;
    document.querySelectorAll('#toplevel_page_catalog>ul>li>a').forEach((element) => {
        element.parentNode.classList.remove('current');
        if (element.href === currentUrl) {
            element.parentNode.classList.add('current');
        }
    });
    
    return <ModuleProvider modules = {appLocalizer.active_modules}><Route/></ModuleProvider> 
   
}

export default App;