import React from 'react'
import { Action, Category, Propertylist, Team } from '../../../components'

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