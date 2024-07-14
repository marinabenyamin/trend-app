import React from 'react';

export default function MovieCard({movie:{Year,Poster,type,Title}}){
    return<>
    <div className="movie">
        
        <div>
            <p>{Year}</p>
        </div>

        <div>
            <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title}/>
        </div>

        <div>
            <span>{type}</span>
            <h3>{Title}</h3>
        </div>
        

    </div>



    </>
}