import React from "react";

export default function Team(){
    return(
        <div>
             <div id="team" className="p-6">
            
                       <h1 className="font-semibold text-2xl text-center pb-2  dark:text-gray-100 animate-fadeIn delay-800">
                        تیم حقوقی 
                        </h1>
                    <p className=" text-lg text-center font-normal text-gray-800 dark:text-gray-100 animate-fadeIn delay-800" >
                            .موسسه سایداد از جمعی از وکلای پایه یک دادگستری, مشاوران حقوقی, و کارشناسان رسمی تشکیل شده است که در کنار یکدیگر, راهکارهای حقوقی دقیق و تخصصی را متناسب با نیاز هر موکل ارائه می دهند
                            .برای مشاوره حقوقی و همکاری های تخصصی, می توانید از طریق سایت یا شماره های اعلام شده با گروه سایداد در ارتباط باشید
                      </p>
                      </div>
            
                      
                <div className="flex justify-center items-center rounded-2xl shadow-lg  border border-gray-300 dark:border-gray-700  py-4 animate-fadeIn " >
                   
                      <img src="/images/simaa.jpg" alt="sima" className="w-48 h-48 rounded-full shadow-lg  max-auto">
                     </img>
                     
                     <div className="px-1" >
                     <h2 className="text-center text-xl font-bol">خانم سیما صالحی وکیل پایه یک دادگستری</h2>
                    <h3 className="text-center font-bold">09120533867</h3>
                 </div>
                 </div>
            
        </div>
    );
}