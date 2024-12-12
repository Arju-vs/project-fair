// rafce
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LandingImg from '../assets/Landingimg.jpg'
import ProjectCard from '../Components/ProjectCard'
import { Card } from 'react-bootstrap'
import { homeProjectsAPI } from '../../services/allAPI'

const Home = () => {
  const navigate = useNavigate()
  const [homeProjects,setHomeProjects] = useState([])
  const [isLogin,setIsLogin] = useState(false)

  console.log(homeProjects);
  
  useEffect(()=>{
    getHomeProjects()
    if(sessionStorage.getItem("token")){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }
  },[])

  const getHomeProjects = async () =>{
    try{
      const result = await homeProjectsAPI()
      console.log(result);
     if(result.status==200){
      setHomeProjects(result.data)
     }
    }catch(err){
      console.log(err);
    }
  }

  const handleNavigateToProject = ()=>{
    // user is logined?
    if(sessionStorage.getItem("token")){
      // authorised user then redirect
      navigate('/projects')
    }else{
      // not an authorised user then alert to login
      alert("Please login to get full access to the project collection"
      )
    }
  }

  return (
    <>
    {/* landing part */}
    <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100 py-5">
      <div className="container">
        <div className="row align items-center">
          <div className="col-lg 6">
            <h1 style={{fontSize:'80px'}}><i className="fa-brands fa-docker"></i>Project Fair</h1>
            <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
            {
              isLogin ?
              <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECTS</Link>
              :
              <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
            }
          </div>
          <div className="col-lg-6">
            <img className='img-fluid' src={LandingImg} alt="" />
          </div>
        </div>
      </div>
    </div>

    {/* Explore Our Projects */}
    <div className="my-5 text-center">
      <h1 className="mb-5">Explore Our Projects</h1>
      <marquee>
        <div className="d-flex">
          {
            homeProjects.map(project=>(
              <div className="me-5">
            <ProjectCard displayData={project} />
          </div>
            ))
          }
        </div>
      </marquee>
    <button onClick={handleNavigateToProject} className="btn btn-link mt-5">CLICK HERE TO VIEW MORE PROJECTS...</button>
    </div>

    {/* Testimonials part */}
    <div className="d-flex justify-content-center align-items-center my-5 flex-column">
      <h1>Our Testimonials</h1>
      <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
        {/* card */}
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
              <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" />
                <div className="d-flex justify-content-center my-2">
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                </div>
               <p style={{textAlign:'justify'}}>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
               </p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
              <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1732703072~exp=1732706672~hmac=bf2ac2f338914c011e42f7df1b7d2ce4717261777ab9d9e37f9bdbf442663321&w=740" alt="" />
                <div className="d-flex justify-content-center my-2">
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                </div>
               <p style={{textAlign:'justify'}}>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
               </p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
              <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://img.freepik.com/free-vector/young-man-with-glasses-avatar_1308-175763.jpg?t=st=1732703013~exp=1732706613~hmac=056fb8a8cafecce84f6a9322f67aa60d700a0c68ab1126b0162aa0ccfb5cf181&w=740" alt="" />
                <div className="d-flex justify-content-center my-2">
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                </div>
               <p style={{textAlign:'justify'}}>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
               </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
    </>
  )
}

export default Home