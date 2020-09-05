import React from 'react';
import './DogProfile.css';
import roo from './roo.jpg';

export function DogProfile(props) {
  if (props) {
    return (
      <div className="DogProfile">
        <div className="DogProfile-main">
          <div className="DogProfile-header">
            <h1 className="DogProfile-name">{props.name}</h1>
          </div>
          <div className="DogProfile-imgbox">
            <img src={roo} alt="roo" className="DogProfile-img" />
          </div>
          <div className="DogProfile-bio">
            <p>{props.bio}</p>
          </div>
          <div className="DogProfile-facts">
            <p>
              <strong>
                Breed: {props.breed} | Age: {props.age} | Size: {props.size}
              </strong>
            </p>

            <div className="DogProfile-btnsgroup">
              <button
                className="DogProfile-btns"
                onClick={() => props.destroyDog(props.id)}
              >
                Delete
              </button>
              <form action={`/dogs/${props.id}/edit`}>
                <input className="DogProfile-btns" type="submit" value="Edit" />
              </form>
            </div>
          </div>

          {props.traits ? (
            <ul className="ui list">
              Traits:
              {props.traits.map((trait) => (
                <div key={trait.name} className="ui clearing segment">
                  {trait.name}
                </div>
              ))}
            </ul>
          ) : null}
          {props.activities ? (
            <ul className="ui list">
              Activities:
              {props.activities.map((activity) => (
                <div key={activity.name} className="ui clearing segment">
                  {activity.name}
                </div>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="DogProfile-reviews">
          <div className="DogProfile-reviews-box">
            <div className="DogProfile-reviews-header">
              <h1 className="DogProfile-reviews-title">Reviews</h1>
            </div>

            {props.reviews ? (
              <div>
                {props.reviews.map((review) => (
                  <div key={review.id} className="DogProfile-reviewlist">
                    <h2 className="DogProfile-reviewrating">
                      {review.rating}/5
                    </h2>
                    <p>{review.description}</p>
                    <a
                      href={`/users/${review.user.id}`}
                      className="DogProfile-reviewlink"
                    >
                      By: {review.user.first_name} {review.user.last_name}
                    </a>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>is loading...</h1>
      </div>
    );
  }
}

export default DogProfile;
