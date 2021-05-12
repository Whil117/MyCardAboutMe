
import PropTypes from 'prop-types'

const UserProfile = ({type,data,link}) => {
    return (
        <div className="card__descript-section">
            <ul>
                <li className="card__descript-section-type">
                <h3>{type}</h3>
                </li>
            </ul>
  
            <p>{data}</p>
            <a className="link" href={link}>{link}</a>
        </div>
    )
}

UserProfile.propTypes = {
    type: PropTypes.string.isRequired,


}

export default UserProfile
