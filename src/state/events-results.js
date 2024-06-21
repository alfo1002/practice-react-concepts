import { create } from 'zustand';

const countryCode = 'MX'
const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}&countryCode=${countryCode}`

//Store para guardar valores de manera global
const useEventsResults = create((set) => ({
    data: [],
    error: null,
    isLoading: false,
    fetchEvents: async (params) => {
        try {
            await set(() => ({ isLoading: true }))
            const response = await fetch(`${url}${params?.length ? params : ''}`)
            const data = await response.json()
            await set(() => ({ data, isLoading: false }))
        } catch (error) {
            await set(() => ({ error }))
        }
    }
}));

export default useEventsResults;