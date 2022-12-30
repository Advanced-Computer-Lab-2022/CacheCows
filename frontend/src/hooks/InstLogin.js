import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from "react-router-dom";


export const useLogin = () => {
  const {user} = useAuthContext();
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [userid, setID] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate=useNavigate();


  const login = async (instructor_user, instructor_pass) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/instructors/loginInstructor', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ instructor_user, instructor_pass })
    })
    const json = await response.json()


    if (!response.ok) {
      setIsLoading(false)
      //setError('incorrect credentials')
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      setID(JSON.stringify(json._id))
      localStorage.setItem('user', JSON.stringify(json))
      localStorage.setItem('type', 'instructor')

     if( json.acceptTerms === 'true'){
      localStorage.setItem('terms', 'true')
     }
     else{
      localStorage.setItem('terms', 'false')

     }

      //localStorage.setItem('acceptTerms', JSON.stringify(acceptTerms))


      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
      const acceptTerms = localStorage.getItem('terms')
      if (json.acceptTerms === 'true' ){
       


        window.location.href=`/Home?userId=${user._id}`
        //navigate(`/Home?userId=${user._id}`)
    }
    else if (json.acceptTerms === 'false' ) { navigate("/Termsandconditions") }

    
  }
}

  return { login, isLoading, error }
}
