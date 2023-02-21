const LEJU_ADMIN_TOKEN = 'leju_admin_token'
const LEJU_USER_INFO = 'leju_user_info'
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

export const saveUserInfo = (userInfo) => {
  if (userInfo) {
    window.localStorage.setItem(LEJU_USER_INFO, JSON.stringify(userInfo))
  }
}

export const getUserInfo = () => {
  const userInfoStr = window.localStorage.getItem(LEJU_USER_INFO)
  if (userInfoStr) {
    return JSON.parse(userInfoStr)
  }
  return null
}

export const removeUserInfo = () => {
  window.localStorage.removeItem(LEJU_USER_INFO)
}
