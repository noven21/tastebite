import Pages from './routes/Pages/Pages';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<section>
			<Router>
				<Pages />
			</Router>
		</section>
	);
}

export default App;
