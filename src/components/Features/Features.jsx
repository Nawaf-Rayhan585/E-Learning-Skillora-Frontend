import React from 'react'
import { VscCallOutgoing } from "react-icons/vsc";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { BsPersonVideo3 } from "react-icons/bs";
import './Features.css'

const Features = () => {
  return (
    <div className="card-container">
      <div className='features-card-container'>
        <div className="card-item block">
          <div className="icon-card-container">
            <VscCallOutgoing className='icon-card'/>
          </div>
          <h3 className="header-card-3">24/7 Support</h3>
          <p className="p-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non doloremque odit qui commodi? Obcaecati?</p>
        </div>

        <div className="card-item block">
          <div className="icon-card-container">
            <RiMoneyDollarBoxLine className='icon-card'/>
          </div>
          <h3 className="header-card-3">Save Money</h3>
          <p className="p-card">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At perferendis vel sed dolorum repellat impedit.</p>
        </div>

        <div className="card-item block">
          <div className="icon-card-container">
          <BsPersonVideo3 className='icon-card'/>
          </div>
          <h3 className="header-card-3">Best Mentors</h3>
          <p className="p-card">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, nihil. Alias vitae aperiam animi neque?</p>
        </div>
    </div>
    </div>
  )
}

export default Features
