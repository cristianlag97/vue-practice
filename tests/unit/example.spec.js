
describe('Example Component', () => {
    test( 'Debe de ser Mayor a 10', () =>  {

        //Arreglar
        let value = 15;

        //Estimulo
        value = value + 2

        //Observar
        expect(value).toBeGreaterThan(10)
    })
})
