import * as api from '../api/common';

export const common = {
    state: {
        data: null,
    },
    reducers: {
        setData(state, data) {
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
    },
};
