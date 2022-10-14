import React from 'react'
import { Navigation,Footer,Head } from '../components/reusables/Components'
import Video from "../components/video/Video"
const homepage = () => {
  return (
    <div>
        <Head title='home'/>
        <Navigation />
         <Video/>

      
    </div>
  )
}

export default homepage
