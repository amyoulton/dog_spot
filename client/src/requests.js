const BASE_URL = `http://localhost:3000/api/v1`;
export const Dog = {
  index() {
    return fetch(`${BASE_URL}/dogs`, {
      credentials: 'include',
    }).then((res) => {
      console.log(res);
      return res.json();
    });
  },
  create(params) {
    console.log(params);
    return fetch(`${BASE_URL}/dogs`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  get(id) {
    return fetch(`${BASE_URL}/dogs/${id}`, {
      credentials: 'include',
    }).then((res) => res.json());
  },

  destroy(id) {
    return fetch(`${BASE_URL}/dogs/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then(() => fetch(`${BASE_URL}/dogs`));
  },
  update(id, params) {
    return fetch(`${BASE_URL}/dogs/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
};

export const Trait = {
  create(dog_id, params) {
    console.log(params);
    return fetch(`${BASE_URL}/dogs/${dog_id}/traits`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  get(dog_id) {
    return fetch(`${BASE_URL}/dogs/${dog_id}`, {
      credentials: 'include',
    }).then((res) => res.json());
  },
  update(dog_id, params) {
    return fetch(`${BASE_URL}/dogs/${dog_id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
};

export const Review = {
  create(dog_id, params) {
    console.log(params);
    return fetch(`${BASE_URL}/dogs/${dog_id}/reviews`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  update(dog_id, id, params) {
    return fetch(`${BASE_URL}/dogs/${dog_id}/reviews/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  get(id) {
    return fetch(`${BASE_URL}/dogs/${id}`, {
      credentials: 'include',
    }).then((res) => res.json());
  },
};

export const Activity = {
  create(dog_id, params) {
    console.log(params);
    return fetch(`${BASE_URL}/dogs/${dog_id}/activities`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  get(dog_id) {
    return fetch(`${BASE_URL}/dogs/${dog_id}`, {
      credentials: 'include',
    }).then((res) => res.json());
  },
  update(dog_id, params) {
    return fetch(`${BASE_URL}/dogs/${dog_id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
};

export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => {
      return res.json();
    });
  },
  current() {
    return fetch(`${BASE_URL}/session/current`, {
      method: 'GET',
      credentials: 'include',
    }).then((res) => res.json());
  },

  destroy() {
    return fetch(`${BASE_URL}/session`, {
      method: 'DELETE',
      credentials: 'include',
    }).then((res) => res.json());
  },
};

export const User = {
  get(id) {
    return fetch(`${BASE_URL}/users/${id}`, {
      credentials: 'include',
    }).then((res) => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  update(id, params) {
    return fetch(`${BASE_URL}/users/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
};

export default {
  Dog,
  Session,
  User,
  Trait,
  Activity,
  Review,
};
