import * as yup from 'yup';

export const noticeValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  date: yup.date().required(),
  college_id: yup.string().nullable(),
});
