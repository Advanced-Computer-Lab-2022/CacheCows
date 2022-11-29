import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (indv_user, indv_pass) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/indvtrainee/loginIndTrainee', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ indv_user, indv_pass })
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
    }
  }

  return { login, isLoading, error }
}