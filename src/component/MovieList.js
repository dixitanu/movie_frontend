

import React, { useContext,useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import './MovieCard.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { SearchContext } from './SearchContext';
import {GenesContext} from './GenesContext';


export default function MovieList(){

  const { query } = useContext(SearchContext);
  const { genes} = useContext(GenesContext);


  const [movie, setMovies] = useState([]);
 
  const [page,setPage] = useState(1);
  const theme = useTheme();
  const match =useMediaQuery(theme.breakpoints.down('sm'));


  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  };

  console.log(genes);


  useEffect(() => {
   
    if(query.length!==0)
      {
    const apiKey = '814bee9520fed7067401b20ee2eaec2c';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`;

    axios.get(url)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data from TMDb', error);
      });

    }

    else{


      if(genes){

      
         const apiKey = '814bee9520fed7067401b20ee2eaec2c';
    const url = `https://api.themoviedb.org/3/movie/${genes}?api_key=${apiKey}&page=${page}`;

    axios.get(url)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data from TMDb', error);
      });

    }
    else{
      const apiKey = '814bee9520fed7067401b20ee2eaec2c';
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`;
  
      axios.get(url)
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          console.error('Error fetching data from TMDb', error);
        });
    }

    }

  

  }, [query,page,genes]);


  // useEffect(() => {
   
 
  // }, [page]);
     



    return (
                         
        <div style={{display:'flex',flexDirection:'column'}}>
      
        <div style={{display:'flex',flexDirection:'row'}}>
        {!match? <div className='card-grid'>
            {movie.map((item)=>(
        <MovieCard mov={item} />
        ))}
        </div>:
         <div className='mobile-grid'>
         {movie.map((item)=>(
     <MovieCard mov={item} />
     ))}
     </div>
    }
        </div >
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Button  onClick={loadMore} style={{marginBottom:'10px',width:"200px"}} variant="contained">Load More...</Button>
        </div>
        </div>
      );

  

}