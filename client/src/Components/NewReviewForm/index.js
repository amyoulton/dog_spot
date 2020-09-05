import React from 'react';
import './NewReviewForm.css';

function NewReviewForm(props) {
  const { newReviewData, updateReviewData } = props;

  function handleSubmit(event) {
    event.preventDefault();
    props.createReview();
  }

  function handleReviewInput(event) {
    const { currentTarget } = event;
    const { value, name } = currentTarget;
    updateReviewData({ [name]: value });
  }

  return (
    <div className="NewReviewForm">
      <div className="NewReviewForm-box">
        <div className="NewReviewForm-header">
          <h1 className="NewReviewForm-title">Leave a Review</h1>
        </div>
        <form className="NewReviewForm-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="rating">Rating (1-5)</label>
            <br />
            <input
              name="rating"
              id="rating"
              value={newReviewData.rating}
              onChange={handleReviewInput}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="description">Description</label>
            <br />
            <textarea
              className="NewReviewForm-description"
              name="description"
              id="description"
              value={newReviewData.description}
              onChange={handleReviewInput}
            ></textarea>
          </div>
          <br />
          <input className="NewReviewForm-btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default NewReviewForm;
