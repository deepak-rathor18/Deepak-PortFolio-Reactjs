import React,{useEffect} from 'react'

export const Resume = () => {
    useEffect(()=>{
        document.getElementById('header').classList.add('header-top')

    },[])
    return (
        <div>
            <section id="resume" className="resume">
                <div className="container">

                    <div className="section-title">
                        <h2>Resume</h2>
                        <p>Check My Resume</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <span className='fst-italic'>
                                <h4>Deepak Rathor</h4>
                                <p><em>MERN Stack || Frontend Developer at  Byte Billion ,Indore(M.P.) || React || Next || Photoshop</em></p>
                                <p>
                                    <ul>
                                        <li>+91-9993613221</li>
                                        <li>deepakrathor3221@gmail.com</li>
                                    </ul>
                                </p>
                                </span>
                            </div>
                            <h3 className="resume-title">Skills</h3>
                            <div className="resume-item">
                            <span className='fst-italic'>
                           <ul> 
                               Programming Languages
                                <li>JavaScript, C , Java</li>
                            </ul>
                            <ul>Web Development
                            <li>Node.js, React.js, Next.js, Material-UI, Express.js, Html, CSS, Bootstrap
                            </li></ul>
                            <ul>
                                Tools
                                <li>Git, VS Code, Postman, Adobe Photoshop</li>
                            </ul>
                            <ul>
                                Database
                                <li>MongoDB</li>
                            </ul>
                            </span>
                            </div>
                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                            <span className='fst-italic'>
                                <h4>MCA</h4>
                                <h5>2022-2024</h5>
                                <p><em>School of Computers, IPS Academy, Indore (M.P.)</em></p>
                                <p>Cgpa:-7.6 (Till 1st Semester)</p>
                            </span>    
                            </div>
                            <div className="resume-item">
                            <span className='fst-italic'>
                                <h4>B.Sc(Computer Science)</h4>
                                <h5>2019-2022</h5>
                                <p><em>Vikram University, Ujjain(M.P.)</em></p>
                                <p>Persantage:- 71.52%</p>
                            </span>
                            </div>

                            {/* <div className="resume-item">
                              
                                <h5>2018-2022</h5>
                                    <ul>
                                        <li>Worked as a front-end designer for 3 months in a web-based project of institute management system.,</li>
                                        <li>Helped students in learning HTML, CSS, JavaScript, React and Express and building their first app.,</li>
                                        <li>
                                        <ul>Working on web-projects:,
                                            <br/>
                                        <li><a href="https://animatemate.in/">Animatemate</a>,</li>
                                        <li><a href="http://vdngoa.com/">VdnGoa</a>,</li>
                                        <li>Music portfolio application,</li></ul></li>
                                    </ul>

                            </div> */}
                          
                        </div>
                        <div className="col-lg-6">
                            
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>MERN-Stack Developer (January 2023 - Present)</h4>
                                <span className='fst-italic'>
                                <h5>Byte Billion Pvt. Ltd.</h5>
                                <p><em>Indore(M.P.)</em></p>
                                <p>
                                    <ul>
                                   <em> Deep Interview	</em>	
                                  <li>  State-Country API implementation to achieve more accuracy and consistency in address.</li>
                                  <li>  Embedded quill editor for input which helped to store and serve formatted data with less effort.</li>
                                  <li>  designed animation for audio level indication which ensures the candidate whether his mic is working fine.</li> 
                                  <li>  Replacement of regular alerts and messages with sweetalert2 which provides more functional alerts.</li>
                                  <li>  Better implementation of Django templating engine by using base file inheritance for repeated code.</li>
                                  <li>  Rebuild their landing page to enhance user experience as it is attractive and responsive.</li>
                                  <li>  Design and embedded per question countdown timer in interview page.</li>
                                  <li>  Improved performance of the web pages by the implementation of lazy loading.</li>
                                  <li>  Rebuilding the frontend of website as a single page application using react to achieve higher performance and dynamic content.</li>
                                  <li>  Used material UI for designing components.</li>
                                  <li>  Design Redux structure for state management.</li>
                                  <li>  Build private and public routes in react to maintain privacy of routes.</li>
                                  <li>  Major role in stabilizing features and performance of project.</li>

                                    </ul>
                                </p>
                                </span>
                            </div>
                            {/* <div className="resume-item">
                                <p><h5>Data Mapping</h5></p>
                                <p>
                                    <ul>
                                        <li>Used a jQuery Data-Table plugin for creating table listings and adding interactions to them.</li>
                                        <li>Replacement of regular alerts and messages with sweetalert2 which provides functional alerts</li>
                                        <li>Embedded ace editor for input which helped to store and serve formatted data with less effort.</li>
                                        <li>Designed user roles, permission forms.</li>

                                    </ul>
                                </p>
                            </div> */}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
