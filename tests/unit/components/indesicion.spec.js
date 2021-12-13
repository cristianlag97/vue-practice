import {shallowMount} from '@vue/test-utils'
import Indecision from "@/components/Indecision";

describe('Indesicion component', () => {
  let wrapper;
  let clgSpy; //son espias que estan pendientes xde cualquier suceso

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
      "answer": "yes",
      "forced": false,
      "image": "https://yesno.wtf/assets/yes/2.gif"
    })
  }))

  beforeEach(() => {
    wrapper = shallowMount(Indecision)
    clgSpy = jest.spyOn(console, 'log')

    jest.clearAllMocks()

  })

  test('Debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Escribir en el input no debe de disparar nada (console.log)', async () => {

    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

    const input = wrapper.find('input');
    await input.setValue('Hola Mundo');

    //expect(clgSpy).toHaveBeenCalled()// cuantas veces se ha llamado
    expect(clgSpy).toHaveBeenCalledTimes(1)// cuantas veces se debeb llamar

    // expect(getAnswerSpy).toHaveBeenCalledTimes(0)
    expect(getAnswerSpy).not.toHaveBeenCalled()

  })

  test('Escribir el simbolo de interrogación "?" debe disparar el getAnswer', async() => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

    const input = wrapper.find('input');
    await input.setValue('Hola Mundo?');

    //expect(clgSpy).toHaveBeenCalled()// cuantas veces se ha llamado
    //expect(clgSpy).toHaveBeenCalledTimes(1)// cuantas veces se debeb llamar

     expect(getAnswerSpy).toHaveBeenCalledTimes(1)
    //expect(getAnswerSpy).not.toHaveBeenCalled()
  })

  test('Pruebas de getAnswer', async() => {

    await wrapper.vm.getAnswer()

    console.log(wrapper.vm.img)
    console.log(wrapper.vm.answer)

    const img = wrapper.find('img')

    expect(img.exists()).toBeTruthy()
    expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
    expect(wrapper.vm.answer).toBe('Si!')

  })

  test('Prueba en getAnswer - fallo en el API', async() => {

    fetch.mockImplementationOnce( () => Promise.reject('API is down'))

    await wrapper.vm.getAnswer()

    const img = wrapper.find('img')

    expect(img.exists()).toBeFalsy()
    expect(wrapper.vm.answer).toBe('No se pudo cargar del API')


  })

})