const fs = require('fs');

const printTable = (base, limit = 10) => {

    return new Promise((resolve, reject) => {
        if(!Number(base) || !Number(limit)) {
            reject('The base or limit is wrong')
            return;
        }

        for(let i=1; i <= limit; i++) {
            console.log(`${i} x ${base} = ${i*base}`)
        }
        resolve();
    })
};

const createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`The input value is not valid, check it please: ${base}`);
            return;
        }

        let data = '';

        for(let i =1; i <= limit; i++) {
            data += `${i} x ${base} = ${i*base} \n`
        }

        let fileName = `tables/table-${base}.txt`;
        fs.writeFile(fileName, data, (err) => {
            if (err) reject(err);
            else resolve(fileName)
        });

    })
}


module.exports = {
    createFile,
    printTable
}