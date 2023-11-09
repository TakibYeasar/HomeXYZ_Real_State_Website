import React from 'react'
import { About, Action, Category, Propertylist, Team, Testimonial } from '../containers'

const Homepage = () => {
    return (
        <div className='container bg-bg-color'>
            <Category />
            <About />
            <Propertylist />
            <Action />
            <Team />
            <Testimonial />
        </div>
    )
}

export default Homepage