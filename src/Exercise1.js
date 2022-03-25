import React from 'react'
import './Exercise1.css'

class Exercise1 extends React.Component{
   render(){
       const {name, age, city} =this.props

       return(
           <>
                <h1>{name}</h1>
                <h2>{age}</h2>
                <h3>{city}</h3>
                <p>-------------------</p>
           </>
       )
   }
}
export default Exercise1