import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from "react-router-dom";


export const useLogin = () => {
  const {user} = useAuthContext();

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate=useNavigate();


  const login = async (corp_user, corp_pass) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/corpTrainee/loginCorpTrainee', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ corp_user, corp_pass })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      localStorage.setItem('type', 'corptrainee')

     if( json.acceptTerms === 'true'){
      localStorage.setItem('terms', 'true')
     }
     else{
      localStorage.setItem('terms', 'false')

     }


      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
      if (json.acceptTerms === 'true' ){
       


        //window.location.href=`/Home?userId=${user._id}`
        navigate(`/Home?userId=${user._id}`)
    }
      else { navigate("/Termsandconditionscorp") }

    }
  }

  return { login, isLoading, error }
}