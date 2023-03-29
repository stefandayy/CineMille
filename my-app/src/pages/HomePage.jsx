import React from 'react'
import HomeAbout from '../components/HomeAbout'
import HomeListComponent from '../components/HomeListComponent'

const HomePage = ({list}) => {
  return (
    <div id='home'>
    <HomeListComponent list={list}/>
    <HomeAbout/>
    </div>
  )    
}

export default HomePage