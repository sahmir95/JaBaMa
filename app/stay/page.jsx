import "../globals.css"
const data = {
        "id": 1,
        "title": "اجاره ویلا دوخوابه استخردار آبگرم سروستان کردان",
        "type": "ویلا",
        "discount": 10,
        "rate": 4.2,
        "comments": 79,
        "HasImmediateReserve": true,
        "province": "البرز",
        "city": "کردان",
        "images": [
            "https://cdn.jabama.com/image/890x492/jabama-images/1737810/9e7aa908-13af-4708-84a4-0442400b0ebb.jpg",
            "https://cdn.jabama.com/image/383x240/jabama-images/1479506/ace8fc11-97c4-443d-a259-5e6d317dc955.jpeg",
            "https://cdn.jabama.com/image/383x240/jabama-images/1479506/2887048f-20a3-4a82-83c8-82e839bc1727.jpeg",
            "https://cdn.jabama.com/image/383x240/jabama-images/1479506/def2c0f1-74a8-42bc-ad29-5bdc5813223d.jpeg",
            "https://cdn.jabama.com/image/383x240/jabama-images/1479506/09c679dd-6ca1-4b14-9744-ce813b5bec72.jpeg"
        ],
        "host": {
            "avatar": "https://cdn.jabama.com/image/jabama-images/image_500d6b88-93c4-4ff8-b55c-823300064bee.jpg",
            "name": "مهرداد چهری"
        },
        "summary": "150 متر زیربنا",
        "description": "وشصیشصیشصیشصیشصیشصیشصیشصیشصیشصیشصیشصیشصی 4 کیلومتر استخر رو بسته",
        "capacity": {
            "base": 4,
            "extra": 3
        },
        "price": {
            "base": 2100000,
            "extra": 200000
        },
        "bedroom": {
            "rooms": 2,
            "single": 0,
            "double": 2,
            "traditional": 4
        },
        "bathroom": {
            "persianWC": 1,
            "foreignWC": 0,
            "shower": 1
        },
        "hasCooling": true,
        "hasHeating": true,
        "hasFurniture": true,
        "hasTV": false,
        "hasWifi": true,
        "hasWater": true,
        "hasElectricity": true,
        "hasGas": true
    }
export default function Detail() {
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <div className="w-full h-40">
                <img className="sm:6 h-6" src="https://img.icons8.com/material-outlined/24/1A1A1A/right.png" alt="right"/>
            </div>
            <div className="mx-[20px] flex justify-center items-center flex-col">
                <h1 className="sm:text-center font-medium text-lg ">{data.title}</h1>
                <div className=" font-light flex justify-center items-center mt-5 text-xs gap-1">
                    <div className=" flex justify-center items-center gap-x-1 ">
                        <img className="sm:3 h-3" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>
                        <div className="font-medium">{data.rate}</div>
                        <a className="underline">(17 نظر ثبت شده)</a>
                    </div>
                    <p className="text-lg">.</p>
                    <div className="flex justify-center items-center gap-1">
                        <img className="sm:3 h-3" src="https://img.icons8.com/fluency-systems-filled/48/FAB005/marker.png" alt="marker"/>
                        <a className="underline">{data.province},{data.city}</a>
                    </div>
                </div>
                <div className="w-[80%] h-[1px] bg-main-light-gray mt-[20px]"></div>
                <div className="w-full mt-[20px]">
                    <div className="font-bold">{data.type}</div>
                    <div className="flex justify-between items-center">
                        <div className="w-[70%] font-bold text-[0.9rem] text-main-slate-gray ">اجاره {data.type} در {data.city} به میزبانی {data.host.name}</div>
                        <div className=" w-[30%] flex justify-end">
                            <img src={data.host.avatar} className="w-[50px] rounded-[50%] border-main-black border-[2px]" alt="avatar"/>
                        </div>
                    </div>
                </div>
                <div className="w-[80%] h-[1px] bg-main-light-gray mt-[20px]"></div>
                <div className="mt-[20px] flex justify-center items-center">
                    <div className="w-[10%]"> <img width="24" height="24" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/1A1A1A/external-flash-multimedia-tanah-basah-basic-outline-tanah-basah.png" alt="thunder"/></div>
                    <div className="w-[90%]">
                        <p>رزرو آنی و قطعی جاباما</p>
                        <p>برای رزرو نهایی این آپارتمان نیازی به تأیید از سمت میزبان نخواهید داشت و رزرو شما قطعی خواهد بود.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}