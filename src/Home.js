import React from "react";
import "./Home.css"



export default function Home() {
    return (
        <div>
            <h1 className="text-center py-2 font-semibold text-lg text-gray-800 dark:text-gray-100 "> درباره ما</h1>

        <div className="flex justify-center items-center  py-2 " >
     <img src="/images/simaa.jpg" alt="sima" className="w-48 h-48 rounded-full shadow-lg "></img>
     </div>

     <div className=" rounded-full py-2">
     <p className=" text-lg text-center font-normal text-gray-800 dark:text-gray-100">
           .موسسه حقوقی سایداد با تکیه بر تجربه, تخصص و تعهد, مجموعه ایی از خدمات جامع در حوزه مشاوره و وکالت را به اشخاص حقیقی و حقوقی ارایه می دهد
        <br></br>
         .تعهد, تخصص و تجربه در کنار دانش به روز حقوقی, این گروه را به انتخابی مطمین برای مسایل حقوقی پیچیده تبدیل کرده است
         </p>
         <br></br>
             
                <h1 className="font-semibold text-lg text-center text-gray-800 dark:text-gray-100">تیم حقوقی</h1>
                <p className=" text-lg text-center font-normal text-gray-800 dark:text-gray-100" >
                .موسسه سایداد از جمعی از وکلای پایه یک دادگستری, مشاوران حقوقی, و کارشناسان رسمی تشکیل شده است که در کنار یکدیگر, راهکارهای حقوقی دقیق و تخصصی را متناسب با نیاز هر موکل ارایه می دهند
                .برای مشاوره حقوقی و همکاری های تخصصی, می توانید از طریق سایت یا شماره های اعلام شده با گروه سایداد در ارتباط باشید
          </p>
          </div>

          <div className="flex justify-center items-center text-center p-3 text-gray-800 dark:text-gray-100">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100"> حوزه های تخصصی خدمات</h3>
            <ul>
                <li>

                </li>
            </ul>

          </div>

      <p className="text-center text-4xl text-black py-4 "> This website is in progress</p>
        </div>
    );
}