import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)

    const {captain, setCaptain} = useContext(CaptainDataContext)

    const token = localStorage.getItem("captain-token")
    const navigate = useNavigate()

    // console.log("TOKEN",token)

    useEffect(() => {

        if (!token){
            navigate("/captain-login")
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200){
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        }).catch(err => {
            console.log(err)
            localStorage.removeItem("captain-token")
            navigate("/captain-login")
        })

    }, [token, navigate])


    if (isLoading){
        return <div>Loading...</div>
    }

    return <>{children}</>
  
}

export default CaptainProtectWrapper