
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
            <div id="order" class="modal">
  <h5 className="center-align">Order Confirmed</h5>
  <div>Thank you!</div>
  <nav class="center-align">
    <button onClick={closeModal}>Close</button>
  </nav>
</div>
    </div>)
}