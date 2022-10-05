import React from 'react'
import { MdPayment } from "react-icons/md";
import Mastercard from "../img/mastercard.svg"
import Visa from "../img/visa.svg"
import { useTranslation } from 'react-i18next';

function Payment() {
    const { t } = useTranslation();

  return (
    <>
        <h1 className='text-center'>{t('Payment')}</h1>
        <p className='text-center'>
            {t('PaymentDescription')}
        </p>
        <div className='border p-4 mt-3'>
            <div className='d-flex justify-content-center'>
                <MdPayment size={70}/>
            </div>
            <h3 className='text-center'>{t('CreditCard')}</h3>
            <p className='text-center mb-3'>
                {t('CreditCardDescription')}
            </p>
            <div className='d-flex justify-content-center'>
                <img src={Mastercard} width={80} height={60}/>
                <img src={Visa} width={80} height={40} className="mt-2"/>
            </div>
        </div>
    </>
  )
}

export default Payment