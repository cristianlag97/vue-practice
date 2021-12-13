import {shallowMount} from '@vue/test-utils'
import Counter from "@/components/Counter";

//TODO: Este test es valodar de quen el html no cambvie o sea lo mismo siempre
//TODO: para actualizar snapshot => npm run test:unit -- -u
//TODO: Esta prueba se asegura de que el componente quede asi ya sea como el HTML o la DATA
describe('Counter Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter)
  })
  /*test('debe hacer match con el snapshot', () => {

    const wrapper = shallowMount(Counter)
    expect(wrapper.html()).toMatchSnapshot()

  })*/
  test('H2 Debe tener valor por defeecto "Counter"', () => {

    expect(wrapper.find('h2').exists()).toBeTruthy()
    const h2 = wrapper.find('h2').text()
    expect(h2).toBe('Counter')
  })

  test('El valor por defecto debe ser 100 en la etiqueta p', () => {
    //Preuba uno
    /*const wrapper = shallowMount(Counter)
    const pTags = wrapper.findAll('p')
    expect(pTags[1].text()).toBe('100')*/

    //Prueba 2 con toleracia al cambio y facil
    const value = wrapper.find('[data-testid="counter"]').text()
    expect(value).toBe('100')
  })

  test('debe de incrementar y decrementar', async () => {
    const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await decreaseBtn.trigger('click')
    await decreaseBtn.trigger('click')

    const value = wrapper.find('[data-testid="counter"]').text()
    expect(value).toBe('101')
  })

  test('Debe de establecer el valor por defecto', () => {
    //console.log(wrapper.props())
    //const start = wrapper.props('start')
    const { start } = wrapper.props()
    const value = wrapper.find('[data-testid="counter"]').text()
    expect(Number(value)).toBe(start)
  })

  test('Debe de mostrar la prop title', ()=> {
    const title = 'Hola mundo'
    const wrapper = shallowMount(Counter, {
      props: {
        title
      }
    })

    expect( wrapper.find('h2').text()).toBe(title)
  })


})
