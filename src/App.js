import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContainer from "./components/MainContainer"
import WatchPages from './components/WatchPages';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Body/>}>
              <Route path='/' element={<MainContainer/>}/>
              <Route path='/watch' element={<WatchPages/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
