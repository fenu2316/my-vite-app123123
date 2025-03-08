import React from "react";
import p1 from "../assets/img/p1.png"
import p2 from "../assets/img/p2.png"
import p3 from "../assets/img/p3.png"
import p4 from "../assets/img/p4.png"
import p5 from "../assets/img/p5.png"
import p6 from "../assets/img/p6.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import{ faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Project(){
    return(
        <>
        <div>
            <div style={{height:"250px",width:"100%",backgroundColor:"black", paddingTop:"80px",textAlign:"center"}}>
            <span style={{color:"white",fontSize:"40px",fontWeight:"bold",
                        }}>My Recent </span>
                    <span style={{color:"purple",
                        fontSize:"40px",fontWeight:"bolder",
                        letterSpacing:"2px"}}>Works</span>
                        <p style={{fontSize:"20px", color:"white"}}>
                            Here are a few projects l've Worked on recently.
                        </p>
            </div>
        </div>
        <div>
            <div style={{height:"1600px",width:"100%", display:"flex",flexWrap:"wrap",backgroundColor:"black",gap:"40px",
                alignItems: "center",justifyContent:"center"
            }}>
            
            <div style={{ width: "400px", height: "750px", border: "3px solid purple",borderRadius: "5px",}}>
                    <div style={{width:"400px",height:"250",padding:"10px"}}>
                        <img src={p1}></img>
                    </div>

                    <p style={{color:"white",fontSize:"25px",  textAlign:"center"}}>Chatify</p>

                    <p style={{color:"white",fontSize:"20px",padding:"18px"}}>Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.</p>

            <div style={{display:"flex", gap:"20px",justifyContent:"center"}}>
        
                <input style={{color:"white",height:"40px",width:"130px",
                    backgroundColor:"purple",borderRadius:"3px"}} type="button"
                     value="GitHub"></input>
                
                <input style={{color:"white",height:"40px",width:"130px",
                    backgroundColor:"purple",borderRadius:"3px"}} type="button"
                     value="Demo"></input>

            </div>


            </div>

            <div style={{ width: "400px", height: "750px", border: "3px solid purple",borderRadius: "5px",}}>
                    <div style={{width:"400px",height:"250",padding:"10px"}}>
                        <img src={p2}></img>
                    </div>
                    <p style={{color:"white",fontSize:"25px",  textAlign:"center"}}>Bits-0f-C0de</p>

                    <p style={{color:"white",fontSize:"20px",padding:"18px"}}>My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.</p>

                    <div style={{display:"flex", gap:"20px",justifyContent:"center"}}>
                <input style={{color:"white",height:"40px",width:"130px",
                    backgroundColor:"purple",borderRadius:"3px"}} type="button"
                     value="GitHub"></input>
                     <input style={{color:"white",height:"40px",width:"130px",
                    backgroundColor:"purple",borderRadius:"3px"}} type="button"
                     value="Demo"></input>
                     </div>

            </div>

            <div style={{ width: "400px", height: "750px", border: "3px solid purple",borderRadius: "5px",}}>
                    <div style={{width:"400px",height:"250",padding:"10px"}}>
                        <img src={p3}></img>
                    </div>
                    <p style={{color:"white",fontSize:"25px",  textAlign:"center"}}>Editor.io</p>

                    <p style={{color:"white",fontSize:"20px",padding:"18px"}}>Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage</p>

                    <div style={{display:"flex", gap:"20px",justifyContent:"center"}}>
                <input style={{color:"white",height:"40px",width:"130px",
                    backgroundColor:"purple",borderRadius:"3px"}} type="button"
                     value="GitHub"></input>
                     <input style={{color:"white",height:"40px",width:"130px",
                    backgroundColor:"purple",borderRadius:"3px"}} type="button"
                     value="Demo"></input>
                     </div>
            </div>

            <div style={{ width: "400px", height: "750px", border: "3px solid purple",borderRadius: "5px",}}>
                    <div style={{width:"400px",height:"250",padding:"10px"}}>
                        <img src={p4}></img>
                    </div>
                    <p style={{color:"white",fontSize:"25px",  textAlign:"center"}}>Plant AI</p>

                    <p style={{color:"white",fontSize:"20px",padding:"18px"}}>Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.
                    <div style={{display:"flex", gap:"20px",justifyContent:"center",marginTop:"20px"}}>
                <input style={{color:"white",height:"40px",width:"130px",
                    backgroundColor:"purple",borderRadius:"3px"}} type="button"
                     value="GitHub"></input>
                <input style={{color:"white",height:"40px",width:"130px",
                    backgroundColor:"purple",borderRadius:"3px"}} type="button"
                     value="Demo"></input>

            </div>
 
</p>
            </div>

            <div style={{ width: "400px", height: "750px", border: "3px solid purple",borderRadius: "5px",}}>
                    <div style={{width:"400px",height:"250",padding:"10px"}}>
                        <img src={p5}></img>
                    </div>
                    <p style={{color:"white",fontSize:"25px",  textAlign:"center"}}>Ai For Social Good</p>

                    <p style={{color:"white",fontSize:"20px",padding:"18px"}}>Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in sucide prevention.</p>

                    <div style={{display:"flex", gap:"20px",justifyContent:"center"}}>
                <input style={{color:"white",height:"40px",width:"130px",
                    backgroundColor:"purple",borderRadius:"3px"}} type="button"
                     value="GitHub"></input>
                     </div>
            </div>

            <div style={{ width: "400px", height: "750px", border: "3px solid purple",borderRadius: "5px",}}>
                    <div style={{width:"400px",height:"250",padding:"10px"}}>
                        <img src={p6}></img>
                    </div>
                    <p style={{color:"white",fontSize:"25px",  textAlign:"center"}}>Face Recognition and Emotion Detection</p>

                    <p style={{color:"white",fontSize:"20px",padding:"18px"}}>Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.</p>

                    <div style={{display:"flex", gap:"20px",justifyContent:"center"}}>
                <input style={{color:"white",height:"40px",width:"130px",
                    backgroundColor:"purple",borderRadius:"3px"}} type="button"
                     value="GitHub"></input>
                     </div>

            </div>
            
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