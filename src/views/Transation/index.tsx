import React from 'react';

import Moves from '../../components/Moves';

import {
  Container
} from './styles';

const Transation: React.FC = () => {

  return (
    <Container>
      <Moves />
    </Container>
  )
}

export default Transation;
// import React, { useMemo, useState } from 'react';
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Field, Formik, Form, withFormik, useFormik } from 'formik';
// import * as Yup from 'yup';

// import { addActiveRequest } from '../../store/modules/active/actions';
// import { StoreState } from '../../store/createStore';

// import Button from '../../components/Button';

// import {
//   Container,
//   FormTitle,
//   FormActiveCounter,
//   NameActive,
//   CounterActive,
//   PlusActive,
//   MinusActive,
//   PlusButton,
//   MinusButton,
//   ValueB3,
//   ValueActive,
//   Valuebroker,
//   Active
// } from './styles';

// const Moves: React.FC = () => {
//   const [count, setCount] = useState(0);

//   const { loadingAddActiveRequest, error } = useSelector((state: StoreState) => state.active);
//   const dispatch = useDispatch();


//   console.log('LOADING:', loadingAddActiveRequest);
//   console.log('ERROR:', error);

//   useEffect(() => {
//     (document.getElementById('CountInput') as HTMLInputElement).value = String(count);
//   }, [count]);

//   const formik = useFormik({
//     initialValues: {
//       active: '',
//       valueB3: '',
//       valueBroker: '',
//       valueActive: '',
//     },
//     validationSchema: Yup.object({
//       active: Yup.string()
//       .required('Requerido'),
//     valueB3: Yup.number()
//       .positive('Numero negativo inválido')
//       .required('Requerido'),
//     valueBroker: Yup.number()
//       .positive('Numero negativo inválido')
//       .required('Requerido'),
//     valueActive: Yup.number()
//       .positive('Numero negativo inválido')
//       .required('Requerido'),
//     }),
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   const [active, setActive] = useState('');
//   const [valueB3, setValueB3] = useState(0);
//   const [valueBroker, setValueBroker] = useState(0);
//   const [valueActive, setValueActive] = useState(0);

//   return (
//     <Container>
//           <Form>
//             <FormTitle lineColor={'red'}>
//               <h1>Vender</h1>
//             </FormTitle>
//             <Active>
//               <Field name="active"
//                 type='text' />
//               {formik.touched.active && formik.errors.active ? (
//          <div>{formik.errors.active}</div>
//        ) : null}
//             </Active>
//             <FormActiveCounter>
//               <NameActive>
//                 <h1>{active}</h1>
//                 <ValueB3>
//                   <h4>Taxa B3</h4>
//                   <Field name="valueB3"
//                     type='number' />
                  
//                 </ValueB3>
//                 <Valuebroker>
//                   <h4>Taxa de corretagem</h4>
//                   <Field name="valueBroker"
//                     type='number' />
                  
//                 </Valuebroker>
//                 <ValueActive>
//                   <h4>Preço por unidade</h4>
//                   <Field name="valueActive"
//                     type='number' />
                  
//                 </ValueActive>
//               </NameActive>
//               <h3>Quantidade de ações</h3>
//               <CounterActive>
//                 <MinusButton>
//                   <MinusActive onClick={() => count > 0 ? setCount(count - 1) : 0} />
//                 </MinusButton>
//                 <input
//                   type='number'
//                   id='CountInput'
//                   onChange={(e) => { setCount(Number(e.target.value)); }}
//                   required
//                 />
//                 <PlusButton>
//                   <PlusActive onClick={() => setCount(count + 1)} />
//                 </PlusButton>
//               </CounterActive>
//             </FormActiveCounter>
            
//             <Button type="submit" onClick={() => dispatch(addActiveRequest({
//               active,
//               count,
//               valueB3,
//               valueBroker,
//               valueActive
//             }))}>
//               {loadingAddActiveRequest ? 'Carregando' : 'Vender'}</Button>
//           </Form>

//     </Container>
//   )
// }

// export default Moves;
