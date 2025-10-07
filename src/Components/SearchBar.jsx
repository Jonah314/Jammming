import React from 'react';
import '../Styles/SearchBar.css';
import '../Styles/general.css';

function SearchBar(){
    return (
        <>
            <div className='SearchBar Skin'>
                <form>
                    <div className='grid'>
                        <div></div>
                        
                        <div> <input type = "text" />
                        </div>
                        
                        {/* Button Will be imported from General.css as all the button will be similiar */}
                        <div>
                        <button className='Button1'> Search </button>
                        </div>
                        
                        <div></div>

                    </div>
                </form>
            </div>
        </>
    );
}

export default SearchBar;