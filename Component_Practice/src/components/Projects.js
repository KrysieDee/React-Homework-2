import React, { Component } from 'react'; 
import projects from '../data/projects.json';
import Project from './Project.js';

class Projects extends Component {
    constructor(imgName, title, description){
        super(),
        this.state = {
           done: projects.allProjects 
        }
    }
    render(){
        return(
            <div>{
              this.state.done.map((k)=>{
               return <Project 
               imgName = {k.imgName}
               title = {k.title}
               description = {k.description}
               />
           })}
           </div>
        )
    
    }
}

export default Projects; 