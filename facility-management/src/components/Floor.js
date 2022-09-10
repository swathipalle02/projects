import axios from 'axios'
import React, { useState } from 'react'
import Sector from './Sector'

export default function Floor(props) {
  const { floor } = props
  const baseUrl = 'https://demo.darsa.ai/api/'
  let isLoading = false
  const [sectors, setSectors] = useState([])

  const onClick = () => {
    isLoading = true
    if (sectors.length === 0) {
      axios.get(`${baseUrl}sector/`).then((response) => {
        setSectors(response?.data)
        isLoading = false
      })
    }
  }
  return (
    <div>
      <h3>Floor Name: </h3>
      <span>{floor.floor_name}</span>

      <div>
        <button onClick={onClick}>View Sectors</button>
        {isLoading && <span>Loading...</span>}
      </div>

      {sectors.length != 0 &&
        sectors
          .filter((sector) => sector.floor === floor.id)
          ?.map((sector) => <Sector sector={sector} />)}
    </div>
  )
}
