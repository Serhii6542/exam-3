import { useEffect, useState } from 'react'
import MyCard from './components/MyCard';
import SearchForm from './components/SearchForm';
import MoviesList from './components/MoviesList';
import MyPagination from './components/MyPagination';
import { toast } from 'react-toastify';


function App() {
  const [moviesList, setMoviesList] = useState([])
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [favList, setFavList] = useState(JSON.parse(localStorage.getItem('fav_movie')) || [])
  const [type, setType] = useState('')
  const [year, setYear] = useState()
  const [isLoader, setLoader] = useState(false)

  const searchHeandler = async (search, type, year)=>{
    setSearch(search)
    setType(type)
    setYear(year)
  }

  function CheckYear(y){
    if(y < 1800 || y > new Date().getFullYear()){
      return false
    }
  }
  const fetchMovies = async ()=>{
    if(search==='')
    return false
    if(year!==''){
      CheckYear(year)
    }
    setLoader(true)
    try{
      
      const url = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${search}&type=${type}&page=${page}&y=${year}`
      const response = await fetch(url);
      const json = await response.json();
      const totalResults = +json?.totalResults || 0;
      if(json.Response === 'True'){
        setMoviesList(json.Search || [])
        setTotal(totalResults)
      } else{
        setLoader(false)
        toast.error(json.Error)
      }
      setTimeout(()=>{
        setLoader(false)
      }, 2000)
    }catch(err){
      setLoader(false)
      toast.error(err)
    }
    
  }

  useEffect(()=>{
    if(isLoader)
      return
    fetchMovies()
  }, [search,type,page,year])


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

  const gotoHandler = (newPage)=>{
    setPage(newPage)
  }

  return (<>
    {isLoader && <div className="loader"><span></span></div>}
    <MyCard className="form">
      <SearchForm onSearch={searchHeandler}/>
    </MyCard>
    <MyCard className="movie-list" title="Movies List">
      <MoviesList movies={moviesList} onFav={favHandler}/> 
      {total>10 ? <MyPagination page={page} total={total} gotoHandler={gotoHandler}/> : <></>}
    </MyCard>
  </>)
}

export default App
