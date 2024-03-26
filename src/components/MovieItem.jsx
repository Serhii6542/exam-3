import { Link } from "react-router-dom"
import NotFound from "../assets/imsges/img-not-found.png"

export default function MovieItem({item, onFav}){

    const starIcon = (JSON.parse(localStorage.getItem("fav_movie")) || []).find(el => el.imdbID === item.imdbID) ? '★' : '☆';
    return (
        <div className="card">
            <div className="img-wrap" style={{"--bg-image": `url(${item.Poster ==='N/A' ? NotFound : item.Poster})`}}>
                <img src={item.Poster ==='N/A' ? NotFound : item.Poster} alt={item.Title} />
            </div>
            <div className="card-body">
                <div className="box-top">
                    <div className="card-title">
                        <Link to={`movie/${item.imdbID}`}>{item.Title}</Link>
                    </div>
                    <div className="card-text">
                        <b>Year: </b>{item.Year}
                    </div>
                </div>
                <div className="btn-wrap">
                    <button type="button" onClick={()=>{onFav(item)}} className="btn-fav">{starIcon}</button>
                </div>
            </div>
        </div>
    )
}