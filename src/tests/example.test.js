
const isEven = (a) => {
    if(typeof a !== "number") return "el valor no es un numero"
    return a % 2 === 0;
}
test('si ingresamos un 5 debe retornar false(no es par)', () => {
    const a = 5;
    const resutl = isEven(a);

    expect(resutl).toBeFalsy()
})

test('si ingresamos el 20 debe retornar true (es par)', () => {
    const a = 20;
    const resutl = isEven(a);

    expect(resutl).toBeTruthy
})

test('si ingresamos un valor no numerico debe regresar el valor no es un numero', () => {
    let value = "hola";
    const result = isEven(value);
    expect(result).toMatch("el valor no es un numero")
})