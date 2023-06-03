const useAuth=()=>{
 const result=sessionStorage.getItem("login");

 return result==="true";
}
export default useAuth;