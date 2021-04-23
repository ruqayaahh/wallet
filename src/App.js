import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './Routes';


const App = () => {

	return (


			<Router>
				<React.Suspense fallback={<div>Loading Page...</div>}>
					<AppRoutes />
				</React.Suspense>
			</Router>


	);
};

export default App;