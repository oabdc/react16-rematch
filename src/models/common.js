import * as api from '../api/common';

export const common = {
    state: {
        data: null,
        city: [],
    },
    reducers: {
        setData(state, data) {
            return {
                ...state,
                data,
            };
        },
        setCity(state, data) {
            return {
                ...state,
                data,
            };
        },
    },
    effects: {
        async getData(a, b) {
            try {
                const data = await api.getData(a);
                this.setData(data);
            } catch (err) {
                console.log(err);
            }
        },
        async getCity(a, b) {
            try {
                const { data } = await api.getCity(a);
                console.log(data);
                this.setCity(data);
            } catch (err) {
                console.log(err);
            }
        },
    },
};
