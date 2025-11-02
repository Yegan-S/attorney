import React from "react";
import { Scale }from "lucide-react";

export default function Service(){
    return(
        <div>
              <div id="service" className="flex flex-col text-center p-4 rtl">
            
            <h3 className="font-semibold text-2xl py-2 text-gray-800 dark:text-gray-100 ">
                 حوزه های تخصصی خدمات</h3>
                 

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
        </div>
    );
}