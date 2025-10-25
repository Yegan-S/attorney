import React from "react";
import "./Home.css"



export default function Home() {
    return (
    <div>

        <div className="flex justify-center items-center  py-2 animate-fadeIn " >
     <img src="/images/simaa.jpg" alt="sima" className="w-48 h-48 rounded-full shadow-lg  max-auto">
     </img>
     </div>

     <h1 className="text-center py-2 font-semibold text-lg text-gray-800 dark:text-gray-100 animate-fadeIn delay-200">
        درباره ما
                 
    </h1>

     <div className=" py-2">
     <p className=" text-lg text-center font-normal text-gray-800 dark:text-gray-100 animate-fadeIn delay-300
      border border-gray-400 dark:border-gray-600 rounded-lg p-4 m-4 bg-white/80 dark:bg-black/40 shodow-md">
           .موسسه حقوقی سایداد با تکیه بر تجربه, تخصص و تعهد, مجموعه ایی از خدمات جامع در حوزه مشاوره و وکالت را به اشخاص حقیقی و حقوقی ارایه می دهد
        <br></br>
         .تعهد, تخصص و تجربه در کنار دانش به روز حقوقی, این گروه را به انتخابی مطمین برای مسایل حقوقی پیچیده تبدیل کرده است
         </p>
         <br></br>
             
        <h1 className="font-semibold text-lg text-center text-gray-800 dark:text-gray-100 animate-fadeIn delay-800">
            تیم حقوقی 
            </h1>
        <p className=" text-lg text-center font-normal text-gray-800 dark:text-gray-100 animate-fadeIn delay-800" >
                .موسسه سایداد از جمعی از وکلای پایه یک دادگستری, مشاوران حقوقی, و کارشناسان رسمی تشکیل شده است که در کنار یکدیگر, راهکارهای حقوقی دقیق و تخصصی را متناسب با نیاز هر موکل ارایه می دهند
                .برای مشاوره حقوقی و همکاری های تخصصی, می توانید از طریق سایت یا شماره های اعلام شده با گروه سایداد در ارتباط باشید
          </p>
          </div>

          <div className="flex justify-center items-center text-center p-3 text-gray-800 dark:text-gray-100">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                 حوزه های تخصصی خدمات</h3>
            <ul>
                <li>

                </li>
            </ul>

          </div>

      <p className="text-center text-4xl text-black py-4 "> This website is in progress</p>
        </div>
    );
}