import logo from './logo.svg';
import './App.scss';
import './component/MovieOverview';
import MovieOverview from "./component/MovieOverview";
import MovieHeader from "./component/MovieHeader";

function App() {

  return (
    <div className="main">
        <MovieHeader/>
        <MovieOverview/>
    </div>
  );
}

export default App;
