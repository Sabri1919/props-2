import React from 'react'
import PropTypes from "prop-types";

const Info = ({fullname , bio , profission , handleName , Children}) => {
    return (
        <div>
            <h2>{fullname}</h2>
            <h3>{bio}</h3>
            <h3>{profission}</h3>
            
                   {Children}
                  <button onClick={() => handleName("Sabri")}>Details</button>

        </div>
    )
}

export default Info
Info.defaultProps = {
  fullname: "Noname",
  bio: 0,
  profission: "Noinformation",
}
Info.propTypes = {
  fullname: PropTypes.string,
};