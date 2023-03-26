import fs from "fs-extra";

class WriteReadService {

    async wrightDataToFile(dataToWrite, filePath) {
        try {
            await fs.writeJson(filePath, dataToWrite, { flag: 'w' });
        } catch (err) {
            console.log('Error writing data to file:', err)
        } // { flag: 'w' } is required to rewrite any data in file, so file will be cleared before writing
    }

    async getPostData(profession, dataPath) {
        let postData = await fs.readJson(dataPath)
        return {
            name: postData.first_name,
            job: profession,
        };
    }
}

export const writeReadService = new WriteReadService();
