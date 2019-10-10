
export const signup = (user_info) => (
  $.ajax({
    method: "POST",
    url: 'api/users',
    data: {
      user: user_info
    }
  })
);

export const login = (user_info) => (
  $.ajax({
    method: "POST",
    url: 'api/session',
    data: {
      user: user_info
    }
  })
);

export const logout = () => (
  $.ajax({
    method: "DELETE",
    url: 'api/session',
  })
);

export const fetchAllUsers = () => (
  $.ajax({
    method: "GET",
    url: 'api/users'
  })
)