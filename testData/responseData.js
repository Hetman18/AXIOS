class ResponseData {
    getPostResponseData() {
        return {
            name: "morpheus",
            job: "leader",
            id: '',
            createdAt: new Date().toISOString()
        }
    }
}

export const responseData = new ResponseData()
