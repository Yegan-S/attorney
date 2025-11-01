import React from "react";
import "./Home.css";
import About from "./About";
import Service from "./Service";
import Team from "./Team";
import ContactForm from "./ContactForm";






export default function Home() { 

    
    return (
    <div className="">

         <About/>  
          
        <Service/>

        <Team/>
         
      <ContactForm />
       


      <p className="text-center text-4xl text-black py-4 "> This website is in progress</p>

        </div>
    );
}