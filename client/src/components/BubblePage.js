import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utilities/axiosWithAuth'

import Bubbles from './Bubbles'
import ColorList from './ColorList'

const BubblePage = props => {
  const [colorList, setColorList] = useState([])
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .get('/api/colors')
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => {
        console.log(err)
        alert('Error retrieving colors', props)
      })
  }, [props])
  return (
    <div className="BubblePageStyle">
      <ColorList props={props} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  )
}

export default BubblePage
