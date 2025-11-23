import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'
import { useGlobalContext } from './context'

const url=`https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`;

const Gallery = () => {
  const {searchTerm} = useGlobalContext();
  const response = useQuery({
    queryKey: ['images',searchTerm],// triggers refetch when searchTerm is changed 
    queryFn: async () =>{
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    }
  })
  // console.log(response)
  if(response.isLoading){
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  }
  if(response.isError){
    return (
      <section className="image-container">
        <h4>Error...</h4>
      </section>
    )
  }

  const results = response.data.results
  if(results.length < 1){
    return(
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    )
  }
  return (
    <section className="image-container">
      {results.map((item)=>{
        const url = item?.urls?.regular
        return <img src={url} key={item.id} alt={item.alt_description}></img>
      })}
    </section>
  )
}

export default Gallery