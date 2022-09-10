import axios from 'axios'
import React, { useState } from 'react'
import Floor from './Floor'

export default function Facility(props) {
  const { facility } = props
  const baseUrl = 'https://demo.darsa.ai/api/'
  let isLoading = false
  const [floors, setFloors] = useState([])

  const onClick = () => {
    isLoading = true
    if (floors.length === 0) {
      axios.get(`${baseUrl}floor/`).then((response) => {
        setFloors(response?.data)
        isLoading = false
      })
    }
  }
  return (
    <div>
      <h3>Facility Name: </h3>
      <span>{facility.facility_name}</span>

      <div>
        <button onClick={onClick}>View Floors</button>
        {isLoading && <span>Loading...</span>}
      </div>

      {floors.length != 0 &&
        floors
          .filter((floor) => floor.facility === facility.id)
          ?.map((floor) => <Floor floor={floor} />)}
    </div>
  )
}
