import React from 'react'
import { MdCopyright } from "react-icons/md";
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="text-center bg-light text-muted fixed-bottom py-2 mt-auto">
      <div className="container">
        <span className="text-center"><MdCopyright/> 2022 {t('Footer')}</span>
      </div>
    </footer>
  )
}

export default Footer