import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
    it('should be 0 by default', () => {
        const wrapper = mount(RandomNumber)
        expect(wrapper.html()).toContain('<span>0</span>')
    })

    it('should be between 1 and 10 if button is clicked', async () => {
        const wrapper = mount(RandomNumber)
        wrapper.find('button').trigger('click')
        await wrapper.vm.$nextTick()

        const randomNumber = parseInt(wrapper.find('span').element.textContent)
        expect(randomNumber).toBeGreaterThanOrEqual(1)
        expect(randomNumber).toBeLessThanOrEqual(10)
    })

    it('should be between 200 and 300 if button is clicked', async () => {
        const wrapper = mount(RandomNumber, {
            propsData: {
                min: 200,
                max: 300
            }
        })
        wrapper.find('button').trigger('click')
        await wrapper.vm.$nextTick()
        
        const randomNumber = parseInt(wrapper.find('span').element.textContent)
        expect(randomNumber).toBeGreaterThanOrEqual(200)
        expect(randomNumber).toBeLessThanOrEqual(300)
    })
})