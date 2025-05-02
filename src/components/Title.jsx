import PropTypes from 'prop-types';

const Title = ({ text1, text2 }) => {
    return (
        <h1>{text1} {text2}</h1>
    );
};

Title.propTypes = {
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
};

export default Title;