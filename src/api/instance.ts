import axios from 'axios';

export const getCountUrl = 'https://zont-online.ru/api/button_count';

const token = 'eo4achobe3zyqli0pxb3jkrj8nu97t3v';

export const instance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ZWxvbjptYXJzNGV2ZXI=',
        'X-ZONT-Client': 'elon@tesla.com',
        'X-ZONT-Token': token,
    },
});
