import React from 'react'
import header from '../images/calendly-header.jpg'
import apple from '../images/apple.png'
import '../App.css';

function Home() {
  return (
    <>  
    <div class="container mt-5">
        <div class="row hero">
            <div class="col-12 col-md-6">
                <h1 class="fw-bolder display-2">Easy</h1>
                <h1 class="display-2">scheduling</h1>
                <h1 class="text-blue display-2">ahead</h1>
                <p class="my-md-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/> 
                    Hic nisi quisquam sapiente laboriosam, perferendis <br/> ipsum asperiores nulla iste nam quo explicabo, 
                    <br/> quis ad temporibus dignissimos repellat!
                </p>
                
                <form action="#" class="mt-md-5 mb-3">
                    <div id="input">
                        <input type="email" name="" id="" placeholder="Enter your email"/>
                    </div>
                    <div id="btn"><input type="submit" value="Sign Up"/></div>
                </form>
                <p class="px-3 text-secondary">Create your free account. No credit card required.</p>

            </div>
            <div class="col-md-6 text-center ">
                <img src={header} alt="" class="img-fluid"/>
            </div>
        </div>
    </div>


    
    <div class="container-fluid bg-light my-5 ">
        <h1 class="text-center py-5">Simplified scheduling for more than <br/><span class="text-blue">10,000,000</span> users worldwide</h1>
        <div class="container mt-3 mb-5">
            <div class="row pb-5 text-center">
                <div class="col-3">
                   <img src={apple} alt="" class="img-fluid" width="150px"/>
                </div>
                <div class="col-3">
                    <img src={apple} alt="" class="img-fluid" width="150px"/>
                </div>
                <div class="col-3">
                    <img src={apple} alt="" class="img-fluid" width="150px"/>
                </div>
                <div class="col-3">
                    <img src={apple} alt="" class="img-fluid" width="150px"/>
                </div>
            </div>
        </div>
    </div>
    

    
    <div class="container my-5">
        <div class="row gy-3">
            <div class="col-md-4">
                <div class="d-flex">
                    <span class="point mx-3"><p>1.</p></span>
                    <div>
                        <h3 class="mb-4 heavy-font">Create <br/> simple rules</h3>
                            <p class="lh-lg lead fw-light text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione ex provident et, vitae qui?</p>
                        </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="d-flex">
                    <span class="point mx-3"><p>2.</p></span>
                    <div>
                        <h3 class="mb-4 heavy-font">Share your <br/> link</h3>
                            <p class="lh-lg lead fw-light text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione ex provident et, vitae qui?</p>
                        </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="d-flex">
                    <span class="point mx-3"><p>3.</p></span>
                    <div>
                        <h3 class="mb-4 heavy-font">Get booked</h3>
                            <p class="lh-lg lead text-muted fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione ex provident et, vitae qui?</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home