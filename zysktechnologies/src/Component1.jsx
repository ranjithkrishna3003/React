import React from 'react'
import avatar from "../src/assets/Avatar.png"
import avatar2 from "../src/assets/Avatar2.png"
import avatar3 from "../src/assets/Avatar3.png"
import card1 from "../src/assets/card1.png"
import card2 from "../src/assets/card2.png"
import card3 from "../src/assets/card3.png"
import content1 from "../src/assets/Content1.png"
import f1 from "../src/assets/F1.png"
import f2 from "../src/assets/F2.png"
import f3 from "../src/assets/F3.png"
import f4 from "../src/assets/F4.png"
import f5 from "../src/assets/F5.png"
import f6 from "../src/assets/F6.png"
import logo1 from "../src/assets/Logo1.png"
import logo2 from "../src/assets/Logo2.png"
import logo3 from "../src/assets/Logo3.png"
import logo4 from "../src/assets/Logo4.png"
import logo5 from "../src/assets/Logo5.png"
import logo6 from "../src/assets/Logo6.png"
import logo7 from "../src/assets/Logo7.png"
import logomark from "../src/assets/Logomark.jpg"
import plus from "../src/assets/plus.png"
import screen from "../src/assets/Screen.jpg"
 
function Component1() {
  return (
    <React.Fragment>
        <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between", padding:"20px 0px 0px 100px"}}>
            <div className='header1' style={{display:"flex",alignItems:"center"}}>
                <img src={logomark} alt="" style={{height:"60px", width:"60px"}} />
                <p style={{fontSize:"30px", paddingLeft: "30px",fontFamily:"sans-serif"}}>Untitled UI</p>
                <p style={{paddingLeft: "50px"}}>Home</p>
                <p style={{paddingLeft: "50px"}}>Products</p>
                <p style={{paddingLeft: "50px"}}>Resource</p> 
                <p style={{paddingLeft: "50px"}}>Pricing</p>
                <img style={{paddingLeft:"700px", height:"50px", width:"50px",borderRadius:"50%"}} src={avatar} alt="" />
            </div>
        </div>
        <div style={{marginTop:"30px"}}>
            <div style={{position:"relative",padding:"3px",height:"32px", width:"380px",marginTop:"50px",  backgroundColor:"#f9f5ff", margin:"auto", display:"flex", flexDirection:"row",borderRadius:"20px", border:"3px solid #e9d7fe"}}>
                <button style={{fontFamily:"sans-serif", boxShadow:"none",  height:"25px",color:"#6941c6", border:"3px solid #d6bbfb", borderRadius:"25px", margin:"auto" ,backgroundColor:"white"}}>New Feature</button>
                <p style={{color:"#6941c6", margin:"auto"}}>Checkout the team dashboard <b style={{marginRight:"10px"}}>➝</b></p>
            </div>
            <div style={{textAlign:"center", marginTop:"15px"}}>
                <p style={{fontSize:"50px"}}><b>Beautiful analytics to grow smarter</b></p>
                <p style={{marginTop:"20px", fontSize:"15px", color:"gray"}}>Powerful, self-serve product and growth analytics to help you convert, engage,<br></br> and retain more users. Trusted by over 4,000 startups.</p>
                <div style={{marginTop:"30px"}}>
                <button style={{padding:"12px 20px", fontSize:"14px",border:"2px solid #d6bbfb", borderRadius:"6px", marginRight:"10px", fontFamily:"sans-serif", color:"#7f56d9", backgroundColor:"#f9f5ff"}}>▶ Demo</button>
                <button style={{padding:"12px 20px", fontSize:"14px",border:"2px solid #d6bbfb", borderRadius:"6px", backgroundColor:"#7f56d9", color:"white", marginLeft:"10px", fontFamily:"sans-serif"}}>Sign up</button>
                </div>
            </div>
            <div style={{textAlign:"center", justifyContent:"space-between", margin:"50px 130px"}}>
                <img style={{border:"5px solid black", borderRadius:"12px"}} src={screen} alt="" />
                <p style={{marginTop:"70px", color:"gray" }}>Join 4,000+ companies already growing</p>
                <div style={{display:"flex",  marginTop:"30px"}}>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center", margin:"auto"}}>
                        <img src={logo1} alt="" />
                        <h2 style={{marginLeft:"12px"}}>Boltshift</h2>
                    </div>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center", margin:"auto"}}>
                        <img src={logo2} alt="" />
                        <h2 style={{marginLeft:"12px"}}>Lightbox</h2>
                    </div>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center", margin:"auto"}}>
                        <img src={logo3} alt="" />
                        <h2 style={{marginLeft:"12px"}}>FeatherDev</h2>
                    </div>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center", margin:"auto"}}>
                        <img src={logo4} alt="" />
                        <h2 style={{marginLeft:"12px"}}>Spherule</h2>
                    </div>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center", margin:"auto"}}>
                        <img src={logo5} alt="" />
                        <h2 style={{marginLeft:"12px"}}>GlobalBank</h2>
                    </div>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center", margin:"auto"}}>
                        <img src={logo6} alt="" />
                        <h2 style={{marginLeft:"12px"}}>Nietzsche</h2>
                    </div>
                </div>
               
            </div>
            <div style={{textAlign:"center", margin:"auto", marginTop:"90px"}}>
              <p style={{color:"#6941c6"}}>Features</p>
              <p style={{fontSize:"30px", marginTop:"10px"}}><b>Analytics that feels like it’s from the future</b></p>  
              <p style={{marginTop:"20px", fontSize:"15px", color:"gray"}}>Powerful, self-serve product and growth analytics to help you convert, engage,<br></br> and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", margin:"70px 130px"}}>
              <div>
                <div style={{textAlign:"center"}}>
                  <img src={f1} alt="" />
                  <p style={{fontSize:"20px", marginTop:"10px"}}><b>Share team inboxes</b></p>
                  <p style={{color:"gray", marginTop:"10px"}}>Whether you have a team of 2 or 200, our shared <br></br> team inboxes keep everyone on the same page <br></br> and in the loop.</p>
                </div>
              </div>
              <div>
                <div style={{textAlign:"center"}}>
                  <img src={f2} alt="" />
                  <p style={{fontSize:"20px", marginTop:"10px"}}><b>Deliver instant answer</b></p>
                  <p style={{color:"gray", marginTop:"10px"}}>An all-in-one customer service platform that helps <br></br> you balance everything your customers need to be <br></br>happy.</p>
                </div>
              </div>
              <div>
                <div style={{textAlign:"center"}}>
                  <img src={f3} alt="" />
                  <p style={{fontSize:"20px", marginTop:"10px"}}><b>Manage your team with reports</b></p>
                  <p style={{color:"gray", marginTop:"10px"}}>Measure what matters with Untitled’s easy-to-use <br></br> reports. You can filter, export, and drilldown on the <br></br>data in a couple clicks happy.</p>
                </div>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", margin:"70px 130px"}}>
              <div>
                <div style={{textAlign:"center"}}>
                  <img src={f4} alt="" />
                  <p style={{fontSize:"20px", marginTop:"10px"}}><b>Connect with customers</b></p>
                  <p style={{color:"gray", marginTop:"10px"}}>Whether you have a team of 2 or 200, our shared <br></br> team inboxes keep everyone on the same page <br></br> and in the loop.</p>
                </div>
              </div>
              <div>
                <div style={{textAlign:"center"}}>
                  <img src={f5} alt="" />
                  <p style={{fontSize:"20px", marginTop:"10px"}}><b>Connect the tools you already use</b></p>
                  <p style={{color:"gray", marginTop:"10px"}}>An all-in-one customer service platform that helps <br></br> you balance everything your customers need to be <br></br>happy.</p>
                </div>
              </div>
              <div>
                <div style={{textAlign:"center"}}>
                  <img src={f6} alt="" />
                  <p style={{fontSize:"20px", marginTop:"10px"}}><b>Our people make the difference</b></p>
                  <p style={{color:"gray", marginTop:"10px"}}>Measure what matters with Untitled’s easy-to-use <br></br> reports. You can filter, export, and drilldown on the <br></br>data in a couple clicks happy.</p>
                </div>
              </div>
            </div>
        </div>
        <div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
              <img src={logo7} alt=""/> 
              <p style={{fontSize:"25px", color:"#6941c9"}}>Sisyphus</p>
            </div>
            <div  style={{textAlign:"center", marginTop:"40px"}}>
              <p style={{fontSize:"30px"}}><b>We’ve been using Untitled to kick start every new <br></br>project and can’t imagine working without it.</b></p>
              <img style={{marginTop:"30px"}} src={avatar2} alt="" />
              <p  style={{fontSize:"25px", marginTop:"10px", marginRight:"30px"}}>Candice Wu</p>
              <p style={{marginTop:"8px", color:"gray", marginRight:"30px"}}>Product Manager, Sisyphus</p>
            </div>
        </div>
        <div style={{textAlign:"center", margin:"auto", marginTop:"70px"}}>
              <button style={{fontFamily:"sans-serif", boxShadow:"none",  height:"35px", width:"95px",color:"#6941c9", border:"3px solid #d6bbfb", borderRadius:"25px",backgroundColor:"white"}}> Features</button>
              <p style={{fontSize:"30px", marginTop:"10px"}}><b>Cutting-edge features for advanced analytics</b></p>  
              <p style={{marginTop:"20px", fontSize:"15px", color:"gray"}}>Powerful, self-serve product and growth analytics to help you convert, engage,<br></br> and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <div style={{textAlign:"center", marginTop:"20px"}}>
          <img src={content1} alt=""/>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", margin:" -40px 130px 0px 130px"}}>
              <div>
                <div style={{textAlign:"center"}}>
                  <img src={f1} alt="" />
                  <p style={{fontSize:"20px", marginTop:"10px"}}><b>Share team inboxes</b></p>
                  <p style={{color:"gray", marginTop:"10px"}}>Whether you have a team of 2 or 200, our shared <br></br> team inboxes keep everyone on the same page <br></br> and in the loop.</p>
                </div>
              </div>
              <div>
                <div style={{textAlign:"center"}}>
                  <img src={f2} alt="" />
                  <p style={{fontSize:"20px", marginTop:"10px"}}><b>Deliver instant answer</b></p>
                  <p style={{color:"gray", marginTop:"10px"}}>An all-in-one customer service platform that helps <br></br> you balance everything your customers need to be <br></br>happy.</p>
                </div>
              </div>
              <div>
                <div style={{textAlign:"center"}}>
                  <img src={f3} alt="" />
                  <p style={{fontSize:"20px", marginTop:"10px"}}><b>Manage your team with reports</b></p>
                  <p style={{color:"gray", marginTop:"10px"}}>Measure what matters with Untitled’s easy-to-use <br></br> reports. You can filter, export, and drilldown on the <br></br>data in a couple click happy.</p>
                </div>
              </div>
            </div>
            <div style={{textAlign:"center", marginTop:"70px"}}>
            <p style={{fontSize:"25px", marginTop:"10px"}}><b>Frequently asked questions</b></p>  
            <p style={{marginTop:"15px", fontSize:"15px", color:"gray"}}>Everything you need to know about the product and billing.</p>
            </div>
            <div>
              <p style={{textAlign:"center", marginTop:"10px", opacity:"20%"}}>_____________________________________________________________________</p>
              <div style={{display:"flex", justifyContent:"space-between", width:"650px", margin:"auto", alignItems:"center", marginTop:"20px"}}>
                <p style={{fontSize:"18px"}}>Is there a free trial available?</p>
                <img src={plus} alt="" />
              </div>
              <p style={{textAlign:"center", marginTop:"10px", opacity:"20%"}}>_____________________________________________________________________</p>
              <div style={{display:"flex", justifyContent:"space-between", width:"650px", margin:"auto", alignItems:"center", marginTop:"20px"}}>
                <p style={{fontSize:"18px"}}>Can I change my plan later?</p>
                <img src={plus} alt="" />
              </div>
              <p style={{textAlign:"center", marginTop:"10px", opacity:"20%"}}>_____________________________________________________________________</p>
              <div style={{display:"flex", justifyContent:"space-between", width:"650px", margin:"auto", alignItems:"center", marginTop:"20px"}}>
                <p style={{fontSize:"18px"}}>What is your cancellation policy?</p>
                <img src={plus} alt="" />
              </div>
              <p style={{textAlign:"center", marginTop:"10px", opacity:"20%"}}>_____________________________________________________________________</p>
              <div style={{display:"flex", justifyContent:"space-between", width:"650px", margin:"auto", alignItems:"center", marginTop:"20px"}}>
                <p style={{fontSize:"18px"}}>Can other info be added to an invoice?</p>
                <img src={plus} alt="" />
              </div>
              <p style={{textAlign:"center", marginTop:"10px", opacity:"20%"}}>_____________________________________________________________________</p>
              <div style={{display:"flex", justifyContent:"space-between", width:"650px", margin:"auto", alignItems:"center", marginTop:"20px"}}>
                <p style={{fontSize:"18px"}}>How does billing work?</p>
                <img src={plus} alt="" />
              </div>
              <p style={{textAlign:"center", marginTop:"10px", opacity:"20%"}}>_____________________________________________________________________</p>
              <div style={{display:"flex", justifyContent:"space-between", width:"650px", margin:"auto", alignItems:"center", marginTop:"20px"}}>
                <p style={{fontSize:"18px"}}>How do I change my account email?</p>
                <img src={plus} alt="" />
              </div>
            </div>
            <div style={{textAlign:"center", marginTop:"70px"}}>
              <img src={avatar3} alt="" />
              <h4 style={{fontSize:"20px", marginTop:"10px"}}><b>Still have questions </b></h4>
              <p style={{marginTop:"20px", fontSize:"18px", color:"gray"}}>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
              <button style={{padding:"12px 20px", fontSize:"14px",border:"1px solid #d6bbfb", borderRadius:"6px", backgroundColor:"#7f56d9", color:"white", marginLeft:"10px", marginTop:"25px", fontFamily:"sans-serif"}}>Get in Touch</button>
            </div>
            <div>
            <div style={{display:"flex", justifyContent:"space-between", width:"1200px", margin:"auto", alignItems:"center", marginTop:"70px"}}>
                <div>
                <p style={{fontSize:"16px", color:"#7f56d9"}}>Our blog</p>
                <p style={{fontSize:"22px", marginTop:"15px"}}><b>Latest Blog Posts</b></p>
                <p style={{fontSize:"14px", marginTop:"12px", color:"#7f56d9"}}>Tool and strategies modern teams need to help their companies grow.</p>
                </div>
                <div>
                <button style={{padding:"12px 20px", fontSize:"14px",border:"1px solid #d6bbfb", borderRadius:"6px", backgroundColor:"#7f56d9", color:"white", marginLeft:"10px", marginTop:"25px", fontFamily:"sans-serif"}}>View all posts</button>
                </div>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-evenly", margin:"auto", width:"1250px", marginTop:"50px"}}>
              <div>
                <img src={card1} alt="" />
                <h5 style={{fontSize:"16px", color:"#7f56d9", marginTop:"10px"}}>Our blog</h5>
                <h5 style={{fontSize:"22px", marginTop:"15px"}}><b>Latest Blog Posts</b></h5>
                <p style={{marginTop:"8px", fontSize:"18px", color:"gray", width:"390px"}}>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
              </div>
              <div>
                <img src={card2} alt="" />
                <h5 style={{fontSize:"16px", color:"#7f56d9", marginTop:"10px"}}>Product</h5>
                <h5 style={{fontSize:"22px", marginTop:"15px"}}><b>Migrating to Linear 101</b></h5>
                <p style={{marginTop:"8px", fontSize:"18px", color:"gray", width:"390px"}}>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
              </div>
              <div>
                <img src={card3} alt="" />
                <h5 style={{fontSize:"16px", color:"#7f56d9", marginTop:"10px"}}>Software Engineering</h5>
                <h5 style={{fontSize:"22px", marginTop:"15px"}}><b>Building your API stack</b></h5>
                <p style={{marginTop:"8px", fontSize:"18px", color:"gray", width:"390px"}}>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
              </div>
            </div>  
            <div style={{textAlign:"center", marginTop:"70px"}}>
              <h4 style={{fontSize:"20px", marginTop:"10px"}}><b>Start Your Free Trial </b></h4>
              <p style={{marginTop:"20px", fontSize:"18px", color:"gray"}}>Join over 4,000+ startups already growing with Untitled.</p>
              <button style={{padding:"12px 20px", fontSize:"14px",border:"1px solid #d6bbfb", borderRadius:"6px", backgroundColor:"white", color:"#7f56d9", marginLeft:"10px", marginTop:"25px", fontFamily:"sans-serif"}}>Learn more</button>
              <button style={{padding:"12px 20px", fontSize:"14px",border:"1px solid #d6bbfb", borderRadius:"6px", backgroundColor:"#7f56d9", color:"white", marginLeft:"10px", marginTop:"25px", fontFamily:"sans-serif"}}>Get started</button>
            </div>
            <div style={{marginTop:"70px", display:"flex", justifyContent:"space-between", width:"1100px", margin:"auto", alignItems:"center", }}>
              <div>
                <p style={{color:"#7f56d9"}}><b>Product</b></p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Overview</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Features</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Solution</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Tutorial</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Pricing</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Releases</p>
              </div>
              <div>
                <p style={{color:"#7f56d9"}}><b>Company</b></p>
                <p style={{marginTop:"15px", opacity:"60%"}}>About Us</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Careers</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Press</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>News</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>MEdia kit</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Contact</p>
              </div>
              <div>
                <p style={{color:"#7f56d9"}}><b>Resources</b></p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Blog</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Newsletter</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Events</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Help center</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Tutorials</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Suppport</p>
              </div>
              <div>
                <p style={{color:"#7f56d9"}}><b>Social</b></p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Twitter</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Linkedin</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Facebook</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>GitHub</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>AngelLIst</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Dribble</p>
              </div>
              <div>
                <p style={{color:"#7f56d9"}}><b>Legal</b></p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Terms</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Privacy</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Cookies</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Licenses</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Settings</p>
                <p style={{marginTop:"15px", opacity:"60%"}}>Contact</p>
              </div>
            </div>
            <h1 style={{textAlign:"center", opacity:"50%", color:"#7f56d9"}}>_________________________________________________________________________________</h1>
            <div style={{display:"flex", justifyContent:"space-between",alignItems:"center", width:"1300px", margin:"auto", marginTop:"10px"}}>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <img src={logomark} alt="" style={{height:"60px", width:"60px"}} />
              <p style={{fontSize:"25px", color:"#7f56d9"}}>Untitled UI</p>
              </div>
              <div style={{color:"gray"}}>© 2077 Untitled UI. All rights reserved.</div>
            </div>
    </React.Fragment>
  )
}

export default Component1