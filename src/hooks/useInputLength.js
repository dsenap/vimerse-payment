import { useState } from 'react';
import { initialValuesLength } from '../utils/formHelper';

export default function useInputsLength() {
  const [inputsLength, setInputsLength] = useState(initialValuesLength);
  const changeCharactersCount = (e) => {
    setInputsLength((state) => ({ ...state, [e.target.name]: +e.target.value.length }));
  };
  return { inputsLength, setInputsLength, changeCharactersCount };
}
