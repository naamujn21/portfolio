import React,{ Component } from "react";
import Skills from "./skills";
import Introduction from "./introduction";
import Education from "./education";
import Internships from "./interenships";
import Trainings from "./trainings";
import Projects from "./projects";
import AdditionalDetails from "./additionaldetails";
export default class MyComp extends Component
{
    render(){
        return(<div>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>      
            </head>
            <div class="row">
                <div class="col-8">
                    <p></p><p></p><p></p><p></p>
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resume</h1>
                    <Education />
                    <Internships />
                    <Trainings />
                    <Projects />
                    <Skills />
                    <AdditionalDetails />
                </div>
                <div class="col-4">
                    <p></p><p></p><p></p><p></p>
                    <Introduction />
                </div>
            </div>
            
        </div>)
    }
}