import styled from "styled-components"
import { Formik, Form } from "formik"
import Input from "./components/Imput"
import Button from "./components/Button"
import Container from "./components/Container"
import Section from "./components/Section"
import { useState } from "react"
import Balance from "./components/Balance"
import * as Yup from 'yup'


const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit
  for (let i = 0; i < years; i++){
    total = (total + contribution) * (rate + 1)
  }
  return Math.round(total)
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function App() {
  const [balance, setBalance] = useState('')
  const handleSubmit = ({deposit, contribution, years, rate})=>{
    const val = compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate))
    setBalance(formatter.format(val))
  }
  return ( 
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            deposit: Yup.number().required('Campo Requerido').typeError('debe ser un numero'),
            contribution: Yup.number().required('Campo Requerido').typeError('debe ser un numero'),
            years: Yup.number().required('Campo Requerido').typeError('debe ser un numero'),
            rate: Yup.number().required('Campo Requerido').min(0, 'el valor debe ser entre 0 y 1').max(1, 'el valor debe ser entre 0 y 1').typeError('debe ser un numero'),
          })}
        >
          <Form>
            <Input name="deposit" label="Deposito Inicial"/>
            <Input name="contribution" label="Constribución Anual"/>
            <Input name="years" label="Años"/>
            <Input name="rate" label="Interés estimado"/>
            <Button type="submit">Calcular</Button>
          </Form>
        </Formik>
        <Balance>
          {balance !== '' ? `Balance final : ${balance}` : null}
        </Balance>
        
      </Section>
    </Container>
  )
}

export default App
