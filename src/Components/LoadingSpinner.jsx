import React from "react";

import loader from "../../public/loader.json"; // your animation file
import Lottie from "lottie-react";

const LoadingSpinner = () => {
    return (
        <div className="w-full h-[200px] flex justify-center items-center">
            <Lottie 
                animationData={loader}
                loop={true}
                className="w-32 h-32"
            />
        </div>
    );
};

export default LoadingSpinner;
