import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from "react-router-dom";


export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate=useNavigate();



  const signup = async (indv_email, indv_pass, Name, indv_user, Country, indv_bd) => {
    setIsLoading(true)
    setError(null)



    const response = await fetch('/api/indvtrainee/registerIndTrainee', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ indv_email, indv_pass, Name, indv_user, Country, indv_bd })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      localStorage.setItem('type', 'indvtrainee')


      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
      navigate("/IndTrainee")

    }
  }

  return { signup, isLoading, error }
}