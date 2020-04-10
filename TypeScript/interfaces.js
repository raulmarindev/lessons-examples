"use strict";
const user1 = {
    id: 1,
    devices: [{ id: 1, imei: 83838383883, sensores: [] }, { id: 2, imei: 83838773883, sensores: [] }],
    name: 'Pepe'
};
const user2 = {
    id: 2,
    devices: [{ id: 1, imei: 83838383883, sensores: [] }, { id: 2, imei: 83838773883, sensores: [] }],
    name: 'Pedro'
};
const user3 = {
    id: 3,
    devices: [{ id: 1, imei: 83838383883, sensores: [] }, { id: 2, imei: 83838773883, sensores: [] }],
    name: 'Juan'
};
const users = [user1, user2, user3];
const usuarioEncontrado = users.find(user => user.id === 3);
console.log(usuarioEncontrado === null || usuarioEncontrado === void 0 ? void 0 : usuarioEncontrado.id);
console.dir(JSON.stringify(users.filter(user => user.name.startsWith('P'))));
