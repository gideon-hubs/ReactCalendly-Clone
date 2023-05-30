import React from 'react'
import hero from '../images/heroImg.png'
import smile from '../images/smiling-group-clients.png'
import recruit from '../images/Calendly-Recruiting-Small.png'
import '../App.css';

function Individuals() {
  return (
    <>  
    <div class="container mt-5">
        <div class="row hero">
            <div class="col-12 col-md-6">
                <h1>The genius way</h1>
                <h1>to work <span class="text-blue">better</span></h1>
                <p class="my-md-5 lh-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/> 
                    Hic nisi quisquam sapiente laboriosam, perferendis <br/> 
                    ipsum asperiores nulla iste nam quo explicabo, <br/> quis ad temporibus dignissimos repellat!
                </p>
                <button class="btn bg-dark text-light rounded-pill p-4 px-5">Sign up for free</button>
                

            </div>
            <div class="col-md-6 text-center ">
                <img src={hero} alt="" class="img-fluid"/>
            </div>
        </div>
    </div>

    
    <div class="container">
        <div class="row my-5">
            <div class="col-md-6">
                <img src={smile} alt="" class="img-fluid" width="70%"/>
            </div>
            <div class="col-md-6">
                <p class="text-muted lead mb-3">A CURATED CALENDAR</p>
                <h1 class="heavy-font">Book up efficiently</h1>
                <p class="my-5 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto cupiditate exercitationem adipisci facilis iusto ratione rem facere necessitatibus blanditiis natus quod magni ipsa molestias voluptas eos dicta, cumque labore sapiente sunt. Voluptate minus iste adipisci ipsa quibusdam doloribus dolorum reiciendis, harum, eius dicta vitae aliquam laborum doloremque optio cumque.</p>
            </div>
        </div>
    </div>

    
    <div class="container mt-5">
        <div class="row my-5">
           
            <div class="col-md-6">
                <p class="text-muted fw-bold mb-3">AUTOMATEDD NOTIFICATION & FOLLOW-UPS</p>
                <h1 class="heavy-font">Work like you have a personal assistant</h1>
                <p class="my-4 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto cupiditate exercitationem adipisci facilis iusto ratione rem facere necessitatibus blanditiis natus quod magni ipsa molestias voluptas eos dicta, cumque labore sapiente sunt. Voluptate minus iste adipisci ipsa quibusdam doloribus dolorum reiciendis, harum, eius dicta vitae aliquam laborum doloremque optio cumque.</p>
            </div>
            <div class="col-md-6 text-center">
                <img src={recruit} alt="" class="img-fluid" width="70%"/>
            </div>
        </div>
    </div>

    
    <div class="container-fluid p-5 my-5 bg-dark backG">
        <div class="container text-light text-md-left">
            <h1 class="heavy-font lh-base display-4">Find just-right plans <br/>for individuals and <br/>small teams</h1>
            <button class="btn btn-light rounded-pill p-4 px-5 my-4 fw-bold">See our plans</button>
        </div>
    </div>

   
    <div class="container">
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

export default Individuals