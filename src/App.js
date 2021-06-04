import logo from './logo.svg';
import './App.scss';
import './component/MovieOverview';
import MovieOverview from "./component/MovieOverview";

function App() {

  return (
    <div className="main">
      <MovieOverview/>
    </div>
  );
}

export default App;
