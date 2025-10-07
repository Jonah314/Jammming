import { useState } from 'react';
import Header from './Components/Header.jsx';
import SearchBar from './Components/SearchBar.jsx';
import SearchResult from './Components/SearchResults.jsx';
import Playlist from './Components/Playlist.jsx';
import Footer from './Components/Footer.jsx';
import './Styles/App.css';
import './Styles/general.css';
import './Styles/Skin.css';

function App() {
  

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
