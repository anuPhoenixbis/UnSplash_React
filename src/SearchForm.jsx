import React from 'react'
import { useGlobalContext } from './context';

const SearchForm = () => {
  const{setSearchTerm} = useGlobalContext();
  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(e.target.elements);
    const searchValue = e.target.elements.search.value
    if(!searchValue) return;
    setSearchTerm(searchValue);
    e.target.elements.search.value='';
    // console.log(searchValue)

  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" className="form-input search-input" name='search' placeholder='cat'/>
        <button className="btn" type='search'>search</button>
      </form>
    </section>
  )
}

export default SearchForm