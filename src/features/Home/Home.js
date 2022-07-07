
import './Home.css';
import homeIceCream from '../../Pictures/homeIceCream.jpg';
import { useEffect , useState} from 'react';
import iceCreamHome from '../../Pictures/iceCreamHome.svg';
export const Home = ()=>{
  
  const [matches, setMatches]  = useState(
    window.matchMedia("(max-width: 556px)").matches
  )
   
  useEffect(() => {
    window
    .matchMedia("(max-width: 556px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
    
    return(<div className="Home top-space">
        <article className="no-padding">
  <img className="responsive" src={homeIceCream}/>
  <div className="responsive absolute top left right padding  white-text">
    {matches && (<div><h3 className="center-align yellow10 small">New Flavors</h3>
    <h4 className="center-align yellow10">Every Week</h4></div>)}
    {!matches && (<div><h1 className="center-align yellow10 small">New Flavors</h1>
    <h3 className="center-align yellow10">Every Week</h3></div>)}
  </div>
  

</article>


    </div>)
}