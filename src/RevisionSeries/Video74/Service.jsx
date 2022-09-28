import React from 'react'
import Card from './Card'
import Allcards from './Allcards'

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                Allcards.map((sdata, ind) => {
                  return <Card 
                  key = {ind}
                  imgsrc={sdata.imgsrc}
                  title = {sdata.title}
                  />
                })
              }




              {/* <div className="col-md-4 col-10 mx-auto">
                <div class="card" style={{width: "18rem"}}>
                  <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
              </div>   */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
