import React from "react";
import { Scale }from "lucide-react";
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

     <div className="py-2">
     <p className="box-border size-52 text-sm text-center font-normal text-gray-800 dark:text-gray-100 animate-fadeIn delay-300
      border-2 border-gray-400 dark:border-gray-600 rounded-full p-4 m-4 bg-white/80 dark:bg-black/40 shodow-md">
           .موسسه حقوقی سایداد با تکیه بر تجربه, تخصص و تعهد, مجموعه ایی از خدمات جامع در حوزه مشاوره و وکالت را به اشخاص حقیقی و حقوقی ارائه می دهد
        <br></br>
         .تعهد, تخصص و تجربه در کنار دانش به روز حقوقی, این گروه را به انتخابی مطمئن برای مسائل حقوقی پیچیده تبدیل کرده است
         </p>
         <br></br>
             
        <h1 className="font-semibold text-lg text-center text-gray-800 dark:text-gray-100 animate-fadeIn delay-800">
            تیم حقوقی 
            </h1>
        <p className=" text-lg text-center font-normal text-gray-800 dark:text-gray-100 animate-fadeIn delay-800" >
                .موسسه سایداد از جمعی از وکلای پایه یک دادگستری, مشاوران حقوقی, و کارشناسان رسمی تشکیل شده است که در کنار یکدیگر, راهکارهای حقوقی دقیق و تخصصی را متناسب با نیاز هر موکل ارائه می دهند
                .برای مشاوره حقوقی و همکاری های تخصصی, می توانید از طریق سایت یا شماره های اعلام شده با گروه سایداد در ارتباط باشید
          </p>
          </div>

          

          <div className="flex flex-col text-center p-4 rtl">
            
            <h3 className="font-semibold text-lg py-2 text-gray-800 dark:text-gray-100 ">
                 حوزه های تخصصی خدمات</h3>
                 
                 <div className="flex flex-row items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                 <Scale size={20}/>
                <h4 className="text-base/10 font-semibold text-gray-800 dark:text-gray-100">
                    تنظیم و تدوین قراردادها
                </h4>
                </div>

                <ul className="list-disc text-base text-center items-center rtl space-y-2 ">

                <li>تنظیم انواع قراردادهای تجاری,ملکی,پیمانکاری,شراکت,استخدامی و بین المللی</li>
                <li>بررسی و اصلاح قراردادهای موجود با رویکرد پیشگیری از اختلافات</li> 
                <li>ارائه مشاوره در خصوص تعهدات و ضمانت اجرای مفاد قراردادی</li>
            </ul>

          </div>

      <p className="text-center text-4xl text-black py-4 "> This website is in progress</p>
        </div>
    );
}