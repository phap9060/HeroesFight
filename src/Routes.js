import {
  BrowserRouter as BRouter,
  Route, 
  Routes
} from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import HeroesPage from './pages/HeroesPage';

const ReactRouter = () => (
  <BRouter>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/heroes" element={ <HeroesPage/> } />
      </Routes>
  </BRouter>
);

export default ReactRouter;