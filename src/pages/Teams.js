import React from 'react'
import smile from '../images/smiling-group-clients.png'
import man from '../images/man-checking-mobile.png'
import lady from '../images/lady1.jpg'
import '../App.css';
import { Link } from 'react-router-dom';

function Teams() {
  return (
    <>
    <div class="container mt-5">
        <div class="row hero">
            <div class="col-12 col-md-6">
                <h1 class="display-3"><span class="text-blue">Power up</span> your <br/>teams</h1>
               
                <p class="my-md-5 lh-lg">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut aliquid <br/>
                    exercitationem doloremque! Sunt cupiditate inventore dolorem alias sapiente molestiae magnam odit soluta omnis illo <br/>
                     temporibus quas vero suscipit, quam et eligendi excepturi qui vitae similique. Odio fugiat consequatur hic?
                </p>
                <button class="btn bg-primary text-light rounded-pill p-4 px-5 fw-bold me-md-4">Start for free</button>
                <button class="btn btn-outline-dark text-dark border border-4 border-dark rounded-pill p-4 px-5 fw-bold">Contact Sales</button>
    
            </div>
            <div class="col-md-6 text-center">
                <img src={smile} alt="" class="img-fluid"/>
            </div>
        </div>
    </div>

    <div class="container mt-5 mb-5 text-center spacer">
        <h1 class="display-3 heavy-font">Streamline task, extend team <br/> reach</h1>
    </div>

  
    <div class="container">
        <div class="row my-5">
            <div class="col-md-6">
                <img src={man} alt="" class="img-fluid" width="70%"/>
            </div>
            <div class="col-md-6">
                <p class="fw-bold lead mb-3 text-blue">AUTOMATED ASSIGNMENT</p>
                <h1 class="heavy-font">Control how your team gets booked</h1>
                <p class="my-5 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto cupiditate exercitationem adipisci facilis iusto ratione rem facere necessitatibus blanditiis natus quod magni ipsa molestias voluptas eos dicta, cumque labore sapiente sunt. Voluptate minus iste adipisci ipsa quibusdam doloribus dolorum reiciendis, harum, eius dicta vitae aliquam laborum doloremque optio cumque.</p>
            </div>
        </div>
    </div>

    
    <div class="container mt-5 spacer">
        <p class="text-center text-blue fw-semibold">SOLUTIONS</p>
        <h3 class="text-center display-5 fw-bold">The right Calendly for the work you do</h3>
        <div class="row my-5">
           <div class="col-md-3 col-6 ">
            <div class="card shadow">
                <img src={lady} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Sales</h5>
                  <p class="card-text mb-5 mt-4">Some quick example text to build </p>
                  <Link to={''} class="btn text-blue fw-bold ">Go somewhere <span class="mx-3"></span></Link>
                </div>
              </div>
           </div>

           <div class="col-md-3 col-6">
            <div class="card shadow">
                <img src={lady} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Recruiting</h5>
                  <p class="card-text mb-5 mt-4">Some quick example text to build </p>
                  <Link to={''} class="btn text-blue fw-bold ">Go somewhere <span class="mx-3"></span></Link>
                </div>
              </div>
           </div>

           <div class="col-md-3 col-6">
            <div class="card shadow">
                <img src={lady} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Customer success</h5>
                  <p class="card-text mb-5 mt-4">Some quick example text to build </p>
                  <Link href="#" class="btn text-blue fw-bold ">Go somewhere <span class="mx-3"></span></Link>
                </div>
              </div>
           </div>

           <div class="col-md-3 col-6">
            <div class="card shadow">
                <img src={lady} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Education</h5>
                  <p class="card-text mb-5 mt-4">Some quick example text to build </p>
                  <Link href="#" class="btn text-blue fw-bold ">Go somewhere <span class="mx-3"></span></Link>
                </div>
              </div>
           </div>
            
        </div>
    </div>

    <div class="container spacer">
        <div class="row">
            <div class="col-6 col-md-3">
                <h1 class="heavy-font text-blue my-3">Easy <br/>ahead</h1>
                <p class="my-4">We take the work out of connecting with others so you can accomplish more.</p>
                <div class="input-group my-5 w-100">
                    <select class="form-select py-3" id="inputGroupSelect03" aria-label="Example select with button addon">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
            </div>
            <div class=" col-6 col-md-3 gap-3">
                <h4 class="heavy-font text-black my-3">About</h4>
                <ul>
                    <li>About Calendly</li>
                    <li>Contact Sales</li>
                    <li>Newsroom</li>
                    <li>Careers</li>
                    <li>Security</li>
                </ul>
            </div>
            <div class="col-md-3 col-6">
                <h4 class="heavy-font text-black my-3">Solutions</h4>
                <ul>
                    <li>About Calendly</li>
                    <li>Contact Sales</li>
                    <li>Newsroom</li>
                    <li>Careers</li>
                    <li>Security</li>
                </ul>
            </div>
            <div class="col-md-3 col-6">
                <h4 class="heavy-font text-black my-3">Popular Features</h4>
                <ul>
                    <li>About Calendly</li>
                    <li>Contact Sales</li>
                    <li>Newsroom</li>
                    <li>Careers</li>
                    <li>Security</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Teams