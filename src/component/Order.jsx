import React, {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next';

function Order() {
    const { t } = useTranslation();
    const [order, setOrder] = useState({});
    const [url, setUrl] = useState("");
    const [language, setLanguage] = useState("")
  
    useEffect(() => {
        fetch("https://run.mocky.io/v3/8aa1fa17-8229-468d-9ec5-6387cf092cbc")
          .then((response) => response.json())
          .then((element) => {
            const Image = 'images/'+element.img
            setOrder({title: element.title, message: element.message, img: Image});
            console.log(Image)
            setUrl(Image)
          });
      }, []);

      useEffect(() => {
        setLanguage(localStorage.getItem('Language'));
      }, [localStorage.getItem('Language')]);
    
  return (
    <>
      {
        language === "en" ?
        <>
          <h1 className='text-center'>{t(order?.title?.en)}</h1>
          <div className='d-flex justify-content-center my-4'>
              <img src={url} height={180} width={200} />
          </div>
          <p className='text-center mb-3'>
              {t(order?.message?.en)}
          </p>
        </>
        :
        <>
          <h1 className='text-center'>{t(order?.title?.es)}</h1>
          <div className='d-flex justify-content-center my-4'>
              <img src={url} height={180} width={200}/>
          </div>
          <p className='text-center mb-3'>
              {t(order?.message?.es)}
          </p>
        </>
      }
    </>
  )
}

export default Order