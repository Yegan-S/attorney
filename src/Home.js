import React from "react";
import { Scale }from "lucide-react";
import "./Home.css"



export default function Home() {
    return (
    <div className="">

    <h1 className="text-center  py-2 font-semibold text-lg text-gray-800 dark:text-gray-100 animate-fadeIn delay-200">
        درباره ما         
    </h1>

     <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-4">

        <div className="flex justify-center items-center w-44 h-44  border-2 border-gray-400 dark:border-gray-600  rounded-full p-4 bg-white/80 dark:bg-black/40 shodow-md animate-fadeIn delay-300">
             <p className="text-sm text-center font-normal text-gray-800 dark:text-gray-100  leading-relaxed">
            موسسه حقوقی سایداد با تکیه بر تجربه, تخصص و تعهد, مجموعه ایی از خدمات جامع در حوزه مشاوره و وکالت را به اشخاص حقیقی و حقوقی ارائه می دهد
                 </p>
                  </div>
                  
        <div className="flex justify-center items-center w-44 h-44  border-2 border-gray-400 dark:border-gray-600  rounded-full p-4 bg-white/80 dark:bg-black/40 shodow-md animate-fadeIn delay-300">
              <p className="text-sm text-center font-normal text-gray-800 dark:text-gray-100 leading-relaxed">
                تعهد, تخصص و تجربه در کنار دانش به روز حقوقی, این گروه را به انتخابی مطمئن برای مسائل حقوقی پیچیده تبدیل کرده است. 
                </p>
         </div>
        
        
         </div>


          

          <div className="flex flex-col text-center p-4 rtl">
            
            <h3 className="font-semibold text-lg py-2 text-gray-800 dark:text-gray-100 ">
                 حوزه های تخصصی خدمات</h3>
                 
                 <div className="flex flex-row items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                 <Scale size={20}/>
                <h4 className="text-base/10 font-bold py-2 dark:text-blue-400 ">
                    تنظیم و تدوین قراردادها
                </h4>
                </div>

                <ul className="list-disc text-base text-center items-center rtl space-y-2 dark:text-gray-100 ">

                <li>تنظیم انواع قراردادهای تجاری,ملکی,پیمانکاری,شراکت,استخدامی و بین المللی</li>
                <li>بررسی و اصلاح قراردادهای موجود با رویکرد پیشگیری از اختلافات</li> 
                <li>ارائه مشاوره در خصوص تعهدات و ضمانت اجرای مفاد قراردادی</li>
            </ul>

             <div className="flex flex-row items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                 <Scale size={20}/>
                <h4 className="text-base/10 font-bold py-2  dark:text-blue-400">
                    داوری و حل و فصل اختلافات
                </h4>
                </div>

                <ul className="list-disc text-base text-center items-center rtl space-y-2 dark:text-gray-100">

                <li>پذیرش داوری در قراردادهای داخلی و بین المللی</li>
                <li>ارائه خدمات داوری در اختلافات تجاری, ملکی و خانوادگی</li> 
                <li>تهیه و اجرای رأی داوری مطابق با اصول قانونی</li>
            </ul>

             <div className="flex flex-row items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                 <Scale size={20}/>
                <h4 className="text-base/10 font-bold py-2  dark:text-blue-400">
                    دعاوی خانواده
                </h4>
                </div>

                <ul className="list-disc text-base text-center items-center rtl space-y-2 dark:text-gray-100">

                <li>طلاق توافقی و غیرتوافقی</li>
                <li>مهریه,نفقه,حضانت فرزند و اجرت المثل</li> 
                <li>تنظیم توافق نامه های پیش از ازدواج و صلح نامه های خانوتدگی</li>
            </ul>

             <div className="flex flex-row items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                 <Scale size={20}/>
                <h4 className="text-base/10 font-bold py-2 dark:text-blue-400">
                     دعاوی مالی, ملکی و ثبتی
                </h4>
                </div>

                <ul className="list-disc text-base text-center items-center rtl space-y-2 dark:text-gray-100">

                <li>دعاوی مربوط به مالکیت, سرقفلی اجاره, تفکیک و افراز</li>
                <li>دعاوی مربوط به اسناد رسمی و اداره ثبت اسناد و املاک</li> 
                <li>پیگیری پرونده های حقوقی و ثبتی تا صدور رأی قطعی</li>
            </ul>

             <div className="flex flex-row items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                 <Scale size={20}/>
                <h4 className="text-base/10 font-bold py-2  dark:text-blue-400">
                     دعاوی کیفری
                </h4>
                </div>

                <ul className="list-disc text-base text-center items-center rtl space-y-2 dark:text-gray-100 ">

                <li>دفاع از متهم و شاکی در پرونده های کلاهبرداری,جعل,خیانت در امانت و جرایم سایبری </li>
                <li>حضور در مراحل بازپرسی,دادسرا و دادگاه های کیفری</li> 
                <li>تنظیم شکواییه و لوایح دفاعیه تخصصی</li>
            </ul>

             <div className="flex flex-row items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                 <Scale size={20}/>
                <h4 className="text-base/10 font-bold py-2  dark:text-blue-400">
                    دیوان عدالت اداری
                </h4>
                </div>

                <ul className="list-disc text-base text-center items-center rtl space-y-2 dark:text-gray-100 ">

                <li>طرح و پیگیری دعاوی علیه تصمیمات ادارات و سازمان های دولتی</li>
                <li>اعتراض به آرای کمیسون ها و مراجع شبه قضایی</li> 
                <li>مشاوره در خصوص حقوق استخدامی و اداری</li>
            </ul>

          </div>

          <div className="py-2">

           <h1 className="font-bold text-lg text-center  dark:text-gray-100 animate-fadeIn delay-800">
            تیم حقوقی 
            </h1>
        <p className=" text-lg text-center font-normal text-gray-800 dark:text-gray-100 animate-fadeIn delay-800" >
                .موسسه سایداد از جمعی از وکلای پایه یک دادگستری, مشاوران حقوقی, و کارشناسان رسمی تشکیل شده است که در کنار یکدیگر, راهکارهای حقوقی دقیق و تخصصی را متناسب با نیاز هر موکل ارائه می دهند
                .برای مشاوره حقوقی و همکاری های تخصصی, می توانید از طریق سایت یا شماره های اعلام شده با گروه سایداد در ارتباط باشید
          </p>
          </div>

          
    <div className="flex justify-center items-center  py-2 animate-fadeIn " >
          <img src="/images/simaa.jpg" alt="sima" className="w-48 h-48 rounded-full shadow-lg  max-auto">
         </img>
     </div>


     <form className="space-y-4">
        <div>
            <lable className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                  نام <span className="text-red-500">*</span>
            </lable>
            <input type="text" id="firstName" required placeholder="نام خود را وارد کنید" 
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900
             text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </input>
        </div>

     <div className="text-center">
     <button type="submit"
                className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-md ">
                    ارسال 

        </button>
        </div>

        </form>


      <p className="text-center text-4xl text-black py-4 "> This website is in progress</p>

        </div>
    );
}