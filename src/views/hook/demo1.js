import React, { useState, useEffect } from 'react'

function HookRuls() {
  // 1. Use the name state variable
  const [name, setName] = useState('Mary');

  // 2. Use an effect for persisting the form
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });

  // 🔴 在条件语句中使用 Hook 违反第一条规则
  /*if (name !== '') {
    useEffect(function persistForm() {
      localStorage.setItem('formData', name);
    });
  }*/

  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');

  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });

  return(
    <div>
      <form action="">
        <p>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' id='name'/>
        </p>
        <p>
          <label htmlFor="surname">Surname:</label>
          <input type="text" name='surname' id='surname'/>
        </p>
      </form>
    </div>
  )
}

export default HookRuls