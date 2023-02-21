const LEJU_ADMIN_TOKEN = 'leju_admin_token'
export setTiken =(token)=>{
  window.localStorage.setItem(LEJU_ADMIN_TOKEN,token)
}