import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListing from '../components/JobListing';
import ViewAllJobs from '../components/ViewAllJobs';
const HomePage = () => {
  return (
    <div>
      <Hero/>
      <HomeCards/>
      <JobListing isHome={true} />
      <ViewAllJobs/>
      
    </div>
  )
}

export default HomePage
