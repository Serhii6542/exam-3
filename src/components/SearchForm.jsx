import { useState } from 'react'

export default function SearchForm({onSearch}){
    const [search, setSearch] = useState('')
    const [select, setSelect] = useState('')
    const [year, setYear] = useState('')


    function submitHeandler(e){
        e.preventDefault()
        onSearch(search,select,year)
    }

     
    return <form onSubmit={submitHeandler}>
            <div className="wrap-form">
                <div className="wrap-search">
                    <div className="inp-wrap">
                        <label htmlFor="name" className='desc-search'>Enter name movie</label>
                        <input type="text" id='name' placeholder='Enter name movie' className="search" onChange={(e)=>setSearch(e.target.value)} value={search}/>
                    </div>
                    <div className="wrap-year-select">
                        <label htmlFor="genre" className='desc-search'>Genre</label>
                        <select name="type-movies" id='genre' className="search" onChange={(e)=>setSelect(e.target.value)} value={select}>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                            <option value="episode">Episode</option>
                        </select>
                    </div>
                    <div className="wrap-year-select">
                        <label htmlFor="year" className='desc-search'>Enter year movie</label>
                        <input type="number" id='year' className='search' placeholder='Enter year' onChange={(e)=>setYear(e.target.value)} value={year} />
                    </div>
                </div>
                <div className="btn-search">
                    <button type="submit">Search</button>
                </div>
            </div>
        </form>
            
}