import Pages from './routes/Pages/Pages';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<div>
			<Router>
				<Pages />
			</Router>
		</div>
	);
}

export default App;
