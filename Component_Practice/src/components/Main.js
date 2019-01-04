
import React, { Component } from 'react';
import Projects from './Projects'
import Resume from './Resume'

class Main extends Component {
    render() {
        return <main id='about-me' >
            <a href='#'>
            <i class="far fa-arrow-alt-circle-up"></i>
            </a>
            <h1>About Me</h1>
            <picture>
           <source media = "(min-width: 426px)"
           srcset = "https://www.deshebideshe.com/assets/news_images/7f5320efbbe7f01edaa136c52973fcc9.jpg" />
           < img src = "https://pbs.twimg.com/profile_images/739109952212467713/Vr_n84CJ.jpg"
           alt = "my pictire' profile picture" />
           </picture>
           <div>
               < p > Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
               incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud 
               exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure 
               dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
               mollit anim id est laborum. 
               </p>
           </div>
        </main>
    }
};

export default Main