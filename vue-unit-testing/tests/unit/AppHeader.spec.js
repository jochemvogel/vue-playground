import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
    it('does not show logout button if use is not logged in', () => {
        const wrapper = mount(AppHeader)
        expect(wrapper.find('button').isVisible()).toBe(false)
    })

    it('shows the logout button if the user is logged in', async () => {
        const wrapper = mount(AppHeader)
        wrapper.setData({ loggedIn: true })

        await wrapper.vm.$nextTick()
        expect(wrapper.find('button').isVisible()).toBe(true)
    })
})