import * as yup from 'yup';
import {MESSAGES_ERROR} from "../constants";

export const validationSchema = yup.object().shape({
    firstName: yup
        .string()
        .min(10, MESSAGES_ERROR.FIRST_NAME_LETTERS_ERROR)
        .required(MESSAGES_ERROR.FIRST_NAME_EMPTY_ERROR)
    ,
    lastName: yup
        .string()
        .min(1, MESSAGES_ERROR.LAST_NAME_EMPTY_ERROR)
        .required(),
    // phone: yup
    //     .number()
    //     .min(10, MESSAGES_ERROR.PHONE_LENGTH_ERROR)
    //     .required(),
    // gender: yup
    //     .string(MESSAGES_ERROR.GENDER_EMPTY_ERROR)
    //     .required(),
    // age: yup
    //     .number()
    //     .required()
});