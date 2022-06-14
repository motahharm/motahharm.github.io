

export default function Home() {
    return (
        <div className="text-zink-500">
            <div className="flex flex-col items-center justify-center w-[70vw] mx-auto">
                <h4 className="md:text-3xl text-xl font-medium my-10 text-center">وبسایت شخصی</h4>
                <h1 className="md:text-8xl text-5xl font-bold mb-20 text-center dark:text-gray-100">
                    <text className="text-emerald-500">مطهر مکفی</text>
                    <br />
                    برنامه نویس
                </h1>
                <p className="md:text-2xl text-lg font-thin mb-10">
                    مطهر مکفی برنامه نویس و توسعه دهنده وبسایت هستم.<br />
                    از طریق لینک زیر می توانید وارد گیت هاب من شوید و همراه من در پروژه های اپن سورس مشارکت کنید.
                </p>
                <a href="https://github.com/motahharm"
                className="text-blue-500 text-2xl mb-20 hover:text-blue-700">مشاهده گیت هاب من</a>
            </div>

            <div className="w-100 lg:m-20 my-20 mx-3">
                <h2 className="text-5xl font-semibold mb-10 text-emerald-500">توسعه بک اند</h2>
                <p className="text-2xl font-light mb-5 text-emerald-500">پایتون، جنگو و ...</p>
                <p className="text-2xl font-thin mb-10">
                    برای توسعه بک اند از زبان پایتون و وب فریمورک جنگو استفاده میکنم.
                </p>
                <div className="grid lg:grid-cols-2 gap-4 items-start">
                    <div className="bg-gray-50 rounded-[15px] p-10
                    hover:bg-gray-100 transition-all hover:-translate-y-5 hover:shadow-2xl">
                        <h3 className="text-2xl font-medium mb-5 text-emerald-500">
                            جنگو
                        </h3>
                        <p className="text-2xl font-thin mb-10">
                            یک وب فریمورک قدرتمند برای بک اند که با پایتون نوشته شده است.
                        </p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/2560px-Django_logo.svg.png" />
                    </div>
                    <div className="bg-gray-50 rounded-[15px] p-10
                    hover:bg-gray-100 transition-all hover:-translate-y-5 hover:shadow-2xl">
                        <h3 className="text-2xl font-medium mb-5 text-emerald-500">
                            زبان قدرتمند پایتون
                        </h3>
                        <p className="text-2xl font-thin mb-10">
                            پایتون زبان برنامه نویسی مشهوری است که در هوش مصنوعی، یادگیری ماشین، توسعه بک اند کاربرد گسترده و زیادی دارد.
                        </p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" 
                        className="w-[50%] mx-auto"/>
                    </div>
                </div>
            </div>

            <div className="w-100 lg:m-20 my-20 mx-3">
                <h2 className="text-5xl font-semibold mb-10 text-red-500">ابزار های من</h2>
                <p className="text-2xl font-light mb-5 text-red-500">لینوکس، VSCode و ...</p>
                <p className="text-2xl font-thin mb-10">
                    از سیستم عامل اوبونتو برای توسعه بک اند استفاده میکنم.<br />
                    معمولا از کد ادیتور VSCode استفاده میکنم.
                </p>
                <div className="grid lg:grid-cols-2 gap-4 items-start">
                    <div className="bg-gray-50 rounded-[15px] p-10
                    hover:bg-gray-100 transition-all hover:-translate-y-5 hover:shadow-2xl">
                        <h3 className="text-2xl font-medium mb-5 text-red-500">
                            لینوکس | سیستم عامل قدرتمند
                        </h3>
                        <p className="text-2xl font-thin mb-10">
                            لینوکس سیستم عامل متن باز و مشهوری است که برنامه نویس های زیادی از آن استفاده می کنند.
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-[15px] p-10
                    hover:bg-gray-100 transition-all hover:-translate-y-5 hover:shadow-2xl">
                        <h3 className="text-2xl font-medium mb-5 text-red-500">
                            VSCode | سبک و سریع
                        </h3>
                        <p className="text-2xl font-thin mb-10">
                            وی اس کد یک کد ادیتور سبک و قدرتمند است.
                        </p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" 
                        className="w-[100px] mx-auto"/>
                    </div>
                </div>
            </div>

            <div className="w-100 lg:m-20 my-20 mx-3 text-center">
                <h2 className="text-6xl font-extrabold mb-10 text-indigo-500 text-center">
                    و موارد دیگر ...
                </h2>
                <p className="text-2xl font-light mb-10 text-indigo-500 text-center">
                    راه های ارتباطی:
                </p>
                <div className="grid lg:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-[15px] p-10
                    hover:bg-gray-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/640px-Telegram_2019_Logo.svg.png" 
                        className="h-[100px] mx-auto mb-5"/>
                        <h3 className="text-2xl font-medium mb-5 text-sky-500">
                            Telegram
                        </h3>
                        <a href="https://t.me/motahharmokfi"
                        className="bg-sky-500 m-5 px-5 py-4 rounded-[10px]
                        text-sky-100 hover:bg-sky-700 hover:shadow-2xl shadow-gray-900 transition-all block">
                            تلگرام
                        </a>
                    </div>
                    <div className="bg-gray-50 rounded-[15px] p-10
                    hover:bg-gray-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png" 
                        className="h-[100px] mx-auto mb-5"/>
                        <h3 className="text-2xl font-medium mb-5 text-red-500">
                            Gmail
                        </h3>
                        <a href="mailto:motahharmokfi@gmail.com"
                        className="bg-red-500 m-5 px-5 py-4 rounded-[10px]
                        text-red-100 hover:bg-red-700 hover:shadow-2xl shadow-gray-900 transition-all block">
                            ایمیل به من
                        </a>
                    </div>
                    <div className="bg-gray-50 rounded-[15px] p-5 md:p-10
                    hover:bg-gray-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
                        className="h-[100px] mx-auto mb-5"/>
                        <h3 className="text-2xl font-medium mb-5 text-stone-800">
                            GitHub
                        </h3>
                        <a href="https://github.com/motahharm"
                        className="bg-gray-700 m-5 px-5 py-4 rounded-[10px]
                        text-gray-100 hover:bg-gray-900 hover:shadow-2xl shadow-gray-900 transition-all block">
                            گیت هاب
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
