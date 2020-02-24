import {search} from "../../redux/user-reducer";

export const required = (input) => {
    if (!input)
        return ` is required`;
};

export const regexChecker = (input, REGEX, message) => {
    if (!REGEX.test(input))
        return message;
};

export const onlyCharacters = input => regexChecker(input, /^[a-zA-Z]+$/, "The field must have only characters");

export const emailChecker = input => {
    const REGEX = /[a-z0-9]+([-+._][a-z0-9]+){0,2}@.*?(\.(a(?:[cdefgilmnoqrstuwxz]|ero|(?:rp|si)a)|b(?:[abdefghijmnorstvwyz]iz)|c(?:[acdfghiklmnoruvxyz]|at|o(?:m|op))|d[ejkmoz]|e(?:[ceghrstu]|du)|f[ijkmor]|g(?:[abdefghilmnpqrstuwy]|ov)|h[kmnrtu]|i(?:[delmnoqrst]|n(?:fo|t))|j(?:[emop]|obs)|k[eghimnprwyz]|l[abcikrstuvy]|m(?:[acdeghklmnopqrstuvwxyz]|il|obi|useum)|n(?:[acefgilopruz]|ame|et)|o(?:m|rg)|p(?:[aefghklmnrstwy]|ro)|qa|r[eosuw]|s[abcdeghijklmnortuvyz]|t(?:[cdfghjklmnoprtvwz]|(?:rav)?el)|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw])\b){1,2}/;
    return regexChecker(input, REGEX, "Enter valid email address");
};

export const maxLengthCreator = (maxLength) => (input) => {
    if (input.length > maxLength) return `Max length is ${maxLength}`;
};

export const phoneNumberChecker = input => {
    const REGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/;
    return regexChecker(input, REGEX, "Enter valid phone number");
};

export const asyncValidate = async (values, dispatch) => {
    return dispatch(search(values.username))
};