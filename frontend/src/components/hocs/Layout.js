import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar'


const layout = (props) => {
  return (
    <div>
        <NavigationBar />
        {props.children}
    </div>
  )
}

export default layout