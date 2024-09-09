import React from 'react'
import appk from '../media/welearn.apk'
import appk2 from '../media/welearnnew.apk'
import './Waitlist.css';

export const Waitlist = () => {
  return (
    <div className='waitlist section__padding' id='waitlist'>
        <h1>Join Welearn</h1>
        <p>Join us today to hire professional instructors to handle your kids</p>
        <a href={appk2}><button>Download App</button></a>
    </div>
  )
}