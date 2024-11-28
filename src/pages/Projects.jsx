// rafce
import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

const Projects = () => {
  return (
    <>
    <Header/>
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center py-5">
        <h1>All Projects</h1>
        <input type="text" placeholder='Search Projeccts by their Language' className='form-control w-25'/>
      </div>
      <Row>
        <Col sm={12} md={6} lg={4} >
        <ProjectCard />
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Projects