import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Facility from './components/Facility'

function App() {
  const baseUrl = 'https://demo.darsa.ai/api/'
  const token = 'dfb837d130f7be4990846b6e2ab8d7a18c87de5a'
  const axiosObj = axios.create({
    url: baseUrl,
    headers: {
      Authorization: `Token ${token}`,
    },
  })

  axiosObj()

  axios.interceptors.request.use(async (config) => {
    config.headers.authorization = `Token ${token}`
    return config
  })

  const [facilities, setFacilities] = useState([])

  useEffect(() => {
    if (facilities.length === 0) {
      axios.get(`${baseUrl}facility/`).then((response) => {
        setFacilities(response?.data)
      })
    }
  }, [])

  return (
    <div className='App'>
      {facilities.length === 0 ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div>
          {' '}
          {facilities?.map((facility) => (
            <Facility facility={facility} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
