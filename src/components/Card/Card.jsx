import React from 'react'
import './Card.css'

const Card = ({ userInfo }) => {
    const { name, email, website, imageLink, gender, skills } = userInfo
    console.log(skills)

    return (
        <div className="card">
            <div className="tools">
                <div className="circle">
                    <span className="red dotted"></span>
                </div>
                <div className="circle">
                    <span className="yellow dotted"></span>
                </div>
                <div className="circle">
                    <span className="green dotted"></span>
                </div>
            </div>
            <div className="card__content">
                <div className="avatar">
                    <img src={imageLink} alt="avatar" />
                </div>
                <div className="credentials">
                    <h3 className="common__css__props">Name : {name}</h3>
                    <p className="common__css__props">Email : {email}</p>
                    <p className="common__css__props">Website : {website}</p>
                    <p className="common__css__props">Gender : {gender}</p>
                    <div className="skillbox">
                        {
                            skills.map((skill)=>(
                                <h4 className='skill'>
                                    {skill}
                                </h4>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card