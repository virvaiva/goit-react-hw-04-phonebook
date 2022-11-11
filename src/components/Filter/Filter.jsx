import propTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by Name
    <Input
      type="text"
      name="filter"
      placeholder="Search contact"
      value={value}
      onChange={onChange}
    />
  </Label>
);

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
