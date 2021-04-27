import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Approutes from './Routes';

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading Page....</div>}>
                <Approutes />
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
