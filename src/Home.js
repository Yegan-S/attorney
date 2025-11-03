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

        </div>
    );
}