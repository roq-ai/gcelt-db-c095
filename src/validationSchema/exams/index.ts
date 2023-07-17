import * as yup from 'yup';

export const examValidationSchema = yup.object().shape({
  name: yup.string().required(),
  marks: yup.number().integer().required(),
  student_id: yup.string().nullable(),
});
