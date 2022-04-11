import { FieldType, One, TypedField } from "react-declarative";

import { observer } from "mobx-react";
import { useState } from "react";

import CreateButtom from "./components/CreateButton";
import GoogleSignInButton from "./components/GoogleSignInButton";
import LogInBot from "./components/LogInBot";
import Paper from "@mui/material/Paper";

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
              },
              {
                type: FieldType.Text,
                columns: '6',
                phoneColumns: '12',
                tabletColumns: '12',
                name: 'lastName',
                title: 'Фамилия',
                description: 'Required',
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
                name: 'contact',
                title: 'Email или номер телефона',
                description: 'Required',
              },
              {
                type: FieldType.Text,
                columns: '6',
                phoneColumns: '12',
                tabletColumns: '12',
                isInvalid: ({ DOB }) => {
                  return "Неверная дата"
                },
                name: 'DOB',
                title: 'Дата рождения (ММ/ДД/ГГ)',
                description: 'Required',
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
                name: 'agreement',
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

  const [data, setData] = useState<any | null>(null);

  const handleChange = (data: any, initial: boolean) => {
    if (!initial) {
      setData(data);
    }
  };

  const handleBack = () => {
    ioc.routerService.push(`/`);
  };
  
  return (
    <Paper style={{borderRadius: '80px', margin: '5% auto 0', width: '80%', maxWidth: '900px'}}>
      
        <One
          style={{padding: '4.25em 4.5em'}}
          fields={fields}
          onInvalid={() => setData(null)}
          // handler={handler}
          fallback={handleBack}
          onChange={handleChange}
        />
     
    </Paper>
  );
};

export default observer(OneProfilePage);