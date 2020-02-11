export const required = (input) => {
    if (!input)
        return "Field is required";
};

export const onlyCharacters = input => {
  const REGEX = /^[a-zA-Z]+$/;
  if (!REGEX.test(input)) {
      return "The field must have only characters";
  }
};

export const emailChecker = input => {
    const REGEX = /[a-z0-9]+([-+._][a-z0-9]+){0,2}@.*?(\.(a(?:[cdefgilmnoqrstuwxz]|ero|(?:rp|si)a)|b(?:[abdefghijmnorstvwyz]iz)|c(?:[acdfghiklmnoruvxyz]|at|o(?:m|op))|d[ejkmoz]|e(?:[ceghrstu]|du)|f[ijkmor]|g(?:[abdefghilmnpqrstuwy]|ov)|h[kmnrtu]|i(?:[delmnoqrst]|n(?:fo|t))|j(?:[emop]|obs)|k[eghimnprwyz]|l[abcikrstuvy]|m(?:[acdeghklmnopqrstuvwxyz]|il|obi|useum)|n(?:[acefgilopruz]|ame|et)|o(?:m|rg)|p(?:[aefghklmnrstwy]|ro)|qa|r[eosuw]|s[abcdeghijklmnortuvyz]|t(?:[cdfghjklmnoprtvwz]|(?:rav)?el)|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw])\b){1,2}/;
    if (!REGEX.test(input)) {
        return "Enter valid email address"
    }
};

export const maxLengthCreator = (maxLength) => (input) => {
    if(input.length > maxLength) return `Max length is ${maxLength}`;
};