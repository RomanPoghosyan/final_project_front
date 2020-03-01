import React from "react";
import {BounceLoader} from "react-spinners";
import PropTypes from 'prop-types';
import {selfCentered} from "../../../../utils/styles/selfCentered";

function Spinner({size, css, loading}) {
    return <BounceLoader color={"rgb(54, 215, 183)"} css={css} loading={loading} margin={2} size={size} />
}

Spinner.defaultProps = {
  css: selfCentered,
  loading: true,
};

Spinner.propTypes = {
    size: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    css: PropTypes.object.isRequired,
};

export default Spinner;