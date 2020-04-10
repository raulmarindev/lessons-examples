interface user {
    id: number;
    devices: device[];
    name: string;
}

const user1: user = {
    id: 1,
    devices: [{ id: 1, imei: 83838383883, sensores: [] }, { id: 2, imei: 83838773883, sensores: [] }],
    name: 'Pepe'
};
const user2: user = {
    id: 2,
    devices: [{ id: 1, imei: 83838383883, sensores: [] }, { id: 2, imei: 83838773883, sensores: [] }],
    name: 'Pedro'
};
const user3: user = {
    id: 3,
    devices: [{ id: 1, imei: 83838383883, sensores: [] }, { id: 2, imei: 83838773883, sensores: [] }],
    name: 'Juan'
};

const users = [user1, user2, user3];

const usuarioEncontrado = users.find(user => user.id === 3);
console.log(usuarioEncontrado?.id);

console.dir(JSON.stringify(users.filter(user => user.name.startsWith('P'))));


// number => 8 bytes = 64 bits
// 1 character => 2 bytes = 16 bits
// string => n * 2 bytes = 14 bytes

// "19216811"

interface device {
    id: number;
    imei: number;
    sensores: sensor[];
}

interface sensor {
    imei: string;

}