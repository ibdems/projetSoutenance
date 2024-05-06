import React from 'react'
import './dashboard.scss'
function Dashboard() {
  return (
    <div className=' mt-1'>
        {/* L'ensemble de la page */}
        <div className="row">
            {/* La premiere col-lgonne */}
            <div className="col-lg-3 col-md-5 col-xm-3 gx-5">
                  <div className="row">
                    <div className="col-lg-12 box mt-3 box1"> Box 1</div>
                  </div>
                  <div className="row gy">
                    <div className="col-lg-12 box mt-3 box2" > Box 2</div>
                  </div>
            </div>
            {/* La deuxieme col-lgonne */}
            <div className="col-lg-6 col-md-7">
                <div className="row ">
                    <div className="col">
                      <div className="col-lg-6 w-100 col-md-5 mt-3 box3  box " >Box3</div>
                    </div>
                    <div className="col">
                    <div className="col-lg-6 col-md-5 w-100 mt-3 box4   box ">Box4</div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col">
                      <div className="col-lg-6 w-100 col-md-5 mt-3 box3  box " >Box3</div>
                    </div>
                    <div className="col">
                    <div className="col-lg-6 col-md-5 w-100 mt-3 box4   box ">Box4</div>
                    </div>
                </div>
                <div className="row mt-3 m-1">
                    <div className="col-lg-12 box5 box">Box5</div>
                </div>
            </div>
            {/* La troisieme col-lgonne */}
            <div className="col-lg-3 col-md-12 gx-5">
                  <div className="row">
                    <div className="col-lg-12 box mt-3 box1"> Box 1</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-lg-12 box  box2" > Box 2</div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard