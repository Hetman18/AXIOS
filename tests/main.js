import {requestsService} from "../api/requstsService.js";
import {usersMainData} from "../testData/usersMainData.js";
import {expect} from 'chai';
import {describe, it} from 'mocha';
import {responseData} from "../testData/responseData.js";
import {writeReadService} from "../api/writeReadService.js";
import {Janet} from "../objects/janet.js";

describe('Create user', function run() {

    it('Test create user request', async () => {
        let response = await requestsService.postRequest('https://reqres.in/api/users', usersMainData.getMorpheusLeaderData())
        expect(response.status).equal(201)
        expect(response.data.name).equal(responseData.getPostResponseData().name)
        expect(response.data.job).equal(responseData.getPostResponseData().job)
    })

    it('Write user data to file', async () => {
        await requestsService.getUserData().then((response) => {
            expect(response.data).eq(Janet)
            writeReadService.wrightDataToFile(response.data, '../axios.src/testData/testData.json')
        })
    })

    it('Create user with data from file', async () => {
        await writeReadService.getPostData('secretary', '../axios.src/testData/testData.json').then((postData) => {
            requestsService.postRequest('https://reqres.in/api/users', postData).then((response) => {
                expect(response.status).equal(201)
                expect(response.statusText).equal('Created')
                expect(response.data.name).equal('Janet')
                expect(response.data.job).equal('secretary')
            })
        })
    })
});
