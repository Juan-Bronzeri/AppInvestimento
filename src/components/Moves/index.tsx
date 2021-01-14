import React, { useEffect, useState } from 'react';

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
    ValueB3,
    ValueActive,
    Valuebroker
} from './styles';

const Moves: React.FC = () => {
    const [active, setActive] = useState('');
    const [count, setCount] = useState(0);
    const [valueB3, setValueB3] = useState(0);
    const [valueBroker, setValueBroker] = useState(0);
    const [valueActive, setValueActive] = useState(0);
  
    useEffect(() => {
      (document.getElementById('CountInput') as HTMLInputElement).value = String(count);
      (document.getElementById('B3input') as HTMLInputElement).value = String(valueB3);
      (document.getElementById('BrokerInput') as HTMLInputElement).value = String(valueBroker);
      (document.getElementById('ValueActiveInput') as HTMLInputElement).value = String(valueActive);
      (document.getElementById('ActiveInput') as HTMLInputElement).value = active;
    }, [count, valueB3, valueBroker, valueActive]);
    return (
        <Container>
            <Form >
                <FormTitle lineColor={'red'}>
                    <h1>Comprar</h1>
                </FormTitle>
                <Input
                    type='text'
                    id='ActiveInput'
                    onChange={(e) => { setActive(e.target.value); }}
                    placeholder='Ação...'
                    required
                />
                <FormActiveCounter>
                    <NameActive>
                        <h1>{active}</h1>
                        <ValueB3>
                            <h4>Taxa B3</h4>
                            <input type='number'
                                id='B3input'
                                onChange={(e) => { setValueB3(Number(e.target.value)); }}
                                min='0'
                                required
                            />
                        </ValueB3>
                        <Valuebroker>
                            <h4>Taxa de corretagem</h4>
                            <input type='number'
                                id='BrokerInput'
                                onChange={(e) => { setValueBroker(Number(e.target.value)); }}
                                min='0'
                                required
                            />
                        </Valuebroker>
                        <ValueActive>
                            <h4>Preço por unidade</h4>
                            <input type='number'
                                id='ValueActiveInput'
                                onChange={(e) => { setValueActive(Number(e.target.value)); }}
                                min='0'
                                required
                            />
                        </ValueActive>
                    </NameActive>
                    <h3>Quantidade de ações</h3>
                    <CounterActive>
                        <MinusButton>
                            <MinusActive onClick={() => count > 0 ? setCount(count - 1) : 0} />
                        </MinusButton>
                        <input
                            type='number'
                            id='CountInput'
                            onChange={(e) => { setCount(Number(e.target.value)); }}
                            required
                        />
                        <PlusButton>
                            <PlusActive onClick={() => setCount(count + 1)} />
                        </PlusButton>
                    </CounterActive>
                </FormActiveCounter>
                <Button type="submit" >Comprar</Button>
            </Form>
        </Container>
    )
}

export default Moves;