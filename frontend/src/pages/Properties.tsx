import React from 'react'
import { Action, Category, Propertylist, Team } from '../containers'

const Properties = () => {
  return (
    <div className='container bg-bg-color'>
      <Category />
      <Propertylist />
      <Action />
      <Team />
    </div>
  )
}

export default Properties