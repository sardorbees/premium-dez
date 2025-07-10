// ServiceCard.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ service }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('title')}: {service.title}</h2>
      <p>{t('description')}: {service.description}</p>
    </div>
  );
};

export default ServiceCard;
