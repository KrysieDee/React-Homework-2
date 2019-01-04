import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return <aside id="resume">
      <a href="#">
        <i class="far fa-arrow-alt-circle-up"></i>
      </a>
      <h1>Resume</h1>

      <header>
        <h2>This Student</h2>
        <address>
          <a href="tel:3051234321"> (305) 205-9541</a> 
          <a href="mailto:israel@wyncode.co"> leo@wyncode.co </a>
          <a href="https://izzycode.co" rel="nofollow"> http://leopolicastro.co </a>
          Happy Street 1919 <br></br>
          Miami, Florida <br></br>
        </address>
      </header>
      <hr></hr>

      <ol>
        <li>
          <h3>Technical Skills</h3>
          <ul>
            <li>Languages: HTML, CSS, Javascript</li>
            <li>Languages: HTML, CSS, Javascript</li>
            <li>Languages: HTML, CSS, Javascript</li>
          </ul>
          <p>A lot of ReactJs. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id animi quidem obcaecati quisquam ullam. Quos aperiam ipsum cupiditate hic cum quaerat aut qui sapiente repudiandae, sed accusantium perspiciatis, molestias.</p>
        </li>
        <li>
          <h3>Experience</h3>
          <ul>
            <li>
              <h4>The One Place - <small>2000-2010</small></h4>
              <ul>
                <li>I did this</li>
                <li>I did that</li>
              </ul>
            </li>
            <li>
              <h4>The Other Place - <small>2000-2010</small></h4>
              <ul>
                <li>I did this</li>
                <li>I did that</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>

    </aside>
    }
};




export default Resume