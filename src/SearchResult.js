import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,

}) {
  return (
    <div className='searchResult'>
    <img src={img} alt="" />    
       <FavoriteBorderIcon className ="searchResult__heart" /> 
        
        <div className='searchResult__info'>

            <section className='searchResult__infoTop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>___</p>
                <p>{description}</p>
            </section>
            <section className='searchResult__infoBottom'>
                 <figure className='searchResult__stars'>
                     <StarIcon className='searchResult__star' />
                     <p>
                         <strong>{star}</strong>
                     </p>
                 </figure>
                 <div className='searchResults__price'>
                     <h2>{price}</h2>
                     <p>{total}</p>
                 </div>
            </section>

        </div>
    </div>
  )
}

export default SearchResult