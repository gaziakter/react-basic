import React, { useState } from 'react'

const FormSection = () => {

    const [text, SetText] = useState('');


    const submitForm = (e) => {
        e.preventDefault();
    }

    const nameText = (e) => {
        SetText(e.target.value);
    }


  return (
    <div>
        <section>
            <h3>Form Section</h3>
                        <p>{text}</p>
            <form onSubmit={submitForm}>
                <input onChange={nameText} type="text" name="name" id="" placeholder='Gazi Akter' /> <br/>
                <input type="email" name="email" id="" placeholder='gaziakter@gmail.com' /><br/>
                <input type="submit" value="Submit" />
            </form>
        </section>
    </div>
  )
}

export default FormSection