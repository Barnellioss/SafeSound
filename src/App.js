import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SongsContainer from './components/Songs/SongsContainer';
import AboutSingerContainer from './components/AboutSinger/AboutSingerContainer';
import { Component } from 'react';
import SearchPageContainer from './components/SearchPage/SearchPageContainer';
import FavoritePage from './components/Favorite/FavoritePage';
import History from './components/History/History';
import Track from './components/AboutTrack/Track';
import Country from './components/Coutry/country';
import UsersPageUnAuthentified from './components/UsersPage/UsersPage_Unauthenthified';
import UsersPage from './components/UsersPage/UsersPage';


class App extends Component {
  
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <div className="app-components">
          <Route path="/TopSongs" render={() => <SongsContainer />} />
          <Route path="/about" render={() => <AboutSingerContainer />} />
          <Route path="/SearchPage" render={() => <SearchPageContainer />} />
          <Route path="/FavoritePage" render={() => <FavoritePage />} />
          <Route path="/History" render={() => <History/>}></Route>
          <Route path="/Track" render={() => <Track />}></Route>
          <Route path="/Country" render={() => <Country />}></Route>
          <Route path="/UserUnAuthentified" render={() => <UsersPageUnAuthentified />}></Route>
          <Route path="/User" render={() => <UsersPage/>}></Route>
        </div>
      </div>
    )
  }
}


export default App;
