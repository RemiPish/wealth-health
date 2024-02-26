import PropTypes from "prop-types";
import './FieldInput.scss'

export default function FieldInput({
  type, //type de input (text, number)
  name,
  labelTitle,
  value,
  setInput //fonction qui permet de mettre à jour la valeur du input
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

//on utilise propType pour valider les types de valeurs
FieldInput.propTypes = {
  type: PropTypes.string.isRequired, //valeur requise
  name: PropTypes.string.isRequired,//valeur requise
  labelTitle: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, //valeur requise
  setInput: PropTypes.func.isRequired, //valeur requise
  className: PropTypes.string,
};

//valeurs par defaut si on ne definit pas les valeurs
FieldInput.defaultProps = {
  className: "",
  labelTitle: "",
};
