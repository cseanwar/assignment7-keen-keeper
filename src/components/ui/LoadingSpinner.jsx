import { RingLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#F8FAFC]">
            <RingLoader color="#244D3F" size={80} />
        </div>
    );
};

export default LoadingSpinner;