import React from 'react';
import '../Styles/SearchBar.css';
import '../Styles/general.css';

function SearchBar(){
    return (
        <>
            <div>
                <form>
                    <input type = "text" />

                    {/* Button Will be imported from General.css as all the button will be similiar */}
                    <button className='Button1'/>
                </form>
            </div>
        </>
    );
}

export default SearchBar;