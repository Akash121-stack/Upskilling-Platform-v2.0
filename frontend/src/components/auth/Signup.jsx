
// we are going to take name , email and password as input form the user and then we are going to 
//send it to the backend and then also what the backend team will do is return us a success message with a 
// user.id and user.email and user.name with status code also
import {useState} from "react";
import {useNavigate, Link} from "react-router-dom"
function Signup() {
  const navigate=useNavigate();

  const [name , setName]=useState("");
  const [email, setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [loading,setLoading]=useState("");
  const [success,setSuccess]=useState("");

 async function handleSignup(e){
  e.preventDefault();
  setError("");
  setLoading(true);

  try{
    const res=await fetch("apan ko yaha pe apna signup route dalna hai",{
      method :"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.Stringify({name , email ,password}),
    });

    const data =await res.json();
    if(!res.ok){
      setError(data.message || "signup failedddd")
      return ;
    }

    setSuccess(true);
  } catch(e){
     setError("something went wrong. please try agian ")
  } finally {
    setLoading(false);
  }
 }
  return (
     <div>
      <div>
        {success ?(
          <div>
            <h1>signup successful</h1>
            <p>your accoutn has been successfully created </p>
            <button onClick={()=>navigate("/login")}>
              go to login
            </button>
          </div>
        ):(
          <form
          onSubmit={handleSignup}
          >
            <h1>create account</h1>
            <input
            type="text"
            placeholder="full name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
            />

            <input
            type="email"
            placeholder="enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            />


            <input
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            />

            {error && (
              <p>{error}</p>
            )}

            <button 
            type="submit"
            disabled={loading}

            >
              {loading?"creating account...":"signup"}
            </button>

            <p>
              Already have an account?{" "}
              <Link to ="/login"
              className="underline">Login</Link>
            </p>

          </form>
        )}
      </div>
     </div>
  )
}

export default Signup
