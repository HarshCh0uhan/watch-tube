import React from "react";
import Button from "./Button";

const ButtonList = () => {
    const buttonData = ["All", "Gaming", "Songs", "Live", "Sports", "Cooking", "Standup Comedy", "Movies", "News", "Coding", "Art"]
    return (
        <div className="flex justify-center">
            {buttonData.map((button, index) => <Button key={index} data={button}/>)}
        </div>
    )
}

export default ButtonList;