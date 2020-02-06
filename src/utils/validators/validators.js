export const required = (input) => {
    if (input) return undefined;
    return "Field is required";
};

export const maxLengthCreator = (maxLength) => (input) => {
    if(input.length > maxLength) return `Max length is ${maxLength}`;

    return undefined;
};