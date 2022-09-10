import React from 'react'

export default function Sector(props) {
  const { sector } = props
  return (
    <div>
      <h3>Sector Name: </h3>
      <span>{sector.sector_name}</span>
    </div>
  )
}
