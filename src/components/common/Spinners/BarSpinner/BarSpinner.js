import React from "react";
import {BarLoader} from "react-spinners";
import PropTypes from "prop-types";
import {selfCentered} from "../../../../utils/styles/selfCentered";

function BarSpinner({size, css, loading}) {
    return <BarLoader color={"rgb(54, 215, 183)"} css={css} loading={loading} margin={2} size={size} />
}

BarSpinner.defaultProps = {
    css: selfCentered,
    loading: true,
};

BarSpinner.propTypes = {
    size: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    css: PropTypes.object.isRequired,
};

export default BarSpinner;