import { useState } from "react";

export const Test = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('')

    const inputs = [                                                      
        {
        defaultValue: 'Имя',
        getter: name,
        setter: setName,
        },
        {
        defaultValue: 'Ваш телефон',
        getter: phone,
        setter: setPhone,
        }
    ]

    const send = (name: string, phone: number) => {

    const userData = {
      name: name,
      phone: phone,
    }

    const url = 'http://localhost:3000/'

    fetch(url, {                                  
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(data => {
        userData
      })
  }
}
export default Test;
