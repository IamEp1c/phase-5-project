import React from 'react'
import ReviewContainer from './ReviewContainer'
import { useState, useEffect } from 'react'
import { setReviews } from './features/reviews'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { render } from 'react-dom'





const Reviews = () => {

    const [ratingEdit, setRatingEdit] = useState("")

    const dispatch = useDispatch()

    const [newReview, setNewReview] = useState("")

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

    function handleUpdateReviews(id){
      console.log(id)
      fetch(`/reviews/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          content: enterReview,
          rating: ratingEdit

        }),
        headers: {
          'Content-type': 'application/json'
        },
      })
        .then(resp => {
        setEnterReview("")
        setRatingEdit("")
      })
      .then(handleUpdate())
    }

    function handleDelete(id){
      console.log(id)
      console.log("hello")
      fetch(`/reviews/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
      })
      .then(handleUpdate())
    }

    
    const renderReviews = reviews.map(review => {
        return <ReviewContainer review={review} handleUpdateReviews={handleUpdateReviews} enterReview={enterReview} setEnterReview={setEnterReview} ratingEdit={ratingEdit} setRatingEdit={setRatingEdit} handleDelete={handleDelete}/>
    })



    function handleSubmitReview(e){
      e.preventDefault()
      const obj = {
        content: newReview,
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
        <input type="text" value={newReview} onChange={(e) => setNewReview(e.target.value)}/>

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
        <div className="whiteBox">
        {renderReviews}
        </div>
    </>



  )
}

export default Reviews