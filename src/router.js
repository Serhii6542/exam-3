import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home.jsx'
import Layout from './layouts/Layout.jsx'
import NotFound from './pages/NotFound.jsx'
import MoviePage from './pages/Movie.jsx'
import FavListPage from './pages/FavListPage.jsx'

export default createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: 'fav_list',
        children: [
          {
            index: true,
            Component: FavListPage,
          },
          {
            path: 'movie/:imdbID',
            Component: MoviePage
          }
        ]
      },
      {
        path: 'movie/:imdbID',
        Component: MoviePage
      },
      {
        path: '*',
        Component: NotFound
      }
    ]
  }
  
])