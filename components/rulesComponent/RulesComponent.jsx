
export const RulesComponent = ({rules,type}) => {
    return (
        <div className="w-full h-[240px] mt-[20px]">
            <div className="w-full flex justify-start items-start">
                <div className="w-[50px] mt-[12px]">
                    <img className="w-[24px] h-[24px]" src="https://img.icons8.com/external-outline-geotatah/64/external-law-election-world-outline-geotatah.png" alt="external-law-election-world-outline-geotatah"/>
                </div>
                <div className="w-full flex flex-col justify-start items-center">
                    <div className="w-full font-bold text-[0.9rem]">مقررات {type}</div>
                    <ul className="w-full h-[200px] flex justify-between items-start flex-col mt-[8px]">
                        {rules.map((item) => {
                            return (
                                <li className="w-full flex justify-start items-center">
                                    <div className="w-[24px]">
                                        {item.permission ? (<img className="w-[12px] h-[12px]" src="https://img.icons8.com/metro/26/checkmark.png" alt="checkmark"/>) :(<img className="w-[12px] h-[12px]" src="https://img.icons8.com/ios-glyphs/30/delete-sign.png" alt="close"/>)}
                                    </div>
                                    <div className="w-full font-light text-[0.75rem]">
                                        {item.statement}
                                    </div>
                                </li>
                            )

                        })}
                    </ul>
                </div>
            </div>

        </div>
    );
};

