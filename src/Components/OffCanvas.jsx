import './OffCanvas.css'
import { IoMdClose } from "react-icons/io";

function OffCanvas(props) {

    function handleClose() {
        props.setincanvas(false);
    }
    function Content(){
      return props.content
    }
  return (
    <div className={`offcanvas ${props.active}`}>
        <span className='offcanvas-close-button' onClick={handleClose}><IoMdClose /></span>
        <Content /> 
    </div>
  );
}
export default OffCanvas