import {useState} from "react"
import {useNavigate,Link} from "react-router-dom";




function Login() {
const navigate=useNavigate();

const [email,setEmail]=useState("");
const [password,SetPassword]=useState("");
const [error,setError]=useState("");
const [loading,setLoading]=useState(false);

async function handleLogin(e){
       e.preventDefault();
       setError("");
       setLoading(true);

       try{
        //api calling
        const res=await fetch("yahan pe apna login ka api dalo ", {
          method :"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.Stringify({email,password});

        });
        const data=await res.json();
        if(!res.ok){
          setError(data.message || "login failed")
          return ;
        }
        setSuccess(true);

       } catch(e){
        setError("something went wrong")
        console.log(e);
       } finally{
        setLoading(false);
       }
}
  return (
    <div>
      <div>
        {success?(
          <div>
            <h1>Login successful</h1>
            <p>welcome back </p>
            <button
            onClick={()=>navigate("/logout")}
            >
go to logout
            </button>
            </div>
        ):(
          <form
          onSubmit={handleLogin}
          >
           <h1>
            Login
           </h1>
           <input
           type="email"
           placeholder="email"
           value={email}
           onChange={(e)=>
            setEmail(e.target.value)
           }
            required
           />


           <input
           type="password"
           placeholder="password"
           value={password}
           onChange={(e)=>
            setEmail(e.target.value)
           }
            required
           />
           
           {error && (
            <p>{error}</p>
           )}
       <button
       type="submit"
       disabled={loading}
       >
{loading ?"logging in...":
"login"
}
       </button>

       <p>
        dont have an account ?{" "}
        <Link to ="/signup"
        classname="underline"
        >
        signup</Link>
       </p>
         
          </form>
        )}
      </div>
    </div>
  )
}

export default Login
