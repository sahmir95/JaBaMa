import {useState,useEffect} from "react";
import data from "../../json/data.json"
export const Image = () => {
    const [jsonData,setJsonData]=useState(null)
    useEffect(() => {
        setJsonData(data)
    },[]);

    return (
        <div>
                {jsonData.map((id,images) => (
                <div>
                    <div key={id}>
                        <img src={images[0]} alt="image-one"/>
                    </div>
                    <div>
                        <img src={images[1]} alt="image-two"/>
                        <img src={images[2]} alt="image-three"/>
                        <img src={images[3]} alt="image-four"/>
                        <img src={images[4]} alt="image-five"/>
                    </div>
                </div>
                ))}
        </div>
    );
};
