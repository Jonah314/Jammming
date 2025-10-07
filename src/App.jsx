import { useState } from 'react';
import Header from './Components/Header.jsx';
import SearchBar from './Components/SearchBar.jsx';
import './Styles/App.css';
import './Styles/general.css';

function App() {
  

  return (
    <>
      
      {/* Header Section */}
      <Header/>
      
      
      {/* Search Bar Area*/}
      <SearchBar />
      
      
      {/* Results & PlayList Area */}
      <div>

          {/* Search Results */}
          <div>
            <h1>Search Results Area</h1>
          </div>


          {/* Play List */}
          <div>
            <h1>Make a Play List area</h1>
          </div>
      </div>

      
    </>
  )
}

export default App
