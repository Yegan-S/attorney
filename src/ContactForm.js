import React, { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] =useState({
            firstName: "",
            lastName: "",
            phone: "",
            problem: "",
        });
         
        const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
         };
    
         const handleSubmit = (e) => {
            e.preventDefault();
    
            if ( !formData.firstName || !formData.lastName || !formData.phone || !formData.problem){
                alert( "please fill out all fields before submitting. ");
                return;
            }
            
            const yourPhoneNumber = "989120533867";
    
            const message = `Hello A new client submitted a form:\n\n
            Name: ${formData.firstName} ${formData.lastName}\n
            phone: ${formData.phone}\n
            problem: ${formData.problem}`;
    
    
            const whatsappURL = ` https://wa.me/${yourPhoneNumber}?text=${encodeURIComponent(message)}`;
    
    
            window.open(whatsappURL, "_blank");
    
            
            setFormData({ firstName: "", lastName: "", phone: "", problem: ""});
         };
    
    
    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700
         p-6 w-full max-w-2xl">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
                فرم تماس با ما
            </h2>
     <form onSubmit={handleSubmit} className="space-y-4">

        {/*First Name */}
        <div>
            <lable className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                  نام <span className="text-red-500">*</span>
            </lable>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="نام خود را وارد کنید" 
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900
             text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </input>
        </div>

        {/* Family Name */}

        <div>
             <lable className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                  نام خانوادگی<span className="text-red-500">*</span>
            </lable>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="نام خانوادگی خود را وارد کنید" 
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900
             text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </input>
        </div>

        {/* Phone */}
        <div>
             <lable className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                  شماره موبایل <span className="text-red-500">*</span>
            </lable>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="شماره موبایل خود را وارد کنید" 
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900
             text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </input>
        </div>

        {/*Problem Description */}
        <div>
             <lable className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                  توضیح مشکل<span className="text-red-500">*</span>
            </lable>
            <textarea row="4" name="problem" value={formData.problem} onChange={handleChange} required placeholder="مشکل خود را شرح دهید" 
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900
             text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </textarea>
        </div>

          {/* Send Button */}
     <div className="text-center">
     <button type="submit"
                className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-md ">
                    ارسال 

        </button>
        </div>

        </form>
       </div>
       </div>

    );

}

