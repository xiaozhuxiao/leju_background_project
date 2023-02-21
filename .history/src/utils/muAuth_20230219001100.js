const LEJU_ADMIN_TOKEN = 'leju_admin_token'
export const setToken = (token) => {
  window.localStorage.setItem(LEJU_ADMIN_TOKEN, token)
}

export const getToken = () => {
  const token = window.localStorage.getItem(LEJU_ADMIN_TOKEN)
  if (token) {
    return token
  } else {
    return null
  }
}

export const removeToken = () => {
  window.localStorage.removeItem(LEJU_ADMIN_TOKEN)
}
