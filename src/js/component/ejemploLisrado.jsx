import PropTypes from 'prop-types';
import { FaPhoneAlt } from 'react-icons/fa';
export const Listado = ({ users, activeUser, setActiveUser, onClick }) => {
    return (
        <ul className="list-group">
            {
                users.length > 0 ?
                    users.map(({ id, name, phone }, index) => {
                        return (
                            <li key={index} className={"list-group-item list-group-item-action " + (activeUser === id ? "active" : "")} onClick={() => {
                                setActiveUser(id)
                            }}>{name}: <span className="badge rounded-pill bg-danger float-end"><FaPhoneAlt /> {phone}</span></li>
                        )
                    }) : (
                        <li className='list-group-item p-3 text-center'>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </li>
                    )
            }
        </ul>
    )
}
​
Listado.propTypes = {
    users: PropTypes.array
}