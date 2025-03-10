import React from "react";
//import './Typewriter.css';
//import TypewriterComponent from "typewriter-effect";
import iam from "../assets/img/im.png"
import me from "../assets/img/me.png"






import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import{faInstagram} from"@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import{ faLinkedin} from "@fortawesome/free-brands-svg-icons";
export default function Home(){
    return(
        <>
        <div style={{display:"flex"}}>
        <div style={{backgroundColor:"black",width:"65%",height:"700px"}}>
        
            <div>
                <div style={{paddingLeft:"200px", color:"Purple",fontSize:"35px"}}>
                <p style={{ color: "white", fontSize:"40px" ,fontWeight:"bold" , 
                letterSpacing:"2px", 
                    marginRight:"300px",paddingTop:"150px"}}>Hi There!</p>
                    <span style={{color:"white",fontSize:"40px",fontWeight:"bold",
                        }}>I'M  </span>
                    <span style={{color:"purple",
                        fontSize:"40px",fontWeight:"bolder",marginRight:"200px",
                        letterSpacing:"2px"}}>Feni Soni </span>

                      {/*<TypewriterComponent
                        options={{strings:["Software Developer","Meren Stack","Web Designer"]
                            ,autoStart:true,
                            loop:true,
                            deleteSpeed:50
                        }}>

                        </TypewriterComponent>
                      */}
                        
                </div>   
               </div>
        </div>
        <div style={{backgroundColor:"black" , width:"45%"}}>
        <img style={{height:"400px",marginTop:"100px"}} src={iam}></img>
        </div>
    
    </div>

    <div style={{display:"flex"}}>
        <div style={{backgroundColor:"black", height:"600px", width:"70%"}}>

            <span style={{fontSize:"40px", color:"white",paddingTop:"5px",textAlign:"left",
                 paddingLeft:"20px"}}>LET ME</span> 
                <span style={{fontSize:"40px", color:"purple",paddingTop:"5px"}}> INTRODUCE</span>
                <span style={{fontSize:"40px", color:"white",paddingTop:"5px"}}>  MYSELF</span>
            
            <p style={{color:"white",letterSpacing:"1px",fontSize:"20px", paddingTop:"50px",
            paddingLeft:"20px",
                fontWeight:"bold"}}>
            I fell in love with programming and I have at least learnt something, I think…
            </p>
            <p style={{paddingTop:"30px",textAlign:"left", paddingLeft:"20px"}}>
                <span style={{color:"white",letterSpacing:"1px",fontSize:"20px", fontWeight:"bold"}}>
                I am fluent in classics like </span>
                <span style={{color:"purple",letterSpacing:"1px",fontSize:"20px", fontWeight:"bold" ,
                }}>C++, Javascript and Go.
                </span>
            </p>

            <p style={{paddingTop:"30px",textAlign:"left", paddingLeft:"20px"}}>
                <span style={{color:"white",letterSpacing:"1px",fontSize:"20px", fontWeight:"bold"}}>
                My field of Interest's are building new </span>
                <span style={{color:"purple",letterSpacing:"1px",fontSize:"20px", fontWeight:"bold" ,
                }}>Web Technologies and Products</span>
                <span style={{color:"white",letterSpacing:"1px",fontSize:"20px", fontWeight:"bold"}}>
                and also in areas related to  </span>
                <span style={{color:"purple",letterSpacing:"1px",fontSize:"20px", fontWeight:"bold" ,
                }}>Blockchain.</span>
            </p>

            <p style={{paddingTop:"30px",textAlign:"left", paddingLeft:"20px"}}>
                <span style={{color:"white",letterSpacing:"px",fontSize:"20px", fontWeight:"bold"}}>
                Whenever possible, I also apply my passion for developing products with</span>
                <span style={{color:"purple",letterSpacing:"px",fontSize:"20px", fontWeight:"bold" ,
                }}>Node.js</span>
                <span style={{color:"white",letterSpacing:"px",fontSize:"20px", fontWeight:"bold"}}>
                and  </span>
                <span style={{color:"purple",letterSpacing:"px",fontSize:"20px", fontWeight:"bold" ,
                }}>Modern Javascript Library and Frameworks</span>
                 <span style={{color:"white",letterSpacing:"px",fontSize:"20px", fontWeight:"bold"}}>
                 like  </span>
                 <span style={{color:"purple",letterSpacing:"px",fontSize:"20px", fontWeight:"bold" ,
                }}>React.js and Next.js</span>
                 
            </p>
            <p style={{fontSize:"40px", color:"white", textAlign:"right", 
                paddingTop:"50px",paddingRight:"100px"}}>
            FIND ME ON
            </p>

            <p style={{fontSize:"15px", color:"white", textAlign:"right"
               ,paddingRight:"120px"}}>
            Feel free to connect with me
            </p>
            <p style={{color:"purple",fontSize:"30px", textAlign:"right"
               ,paddingRight:"120px"}}>
              
            </p>
            <p style={{height:"50px",width:"50px",color:"purple",display:"flex",
                 gap:"20px",textAlign:"center",marginLeft:"700px",marginTop:"20px",}}>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </p>




        </div>
        <div style={{backgroundColor:"black", height:"600px", width:"30%"}}>
            <img src={me}></img>
        </div>

    </div>
    <footer style={{backgroundColor:"grey", height:"50px", width:"100%",display:"flex",alignItems:"center"}}>
        <span style={{color:"black", fontSize:"20px",textAlign:"left",paddingLeft:"10px"
            ,alignItems:"center"}}>Designed and Developed by Riya Patel</span>
        <span style={{color:"black", fontSize:"20px",marginLeft:"300px"}}>Copyright © 2025 SB</span>
        
    <span  style={{color:"black", fontSize:"20px",marginLeft:"300px" ,gap:"5px"}}>
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </span>
    </footer>
        </>
        
    )
}