import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card(props){
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                        <h5 className="card-title text-muted text-uppercase text-center">{props.title}</h5>
                        <h6 className="card-price text-center">$ {props.price}<span className="period">/month</span></h6>
              
            <hr></hr>
            <ul className="fa-ul">
                        {
                            props.selected.map((e)=>{
                                return <li><span className="fa-li"><FontAwesomeIcon
                                icon="check"
                              /></span>{e}</li>
                            })
                        }

                        {
                            props.unselected.map((e)=>{
                                return <li className="text-muted"><span className="fa-li"><FontAwesomeIcon
                                icon="times"
                              /></span>{e}</li>
                            })
                        }
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Card;