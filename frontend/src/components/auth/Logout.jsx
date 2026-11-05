import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Logout(){
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false);
    const [error, setError]=useState("");

    async function handleLogout(){
       setLoading(true);
       setError("");

       try{
        const res=await fetch ("yaha pe logout ka api aayega ",{
            method:"POST",

        })
        const data=await res.json();
        if(!res.ok){
            setError(data.message || "logout failed");
            return ;
        }

        navigate("/login");
       } catch(e){
        console.log(e);
        setError("failed to log the user out");
       } finally{
        setLoading(false);
       }
    }
    return(
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
            <div className="w-full max-w-sm bg-white text-black p-8 rounded-xl border border-gray-200">

                <h1 className="text-2xl font-semibold tracking-tight mb-3">
                    logout
                </h1>

                <p className="text-sm text-gray-500 mb-6">
                    are you sure you wanna logout
                </p>

                {error&&(
                    <p className="text-sm text-red-500 mb-4">{error}</p>
                )}

                <button
                 onClick={handleLogout}
                 disabled={loading}
                 className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white py-3 rounded-md text-sm font-medium transition-colors"
               >
                    {loading?"logging out":"logout"}
                </button>

                <button
                onClick={()=>navigate("/login")}
                className="w-full mt-3 bg-white hover:bg-gray-100 text-gray-700 py-3 rounded-md text-sm font-medium border border-gray-200 transition-colors">
                 cancel
                </button>

            </div>
        </div>
    )
}
export default Logout;