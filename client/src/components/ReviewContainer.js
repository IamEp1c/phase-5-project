import React from 'react'


const ReviewContainer = ({review}) => {

    const {content, rating} = review

  return (
    <div id='reviewContainer'>
     <p>{content} || {rating}</p>
     </div>
  )
}

export default ReviewContainer