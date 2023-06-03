import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="border-t-2 shadow-sm  text-center flex flex-row justify-evenly p-4" >
            &copy;MacArthur Kevin 
&nbsp;
<Link to="">Terms and Privacy</Link>
      &nbsp;
            <Link to="">About</Link>
            &nbsp;
            <Link to="">Contact</Link>

            <Link to="Form">Publish</Link>
        </div>
     );
}
 
export default Footer;