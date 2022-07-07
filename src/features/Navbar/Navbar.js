import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
export const Navbar = ()=>{
    useEffect(()=>{
        return()=>{

        }
    },[])
    return (<nav className="top yellow10 right-align ">
            <Link to="/iceCreamV2"><a className="chip round"><div className="progress right"></div><i>home</i></a></Link>
            <Link to="/OrderNow"><a className="chip round"><div className="progress right"></div><span>Order Now</span></a></Link>
            <Link to="/ReviewOrder"><a className="chip round"><div className="progress right"></div><span className="material-icons">
shopping_cart
</span></a></Link>
    </nav>)
}