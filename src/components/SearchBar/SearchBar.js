import React, {useState} from 'react';
export default function SearchBar({handleSubmit}){

    const[searchTerm,setSearchTerm]=useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    };

    const handleSearch = () => {
        if (searchTerm.trim()!== '' ){
            handleSubmit(searchTerm);
        };
    };
    
    return(
        <div>
            <input type='text' value={searchTerm} onChange={handleChange} placeholder="Enter a song" />
                <button onClick={handleSearch}>Search</button>
            </div>
    );
};

