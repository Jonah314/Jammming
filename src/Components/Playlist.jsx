import React from 'react';
import '../Styles/Playlist.css';

function Playlist(){
    return (
        <>
            <div className='Playlist Skin Curve'>
                <div className='header'>
                    <h1>Play List </h1>
                </div>


                <form>
                    <div className='input'>
                        <label for='playlistTitle'> Play List Title</label>
                        <input type='text' id="playlistTitle" />
                        
                    </div>
                    
                    <ul>
                        <li> Some Text</li>
                        <li> Some Text</li>
                    </ul>
                    
                    <div className='center'>
                        <button className='button'> Make Play List </button>
                    </div>
                </form>
            </div>
            
        </>
    )
}

export default Playlist;