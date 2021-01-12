import React from 'react'
import './main.css'

const  Main = () => {
    return (
        <div className="main">
            <div className="main-header">
                <h3 className="want-to-subscribe">WANT TO UNSUBSCRIBE ?</h3>
            </div>
            <div>
                <p> You need to logged in to unsubscribe.</p>
                <p>Enter your phone number below to get a login</p>
                <p> SMS link sent to your phone</p>
            </div>
            <div className="form-container">
                <form>
                    <input type="text" placeholder="082 4234392" className="input-number"/>
                    <input type="button" value="continue" className="btn-continue"/>
                    <input type="button" value="cancel" className="btn-cancel"/>
                </form>
            </div>
        </div>
    )
}

export default Main
