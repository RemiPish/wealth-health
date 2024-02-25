import PropTypes from "prop-types";
import './FieldInput.scss'

export default function FieldInput({
  type,
  name,
  labelTitle,
  value,
  setInput
}) {
  return (
    <div className="label">
      {labelTitle && <p className="title">{labelTitle}</p>}
      <input
        className="input-field"
        type={type}
        name={name}
        id={name}
        value={value}
        required
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

FieldInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelTitle: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setInput: PropTypes.func.isRequired,
  className: PropTypes.string,
};

FieldInput.defaultProps = {
  className: "",
  labelTitle: "",
};
