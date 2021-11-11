import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(
    () => {
      if(name !== '')
        updateCountry(name);

    }
    ,[name]  // Jos find kenttä muuttuu, päivitetään
  )

  const updateCountry = (name) => {
    axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(response => {
        const c = {
          name:response.data[0].name.common,
          capital:response.data[0].capital[0],
          population:response.data[0].population,
          flag:response.data[0].flags.png,
          found:true
        };

        setCountry({...c});
      })
      .catch(error => {
        setCountry({found:false});
      });
  };

  return { country, name };
}

const Country = ({ country }) => {
  if (!country.country) {
    return null
  }

  if (!country.country.found) {
    return (
      <div>
        not found...
      </div>
    )
  }

  return (
    <div>
      <h3>{country.country.name} </h3>
      <div>capital {country.country.capital} </div>
      <div>population {country.country.population}</div> 
      <img src={country.country.flag} height='100' alt={`flag of ${country.name}`}/>  
    </div>
  )
}

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
    country.name = name;
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App
