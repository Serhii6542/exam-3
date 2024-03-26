import MyCard from "../components/MyCard"
import FavList from "../components/FavList"
import { useState } from "react"
export default function FavListPage(){
    const [favList, setFavList] = useState(JSON.parse(localStorage.getItem('fav_movie')) || [])

    const detailHandler = async (id) => {
        if(inProgress){
          return false
        }
        setInProgress(true)
        setShow(true)
        const url = import.meta.env.VITE_DEV_MODE
        ? './data/movies.json'
        : `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${id}`
    
        const response = await fetch(url)
        const json = await response.json()
        setInProgress(false)
        setMovieData(json)
        
    }

    const favHandler = (item)=>{
        const list = JSON.parse(localStorage.getItem("fav_movie")) || []
        const index = list.findIndex((el)=> el.imdbID === item.imdbID)
        if(index===-1){
            list.push(item)
        }else{
            list.splice(index, 1)
        }
        localStorage.setItem("fav_movie", JSON.stringify(list))
        setFavList(list)
    }
    return <MyCard title="Fav movies">    
        <FavList movies={favList} onDetail={detailHandler} onFav={favHandler}/>
    </MyCard>
}