'use client'



export const Facility = ({faci,type,}) => {

    return (
        <div>
            <h2 className="font-bold text-[0.9rem]">امکانات رفاهی {type}</h2>
            <ul>
                        <li style={{textDecoration: faci.hasCooling ? "none" : "line-through"}}>
                            <span></span>
                            <span>سیستم سرمایشی</span>
                        </li>
                <li style={{textDecoration: faci.hasHeating ? "none" : "line-through"}}>
                    <span></span>
                    <span>سیستم گرمایشی</span>
                </li>
                <li style={{textDecoration: faci.hasFurniture ? "none" : "line-through"}}>
                    <span></span>
                    <span>مبله</span>
                </li>
                <li style={{textDecoration: faci ? "none" : "line-through"}}>
                    <span></span>
                    <span>تلویزیون</span>
                </li>
                <li style={{textDecoration: faci.hasWifi ? "none" : "line-through"}}>
                    <span></span>
                    <span>وای فای</span>
                </li>
                <li style={{textDecoration: faci.hasWater ? "none" : "line-through"}}>
                    <span></span>
                    <span>آب</span>
                </li>
                <li style={{textDecoration: faci.hasElectricity ? "none" : "line-through"}}>
                    <span></span>
                    <span>برق</span>
                </li>
                <li style={{textDecoration: faci.hasGas ? "none" : "line-through"}}>
                    <span></span>
                    <span>گاز</span>
                </li>
            </ul>
        </div>
    );
};


