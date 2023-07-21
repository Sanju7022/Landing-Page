import React from 'react'

function About(props) {
  return (
    <div id='about'>
      <div className='about-image'>
         <img src={props.image} alt="" />
      </div>
      <div className='about-text'>
         <h2>{props.title}</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate adipisci ullam ipsam inventore ipsa, dolor sapiente cupiditate repellat sit doloremque, deserunt reiciendis amet, asperiores possimus! Mollitia eligendi minus vel quasi doloremque cumque repudiandae ab error.</p>
         <button>{props.button }</button>
         
      </div>
    </div>
  )
}

export default About