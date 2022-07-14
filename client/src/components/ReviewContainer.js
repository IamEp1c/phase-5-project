import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


const ReviewContainer = ({review, handleUpdateReviews, enterReview, setEnterReview, ratingEdit, setRatingEdit, handleDelete}) => {
  const {content, rating, user_id, id} = review

  const user = useSelector(state => state.user.value)
  console.log(user.id)

  const reviews = useSelector(state => state.reviews.value)

  const [toggleEdit, setToggleEdit] = useState(false)
 

  function handleToggleEdit(content, rating){
    setEnterReview(content)
    setRatingEdit(rating)

    setToggleEdit(state => !state)
  
  }


    function editReview(){
     return ( <>
        
        <input type="text" value={enterReview} onChange={(e) => setEnterReview(e.target.value)}/>
        <select id="rating" value={ratingEdit} onChange={(e) => setRatingEdit(e.target.value)}>
          <option>rating</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button onClick={() => {setToggleEdit(state => !state); handleUpdateReviews(id)}}>Submit</button>
      </>
     )
    }

  return (
  <div id='reviewContainer'>
      {/* what your saying below is that to "render the user.id that is equal to the review.id aka the 1st post" */}
 
      {
        toggleEdit ? 
        editReview()
        : ""
      }
   
     <p>{content} | Rating: {rating}
     {/* <br /> */}
     {/* { user.id }, { user_id } */}

      { user.id === user_id ?
    <>
    <br />
        <button onClick={() => handleToggleEdit(content, rating)}>&#9999;&#65039;</button> <button onClick={() => handleDelete(id)}>&#10060;</button>
    </>
      : ""
} </p>
  </div>
  )
}

export default ReviewContainer