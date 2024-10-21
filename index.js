const fs = require("fs")
const path = require("path")
const config = require("./config.json")

const countWords = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(`Error reading ${filePath}: ${err.message}`)
            }

            if (!data.trim()) {
                return resolve({filePath, wordCount: 0})
            }

            const wordCount = data.split(/\s+/).filter(word => word && !/\d/.test(word)).length;
            resolve({filePath, wordCount})
        })
    })
}

const file = async () => {
    for (const file of config.files) {
        try {
            const {filePath, wordCount} = await countWords(file)
            console.log(`${filePath}: ${wordCount} words`);
        }catch (error) {
            if (error.code === 'ENOENT') {
                console.error(`File not found: ${file}`);
            } else {
                console.error(error);
            }
        }
    }
}

file()
