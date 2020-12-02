import React, { useContext, useState, useCallback } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import Select from '@material-ui/core/Select';
import { Wrapper, Brand } from './styles';
import { IntlContext } from 'intl/provider';

const useSelector = (changeValue) => {

  const mock_data = [{ label: "日本語", value: "ja" }, { label: "Engilish", value: "en" }]

  const [status, setStatus] = useState(mock_data[0]);

  const handleChange = (e) => {
    console.log("change", e.target.value)
    mock_data.forEach((data, index) => {
      if (data.value === e.target.value) {
        console.log("change", data, e.target.value)
        setStatus({ ...mock_data[index] })
        changeValue(mock_data[index])
      }
    })
  }

  const renderSelector = useCallback(() => {
    return (
      <Select
        native
        value={status.label}
        onChange={handleChange}
        inputProps={{
          name: 'label',
          id: 'age-native-simple',
        }}
      >
        <option value={status.value}>{status.label}</option>
        {mock_data.map((data) => {
          if (data.value === status.value) return
          return (
            <option value={data.value}>{data.label}</option>
          )
        })}
      </Select>
    )
  }, [status])
  return { "data": status, "renderSelector": renderSelector }
}

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { changeLanguage } = useContext(IntlContext);
  const { renderSelector } = useSelector(changeSelector)
  function changeSelector({ label, value }) {
    console.log("change2", label, value)
    changeLanguage(value)
  }


  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        Rui Hirano
      </Brand>
      {renderSelector()}
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
