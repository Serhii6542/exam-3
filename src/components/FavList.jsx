import MovieItem from "./MovieItem"

export default function FavList({movies, onDetail, onFav}){
    return (
        <div id="fav-movies-list">
            {movies.map(item => <MovieItem item={item} key={item.imdbID} onDetail={onDetail} onFav={onFav}/>)}
        </div>
    )
}