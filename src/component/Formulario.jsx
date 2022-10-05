import React,{useState, useEffect} from 'react';
import { Form} from 'rsuite';
import { useTranslation } from 'react-i18next';

function Formulario() {
  const { t } = useTranslation();
  const [data, setData] = useState ({
    name:"",
    lastname:""})

  return (
    <>
        <h1 className='my-4 text-center'>{t('Header')}</h1>
        <p className="text-center">{t('Description')}</p>
        <Form fluid className='mt-4'>
          <Form.ControlLabel className='mt-4'>
            <div className='float-start'>
              {t('Name')}
            </div>
          <div className='float-start'>
            <p className='text-danger'>*</p>
          </div>
          </Form.ControlLabel>
          <Form.Control name="name" onChange={(e)=> setData({...data , name: e})} />
          <Form.ControlLabel className='mt-4'>
          <div className='float-start'>
              {t('LastName')}
            </div>
          <div className='float-start'>
            <p className='text-danger'>*</p>
          </div>
          </Form.ControlLabel>
          <Form.Control name="lastname" onChange={(e)=> setData({...data , lastname: e})}/>
        </Form>
    </>
  )
}

export default Formulario;
