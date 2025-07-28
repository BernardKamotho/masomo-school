import React from 'react'
import { Link } from 'react-router-dom'

const HomeComponent = () => {
  return (
    <div className='homepage'>
        {/* Navbar */}
        <nav className='navbar navbar-expand-lg narbar-dark bg-success'>
            <div className="container">
                <Link className='navbar-brand text-white' to={'/'} ><b>Masomo School</b></Link>

                <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                    <ul className='navbar nav'>
                        <li className='nav-item'> <a href="#about" className='nav-link text-white'>About</a></li>
                        <li className='nav-item'> <a href="#cbc" className='nav-link text-white'>CBC Curriculum</a></li>
                        <li className='nav-item'> <a href="#why-masomo" className='nav-link text-white'>Why Us?</a></li>
                        <li className='nav-item'> <a href="#login" className='nav-link text-white'>Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>


        {/* Hero Section */}
        <section className="hero position-relative text-white">
            <img src="images/banner1.jpg" alt="Welcome image" className='w-100 img-fluid' style={{ maxHeight: '500px', objectFit : 'cover' }}/>

            <div className="hero-text position-absolute top-50 start-50 translate-middle text-center bg-dark bg-opacity-50 p-4 rounded">
                <h1>Empering Minds Through Competence</h1>
                <p>Masomo School is a leading institution dedicated to providing quality Education rooted in the competency-Based curriculum (CBC) as set by the Kenyan Ministry of Education.</p>
            </div>
        </section>

    </div>
  )
}

export default HomeComponent