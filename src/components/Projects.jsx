import React from 'react';
import ProjectItem from './ProjectItem';
import crypto from '../assets/crypto.jpg';
import map from '../assets/map.jpg';
import netflix from "../assets/netflix.jpg";
import dashboard from "../assets/dashboard.jpg";


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et blanditiis, quos voluptatem in, alias minus eligendi exercitationem, optio sed harum esse quisquam veniam. Pariatur vel impedit temporibus totam rerum.</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={crypto} title='Crypto App'/>
        <ProjectItem img={map} title='Map App'/>
        <ProjectItem img={netflix} title='Netflix App'/>
        <ProjectItem img={dashboard} title='Dashboard App'/>
      </div>
    </div>
  )
}

export default Projects