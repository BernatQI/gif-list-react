import './App.css';
import { Link, Route } from 'wouter';
import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResults from './pages/SearchResults';
import Context from './context/StaticContext';
import { GifsContextProvider } from './context/GifContext';

function App() {

  return (
    <Context.Provider value={
      {
        name: 'BernatQi',
        subscibe: true
      }
    }>
      <div className="App">
        <section className='main-content'>
          <h1 className="App-title"><Link to={'/'}>Gifs List App</Link></h1>
          <GifsContextProvider>
            <Route
              component={Home}
              path='/' />
            <Route
              component={SearchResults}
              path='/search/:keyword' />
            <Route
              component={Detail}
              path='/gif/:id' />
          </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
