import React,{ Component } from "react";

export default class Projects extends Component
{
    render()
    {
        return(
        <div>
            <hr></hr>
            <div class="row">
                    <div class="col-4"><h4>PROJECTS</h4></div>
                    <div class="col-8"> 
                        <b>Issue Tracker Application Using Javscript</b> 
                        <br></br>This is a web application which Tracks User Issues i.e. Whether the issue being
                        <br></br>resolved or not With a give the unique ID provided them by alerting. and also a
                        <br></br>user can add their Issues to it and can Remove it also.
                        <p></p> 
                        <b>Color Picker Game Using Javascript</b> 
                        <br></br>A simple web game where a user is provided with a Color in RGB format and
                        <br></br>he/she has to choose that which one is that color from given 6 blocks having
                        <br></br>color filled in them. There are two Modes of diculty : Easy (3 blocks) and Medium (6 blocks).
   
                    </div>
            </div>
        </div>
        )
    }
}