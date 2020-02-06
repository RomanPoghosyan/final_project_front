export const required = (input) => {
<<<<<<< HEAD
    if (input) return undefined;
=======
    if(input) return undefined;

>>>>>>> 450bdbfc0dd6c89647fdc17b3657ed48ddd4d3ec
    return "Field is required";
};

export const maxLengthCreator = (maxLength) => (input) => {
    if(input.length > maxLength) return `Max length is ${maxLength}`;

    return undefined;
};