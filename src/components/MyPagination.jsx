import { useEffect, useState } from "react";

function Pagination(props){
  const { total, page } = props
  const [isFirst, setFirst] = useState(false);
  const [isLast, setLast] = useState(false);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [pages, setPages] = useState([]);

  const current = parseInt(page);

  const size = 5
  
  useEffect(()=>{
    calcFromTo()
  }, [page]);

  const calcFromTo = () => {
    const halfSize = Math.floor(size/2);
    if(current < size){
      setFrom(1);
      setTo(size);
      setLast(Boolean(total > size))
      setFirst(false);
    }else if(current >= size && current <= (total - (size - 1))){
      setFrom(+current - halfSize)
      setTo(+current + halfSize)
      setFirst(true)
      setLast(true)
    }else{
      setFrom(total - (size - 1))
      setTo(total)
      setFirst(Boolean(total > size))
      setLast(false)
    }

    if(from < 1){
      setFrom(1)
    }
    if(to>total){
      setTo(total)
    }
  }

  const gotoHandler = (e) => {
    props.gotoHandler(e.target.dataset.page)
  }

  const prevPage = current !== 1 ? 
    <li className="page-item">
      <button data-page={current - 1} onClick={gotoHandler} className="page-link">&laquo;</button>
    </li>
     : ''

  const nextPage = current !== total && total != 0 ?
    <li className="page-item">
      <button data-page={current + 1} onClick={gotoHandler} className="page-link">&raquo;</button>
    </li>
     : ''

  const firstPage = isFirst
    ? <li className={`page-item${current === 1 ? ' active': ''}`}>
      <button data-page="1" onClick={gotoHandler} className="page-link">1</button>
    </li>
   : ''

  const firstDevider = isFirst ? <li className="page-item"><span className="page-link">...</span></li> : ''

  const lastPage = isLast ?
    <li className={`page-item${current === total ? ' active': ''}`}>
      <button data-page={total} onClick={gotoHandler} className="page-link">{total}</button>
    </li>
   : ''

   const lastDevider = isLast ? <li className="page-item"><span className="page-link">...</span></li> : ''

  useEffect(()=>{
    const arPages = [];
    for(let i = from; i <= to; i++){
      arPages.push(<li className={`page-item${current === i ? ' active': ''}`} key={i}>
        <button data-page={i} onClick={gotoHandler} className="page-link">{i}</button>
      </li>)
    }
    setPages(arPages);
  }, [from, to, page])

  return (
    <div className="wrap-pagin">
		  <ul className="pagination">
        { prevPage }
        { firstPage }
        { firstDevider }
        { pages }
        { lastDevider }
        { lastPage }
        { nextPage }
      </ul>
    </div>
  )
}

export default Pagination