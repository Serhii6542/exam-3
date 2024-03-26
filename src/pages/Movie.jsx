import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Ratings from "../components/Ratings"
import NotFound from '../assets/imsges/img-not-found.png'
import { toast } from "react-toastify"

export default function MoviePage(){
    const params = useParams()
    const [movieData, setMovieData] = useState(null)
    const [isLoader, setLoader] = useState(false)


    const fetchData = async ()=>{
        const movieID = `ID_${params.imdbID}`;
        try{
            setLoader(true)
            const url = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${params.imdbID}`
            const response = await fetch(url)
            const json = await response.json()
            setMovieData(json)
            setLoader(false)
            setTimeout(()=>{
                setLoader(false)
            }, 2000)
        } catch(err){
            setLoader(false)
            toast.error(err)
        }
        
    }

    useEffect(()=>{
        if(isLoader)
        return
        fetchData()
    }, [])


    return <div className="wrap-info-movie">
        {isLoader && <div className="loader"><span></span></div>}
        {movieData && (
        <>
            <div className="top-wrap">
                <div className="title-movie">
                    <h1>{movieData.Title }</h1>
                </div>
                <div className="link-home">
                    <Link to="/">
                        <div className="wrap-link">Back</div>
                    </Link>
                </div>
            </div>
            <div className="wrap-movie">
                <div className="img-info">
                    <img src={movieData.Poster ==='N/A' ? NotFound : movieData.Poster} alt={movieData.Title} />  
                </div>
                <div className="content">
                    <ul className="year-ganre">
                        <li className="year"><b>Year:</b> {movieData.Year}</li>
                        <li className="ganre"><b>Genre:</b> {movieData.Genre}</li>
                    </ul>

                    <Ratings ratings={movieData.Ratings}/>

                    <p className="text">{movieData.Plot === 'N/A' ? 'There is no plot description' : movieData.Plot}</p>
                </div>
            </div>
        </>)}
    </div>
}