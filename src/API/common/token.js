let TOKEN = "";

/**
 *
 * getToken ( returns TOKEN with Bearer keyword )
 *
 * @returns {string}
 */
export const getToken = () => {
    return `Bearer ${TOKEN}`;
};

/**
 *
 * setToken ( setter for token )
 *
 * @param t
 */
export const setToken = (t) => {
    TOKEN = t;
};


