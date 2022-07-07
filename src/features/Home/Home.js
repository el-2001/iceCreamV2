
import './Home.css';
import homeIceCream from '../../Pictures/homeIceCream.jpg';

export const Home = ()=>{
    return(<div className="Home top-space">
        <article className="no-padding">
  <img className="responsive medium" src={homeIceCream}/>
  <div className="absolute bottom left right padding bottom-shadow white-text">
    <h2 className="center-align yellow10 ">New Flavors</h2>
    <h5 className="center-align yellow10">Every Week</h5>
   
  </div>
</article>

    </div>)
}