import React from 'react'
import { useDataProvider } from '../provaiders/Data.provaider';

const Home = () => {
  const { popMovies } = useDataProvider();
  return (
    <div>
      {popMovies?.map((c,i)=> (<h3 key={c.id}>{i+ 1 +". "}{c.title}</h3>))}
    </div>
    
  )
}

export default Home