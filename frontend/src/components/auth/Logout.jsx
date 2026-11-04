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
        <div>
            <div>
                <h1>logout</h1>
                <p>
                    are you sure you wanna logout
                </p>
                {error&&(
                    <p>{error}</p>
                )}
                <button
                 onClick={handleLogout}
                 disabled={loading}
               >
                    {loading?"logging out":"logout"}
                </button>
                <button
                onClick={()=>navigate("/login")}>
                 cancel
                </button>
            </div>
        </div>
    )
}
export default Logout;