import moment from 'moment';

export const FormattedDate = (value: string) => {
  const date = new Date(value);
  return moment(date).format('DD/MM/YYYY');
};

export default FormattedDate;
