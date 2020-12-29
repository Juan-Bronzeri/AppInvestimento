import React, { useMemo, useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Form,
  FormTitle,
  FormActiveCounter,
  NameActive,
  CounterActive,
  PlusActive,
  MinusActive,
  PlusButton,
  MinusButton,
  ValueRate
} from './styles';

const Moves: React.FC = () => {

  const [count, setCount] = useState(0);
  return (
    <Container>
      <Form >
        <FormTitle lineColor={'red'}>
          <h1>Vender</h1>
        </FormTitle>
        <Input
          type='text'
          placeholder='Ação...'
          required
        />
        <FormActiveCounter>
          <NameActive>
            <h1>Petr4</h1>
            <ValueRate>
              <h4>Valor da Taxa</h4>
              <input type='number'
              placeholder={String(count)}
              min='0'
              required
              />
            </ValueRate>
          </NameActive>
          <h3>Quantidade de ações</h3>
          <CounterActive>
            <MinusButton>
              <MinusActive onClick={() => count > 0 ? setCount(count - 1) : 0 } />
            </MinusButton>
            <input
              type='text'
              placeholder={String(count)}
              required
            />
            <PlusButton>
              <PlusActive onClick={() => setCount(count + 1)} />
            </PlusButton>
          </CounterActive>
        </FormActiveCounter>
        <Button type="submit">Vender</Button>
      </Form>
    </Container>
  )
}

export default Moves;