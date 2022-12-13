import React from 'react';

function CurrencyRupiah(props) {
  const { value } = props;
  const formattedValue = value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

  return <span>{formattedValue}</span>;
}

export default CurrencyRupiah;