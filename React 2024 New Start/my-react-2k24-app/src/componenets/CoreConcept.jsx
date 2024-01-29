import PropTypes from "prop-types";
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt="it's a image" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

CoreConcept.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
export default CoreConcept;