import React from 'react';
import './UserProfile.css';
import amy from './amy.jpg';

export function UserProfile(props) {
  return (
    <div className="UserProfile">
      <div className="UserProfile-box">
        <div className="UserProfile-imgbox">
          <img src={amy} alt="profilepic" className="UserProfile-img" />
        </div>
      </div>
      <div className="UserProfile-infobox">
        <div className="UserProfile-infoheader">
          <h2 className="UserProfile-title">
            {props.first_name} {props.last_name}
          </h2>
        </div>
        <p>{props.bio}</p>
        <div className="email">Contact: {props.email}</div>
        <form action={`/users/${props.id}/edit`}>
          <input className="UserProfile-btns" type="submit" value="Edit" />
        </form>
      </div>
    </div>
  );
}
export default UserProfile;
