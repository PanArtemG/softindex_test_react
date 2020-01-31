import * as yup from 'yup';
import {MESSAGES_ERROR} from "../constants";

export const validationSchema = yup.object().shape({
    firstName: yup
        .string()
        .min(1)
        .required(MESSAGES_ERROR.FIRST_NAME_EMPTY_ERROR),
    lastName: yup
        .string()
        .min(1)
        .required(MESSAGES_ERROR.LAST_NAME_EMPTY_ERROR),
    phone: yup
        .string()
        .min(10, MESSAGES_ERROR.PHONE_LENGTH_ERROR)
        .required(MESSAGES_ERROR.PHONE_EMPTY_ERROR),
    gender: yup
        .string()
        .required(MESSAGES_ERROR.GENDER_EMPTY_ERROR),
    age: yup
        .number()
        .min(18, 'MIN')
        .max(120, MESSAGES_ERROR.AGE_VALUE_ERROR)
        .required(MESSAGES_ERROR.AGE_EMPTY_ERROR)
});