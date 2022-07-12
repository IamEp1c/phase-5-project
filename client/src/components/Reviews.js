import React from 'react'
import ReviewContainer from './ReviewContainer'
import { useState, useEffect } from 'react'
import { setReviews } from './features/reviews'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { render } from 'react-dom'





const Reviews = () => {

    const dispatch = useDispatch()

    const [enterReview, setEnterReview] = useState("")

    const [rating, setRating] = useState("")

    const [update, triggerUpdate] = useState(false)


    const user = useSelector(state => state.user.value)


    useEffect(() => {
        fetch("/reviews")
        .then(resp => resp.json())
        .then(data => {
            dispatch(setReviews(data))
        })
    }, [update])

    const reviews = useSelector(state => state.reviews.value)
    
    const renderReviews = reviews.map(review => {
        return <ReviewContainer review={review}/>
    })



    function handleSubmitReview(e){
      e.preventDefault()
      const obj = {
        content: enterReview,
        rating: rating,
        user_id: user.id

      }
      fetch("/reviews", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)

      })
      .then(handleUpdate())
    }


    function handleUpdate(){
      triggerUpdate(prev => !prev)
    }

  return (
    <>
      <form id='reviewForm' onSubmit={handleSubmitReview}>
        <div>Enter a review here!</div>
        <input type="text" value={enterReview} onChange={(e) => setEnterReview(e.target.value)}/>

        <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
          <option>rating</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button>Submit</button>
      
        </form> 
        {renderReviews}
        </>



  )
}

export default Reviews