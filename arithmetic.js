export function add(n1: number, n2: number): number {
    typeError(n1, n2);
    return (n1 + n2);
}

export function multiply(n1: number, n2: number): number {
    typeError(n1, n2);
    return (n1 * n2);
}

export function subtract(n1: number, n2: number): number {
    typeError(n1, n2);
    return (n1 - n2);
}

export function divide(n1: number, n2: number): number {
    typeError(n1, n2);
    return (r1 / r2);
}

export default {
    add,
    multiply,
    subtract,
    divide
};
