import { useState } from 'react';
import Header from './Components/Header.jsx';
import SearchBar from './Components/SearchBar.jsx';
import SearchResult from './Components/SearchResults.jsx';
import Playlist from './Components/Playlist.jsx';
import './Styles/App.css';
import './Styles/general.css';

function App() {
  

  return (
    <>
      
      {/* Header Section */}
      <Header/>
      
      
      {/* Search Bar Area*/}
      <SearchBar />
      
      
      {/* Results&PlayList Area */}
      <div className='ResultsAndPlayList'>

          {/* Search Results */}
          <SearchResult />


          {/* Play List */}
          <Playlist />
      </div>

      
    </>
  )
}

export default App
