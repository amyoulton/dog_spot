import React, { Component } from 'react';
import NewReviewForm from '../NewReviewForm';
import { Review } from '../../requests';

class NewReviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newReviewData: {
        rating: '',
        description: '',
      },
    };
    this.createReview = this.createReview.bind(this);
    this.updateReviewData = this.updateReviewData.bind(this);
  }

  createReview() {
    const params = {
      review: {
        rating: this.state.newReviewData.rating,
        description: this.state.newReviewData.description,
      },
    };
    Review.create(this.props.dogId, params).then((review) => {
      //   this.props.history.push(`/dogs/${review.dog_id}`);
      this.props.updateDog();
      this.setState(() => {
        return {
          newReviewData: {
            rating: '',
            description: '',
          },
        };
      });
    });
  }

  updateReviewData(props) {
    this.setState((state) => {
      return {
        newReviewData: {
          ...state.newReviewData,
          ...props,
        },
      };
    });
  }

  render() {
    return (
      <main className="NewReviewPage">
        <NewReviewForm
          createReview={this.createReview}
          newReviewData={this.state.newReviewData}
          updateReviewData={this.updateReviewData}
        />
      </main>
    );
  }
}

export default NewReviewPage;
