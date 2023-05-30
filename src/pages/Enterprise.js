import React from 'react'
import vw from '../images/vw.png'
import sale from '../images/sales.jpg'
import '../App.css';

function Enterprise() {
  return (
    <>
    
    <div class="container mt-5 mb-5 text-center spacer">
        <h3 class="display-4 heavy-font text-black"> <span class="text-blue"> Way more </span>than a <br/> scheduling link</h3>
        <p class="lead text-black fw-semibold lh-lg my-5">Lorem ipsum dolor sit amet consectetur, <br/>
         adipisicing elit. Itaque obcaecati illo totam quam blanditiis <br/>
          nisi voluptatum magnam? Modi, accusantium delectus dolorem quaerat </p>
        <button class="btn bg-dark text-light rounded-pill p-4 px-5 fw-bold me-md-4 ">Contact Sales</button>
    </div>

   
    <div class="container-fluid bg-light my-5 bg-dark text-light">
        <h1 class="text-center py-5">Simplified scheduling for more than <br/><span class="text-blue">10,000,000</span> users worldwide</h1>
        <div class="container mt-3 mb-5">
            <div class="row pb-5 text-center">
                <div class="col-3">
                   <img src={vw} alt="" class="img-fluid" width="150px"/>
                </div>
                <div class="col-3">
                    <img src={vw} alt="" class="img-fluid" width="150px"/>
                </div>
                <div class="col-3">
                    <img src={vw} alt="" class="img-fluid" width="150px"/>
                </div>
                <div class="col-3">
                    <img src={vw} alt="" class="img-fluid" width="150px"/>
                </div>
            </div>
        </div>
    </div>


   
    <div class="container mt-5 spacer">
        <div class="row my-5 gy-3 px-5">
           <div class="col-md-4 col-6 ">
                <div class="shadow rounded-5 p-4">
                    <h4 class="text-blue mt-2">Sales</h4>
                    <div class="text-center my-4">
                        <img src={sale} alt="art" class="img-fluid " width="180px"/>
                    </div>
                    <p class="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa consequuntur possimus, ullam, ipsum amet soluta quos vel quibusdam facere cumque eum deserunt, temporibus maiores minus!</p>
                </div>
           </div>

           <div class="col-md-4 col-6">
                <div class="shadow rounded-5 p-4">
                    <h4 class="text-blue mt-2">Customer Success</h4>
                    <div class="text-center my-4">
                        <img src={sale} alt="art" class="img-fluid " width="180px"/>
                    </div>
                    <p class="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa consequuntur possimus, ullam, ipsum amet soluta quos vel quibusdam facere cumque eum deserunt, temporibus maiores minus!</p>
                </div>
           </div>

           <div class="col-md-4 col-6">
                <div class="shadow rounded-5 p-4">
                    <h4 class="text-blue mt-2">Recruiting</h4>
                    <div class="text-center my-4">
                        <img src={sale} alt="art" class="img-fluid " width="180px"/>
                    </div>
                    <p class="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa consequuntur possimus, ullam, ipsum amet soluta quos vel quibusdam facere cumque eum deserunt, temporibus maiores minus!</p>
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

export default Enterprise