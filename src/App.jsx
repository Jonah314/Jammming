import React,{useEffect, useState } from 'react';
import {
  redirectToAuthCodeFlow,
  getAccessToken,
  getSavedAccessToken,
} from './util/SpotifyPKCE.js';

import Header from './Components/Header.jsx';
import SearchBar from './Components/SearchBar.jsx';
import SearchResult from './Components/SearchResults.jsx';
import Playlist from './Components/Playlist.jsx';
import Footer from './Components/Footer.jsx';
import './Styles/App.css';
import './Styles/general.css';
import './Styles/Skin.css';

function App() {
  const [token, setToken] = useState(getSavedAccessToken());

  useEffect(() => {
    async function authenticate() {
      if (!token) {
        const accessToken = await getAccessToken();
        if (!accessToken) {
          redirectToAuthCodeFlow();
        } else {
          setToken(accessToken);
        }
      }
    }
    authenticate();
  }, [token]);



  return (
    <>
      
      {/* Header Section */}
      <Header/>
      
      <div className="Center">
        {/* Search Bar Area*/}
        <SearchBar />
      </div>
        
      <div className="Center">
        {/* Results&PlayList Area */}
        <div className='ResultsAndPlayList'>

            {/* Search Results */}
            <SearchResult />
            <div></div>

            {/* Play List */}
            <Playlist />
        </div>
      </div>

      <Footer />
      
    </>
  )
}

export default App
