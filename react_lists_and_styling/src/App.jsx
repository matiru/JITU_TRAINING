import './App.css'
import List from './list'

function App() {

  const movie_genres=
    [{
      "id": 1,
      "genres": "Horror"
    }, {
      "id": 2,
      "genres": "Comedy|Drama"
    }, {
      "id": 3,
      "genres": "Comedy"
    }, {
      "id": 4,
      "genres": "Musical"
    }, {
      "id": 5,
      "genres": "Adventure|Drama"
    }, {
      "id": 6,
      "genres": "Documentary"
    }, {
      "id": 7,
      "genres": "Comedy|Drama"
    }, {
      "id": 8,
      "genres": "Animation|Children|Comedy|Musical"
    }, {
      "id": 9,
      "genres": "Action|Crime|Thriller"
    }, {
      "id": 10,
      "genres": "Comedy"
    }]
  //styling method  as an object

  const styles ={
    color:"green",
    backgroundColor:"red"

  }

  return (
    <div className="App" style={styles}>
      {/* // inline styling  */}
      <h1 style={{color:"gold",fontSize:"3rem"}}>Movie Genres</h1>
      <ul>
         {/* <li>{movie_genres[0].genres}</li> */}
         {/* {movie_genres.map(genre=><li  key={genre.id}>{genre.genres}</li> )} */}
         { movie_genres.map((genre)=><List key={genre.id} genre={genre}/>)}
         
l
      </ul>
   
    
    </div>
  )
}

export default App
