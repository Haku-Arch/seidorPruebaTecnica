import React, {useState} from 'react';
import { Steps, Panel, ButtonToolbar, IconButton } from 'rsuite';
import Formulario from './Formulario'
import Payment from './Payment'
import Order from './Order'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useTranslation } from 'react-i18next';

export default function Stepper() {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const onChange = nextStep => {
    setStep(nextStep < 0 ? 0 : nextStep > 2 ? 2 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  return (
    <>
      <Steps current={step}>
        <Steps.Item title={t('Header')} />
        <Steps.Item title={t('Payment')} />
      </Steps>
      <Panel >
        {step=== 0 ? 
          <Formulario />
        :
          step=== 1 ? <Payment /> : <Order />
        }
      </Panel>
      
      <ButtonToolbar>
        {step=== 0 ? 
          <>
            <div className='float-end'>
              <IconButton appearance="primary" onClick={onNext} size="lg" icon={<MdKeyboardArrowRight size={30} />} placement="right">
                {t('Continue')}
              </IconButton>
            </div>
          </>
          :
          step === 1 ?
        <>
          <div className='float-start'>
            <IconButton appearance="primary" onClick={onPrevious} size="lg" icon={<MdKeyboardArrowLeft size={30} />}  placement="left">
              {t('Back')}
            </IconButton>
          </div>
          <div className='float-end'>
            <IconButton appearance="primary" onClick={onNext} size="lg" icon={<MdKeyboardArrowRight size={30}/>} placement="right">
              {t('Pay')}
            </IconButton>
          </div>
        </>
        :
        <></>
      }
        
      </ButtonToolbar>
    </>
  );
}
