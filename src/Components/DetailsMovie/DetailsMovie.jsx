import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


export default function DetailsMovie() {
    const {imdbID} = useParams();
    const [details, setDetails] = useState({})


    async function getDetails(imdbID){
        const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=ba212b83&s=`;
        const response = await axios.get(url);
        setDetails(response.data);
        console.log(response.data)
    }
    
    useEffect(() =>{
        getDetails(imdbID);
    }, [imdbID]);


    return<>
    <div className="row">
        <div className="col-md-3 p-5 ">
            <img  src={details.Poster}/>
        </div>
        <div className="col-md-9 p-5">
            <h2>{details.Title}</h2>
            <p>Year: {details.Year}</p>
        </div>
    </div>
    
    </>
}