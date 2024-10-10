// src/Login.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from "react-router-dom";
import './Css/style.css'
import './Css/production.css'
const Protection_Company = () => {
    return (
        <div className="form-container">
            <h2>Company Information</h2>
            <form className='feed-form'>
                
                    <label>Company's name:</label>
                    <input className='form_field'
                        type="text"
                        required
                    />
                    <label>Iconic Film:</label>
                    <input className='form_field'
                        type="text"
                        required
                    />
                    <label>Award-Winning Film:</label>
                    <input className='form_field'
                        type="text"
                        required
                    />
                    <label>Founded:</label>
                    <input className='form_field'
                        type="text"
                        required
                    />
                      <label>Founder :</label>
                    <input className='form_field'
                        type="text"
                        required
                    />
                
                
                <button type="submit" className="button_submit">Login</button>
                
            </form>
        </div>
    )
};

export default Protection_Company;
