import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from "react-router-dom";


export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate=useNavigate();


  const login = async (admin_user, admin_pass) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/admins/loginAdmin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ admin_user, admin_pass })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      localStorage.setItem('type', 'admin')

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
      window.location.href=`/Home?userId=${user._id}`

        navigate("/Admin")

    }
  }

  return { login, isLoading, error }
}