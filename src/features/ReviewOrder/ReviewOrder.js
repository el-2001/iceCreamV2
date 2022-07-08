
import './ReviewOrder.css';
export const ReviewOrder = ()=>{
  const openModal = ()=>{
   const modalToOpen = document.getElementById('order');
   modalToOpen.classList.add("active")

  }
  const closeModal = ()=>{
    const modalToOpen = document.getElementById('order');
    modalToOpen.classList.remove("active")
  }
    return(<div className="review-order top-space">
            <h2 className="center-align">Review Order</h2>
            <button onClick={openModal}>Confirm Order</button>
            <div id="order" className="modal medium top">
  <h2 className="center-align middle">Order Confirmed</h2>
  <h4 className="center-align middle">Thank you!</h4>
  <nav className="center-align middle">
    <button onClick={closeModal}>Close</button>
  </nav>
</div>
    </div>)
}