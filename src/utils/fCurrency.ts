const fCurrency = (amount: number | undefined) => {
  const params = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
  const format = new Intl.NumberFormat("es-PE", params).format(amount ?? 0);

  return `$ ${format}`;
};

export default fCurrency;
