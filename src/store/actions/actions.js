export const CHANGE = "CHANGE";
export const MODALW = "MODALW";
export const TIMES = "TIMES";

export const times = () => ({
    type: TIMES,
})

export const change = (color) => ({
    type: CHANGE,
    color: color,
})

export const modalW = () => ({
    type: MODALW,
})
