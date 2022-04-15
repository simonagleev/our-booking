import { FieldType, One, TypedField } from "react-declarative";

import { observer } from "mobx-react";
import { useState } from "react";

import CreateButtom from "./components/CreateButton";
import GoogleSignInButton from "./components/GoogleSignInButton";
import LogInBot from "./components/LogInBot";
import Paper from "@mui/material/Paper";

import IUser from "../../model/IUser";
import ioc from "../../lib/ioc";

const fields: TypedField[] = [
  {
    type: FieldType.Group,
    fieldBottomMargin: "0",
    fieldRightMargin: "0",
    fields: [
      {
        type: FieldType.Typography,
        columns: '12',
        placeholder: 'Регистрация',
        style: {
            color: '#FF7235',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '1.25em',
            lineHeight: '1.75em',
            letterSpacing: '-0.02em',
        }
      },
      {
        type: FieldType.Group,
        fieldBottomMargin: "0",
        fieldRightMargin: "0",
        columns: "12",
        fields: [
          {
            type: FieldType.Group,
            fieldBottomMargin: "0",
            fieldRightMargin: "0",
            columns: "12",
            phoneColumns: '12',
            tabletColumns: '12',
            fields: [
              {
                type: FieldType.Text,
                columns: '6',
                phoneColumns: '12',
                tabletColumns: '12',
                name: 'firstName',
                title: 'Имя',
                description: 'Required',
                inputFormatterTemplate: '00000000000000000000',
                inputFormatterAllowed: /[a-z, а-я]/i,
              },
              {
                type: FieldType.Text,
                columns: '6',
                phoneColumns: '12',
                tabletColumns: '12',
                name: 'lastName',
                title: 'Фамилия',
                description: 'Required',
                inputFormatterTemplate: '00000000000000000000',
                inputFormatterAllowed: /[a-z, а-я]/i,
              },
            ]
          },
          {
            type: FieldType.Group,
            fieldBottomMargin: "0",
            fieldRightMargin: "0",
            columns: "12",
            phoneColumns: '12',
            tabletColumns: '12',
            fields: [
              {
                type: FieldType.Text,
                columns: '6',
                phoneColumns: '12',
                tabletColumns: '12',
                name: 'phone',
                title: 'Номер телефона',
                description: 'Required',
                inputFormatterTemplate: '+0 000 000 00 00',
                inputFormatterAllowed: /[0-9]/,
              },
              {
                type: FieldType.Text,
                columns: '6',
                phoneColumns: '12',
                tabletColumns: '12',
                // isInvalid: ({ DOB }) => {
                //   return "Неверная дата"
                // },
                name: 'DOB',
                title: 'Дата рождения (ДД/ММ/ГГ)',
                description: 'Required',
                inputFormatterTemplate: '00/00/0000',
                inputFormatterAllowed: /[0-9]/,
              },
            ]
          },
          {
            type: FieldType.Group,
            fieldBottomMargin: "0",
            fieldRightMargin: "0",
            columns: "12",
            phoneColumns: '12',
            tabletColumns: '12',
            fields: [
              {
                type: FieldType.Text,
                columns: '6',
                phoneColumns: '12',
                tabletColumns: '12',
                inputType: 'password',
                name: 'password',
                title: 'Пароль',
              },
              {
                type: FieldType.Text,
                columns: '6',
                phoneColumns: '12',
                tabletColumns: '12',
                inputType: 'password',
                name: 'confirmPassword',
                title: 'Подтвердите пароль'
              },
            ]
          },
          {
            type: FieldType.Group,
            fieldBottomMargin: "0",
            fieldRightMargin: "0",
            columns: "12",
            fields: [
              {
                type: FieldType.Checkbox,
                fieldBottomMargin: "0",
                name: 'remember',
                title: "Запомнить меня",
              },
            ]
          },
          {
            type: FieldType.Group,
            fieldBottomMargin: "0",
            fieldRightMargin: "0",
            columns: "12",
            fields: [
              {
                type: FieldType.Checkbox,
                fieldBottomMargin: "0",
                fieldRightMargin: "0",
                name: 'terms',
                title: "I agree to all the Terms and Privacy policy ",
              },
            ]
          },
          {
            type: FieldType.Group,
            fieldBottomMargin: "0",
            fieldRightMargin: "0",
            columns: "12",
            fields: [
              {
                type: FieldType.Component,
                fieldRightMargin: "0",
                name: 'remember',
                columns: '6',
                phoneColumns: '12',
                tabletColumns: '12',
                element: () => (
                    <CreateButtom/>
                )
              },
              {
                type: FieldType.Component,
                name: 'remember',
                columns: '6',
                phoneColumns: '12',
                tabletColumns: '12',
                element: () => (
                    <GoogleSignInButton/>
                )
              },
            ]
           }, 
        ]
      },
      {
        type: FieldType.Component,
        columns: '12',
        element: () => (
            <LogInBot/>
        )   
      }
    ]
  }            
]

export const OneProfilePage = () => {

  const userData = ioc.personSerice.userData;

  

  const handleChange = (data: IUser, initial: boolean) => {
    if (!initial) {
      // setUserData(data);
      ioc.personSerice.getUserData(data)
    }
  };

  const handleBack = () => {
    ioc.routerService.push(`/`);
  };

  const handleSave = async () => {
    if (userData) {
      console.log('data есть')
    } else {
      console.log("NOTHING CHANGED")
    }
  };


  // Нже идут тестовые штуки по взаимодействию с сервером


  const [testUsers, setTestusers] = useState([])

  const testGet = () => {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => {
        setTestusers(data)
        console.log(data)
      })
    console.log('test users')
    setTimeout(() => {console.log(testUsers) }, 3000)
  }

  // const [testFetch, setTestFetch] = useState(null)

  // const fetchData = () => {                                         
  //   fetch('http://localhost:3000/users')
  //     .then(res => res.json())
  //     .then(data => {
  //       setTestFetch(data)
  //     })
  // }
  
  return (
    <Paper style={{
      borderRadius: '80px',
      width: '80%',
      maxWidth: '900px', 
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <One
        style={{padding: '4.25em 4.5em'}}
        fields={fields}
        // onInvalid={() => setUserData(null)}
        // handler={handler}
        fallback={handleBack}
        onChange={handleChange}
      />  
    </Paper>
  );
};

export default observer(OneProfilePage);