export class HttpClient {
    apiKey;
    idKey;
    baseURL;
    constructor(apiKey, idKey, baseURL = "https://vexopay.com.br/api") {
        this.apiKey = apiKey;
        this.idKey = idKey;
        this.baseURL = baseURL;
    }
    async request(method, path, body) {
        const response = await fetch(this.baseURL + path, {
            method: method,
            headers: {
                "cs": `${this.apiKey}`,
                "ci": `${this.idKey}`,
                "Content-Type": "application/json"
            },
            body: body ? JSON.stringify(body) : null
        });
        if (!response.ok) {
            throw new Error(await response.text());
        }
        return response.json();
    }
    get(path) {
        return this.request("GET", path);
    }
    post(path, body) {
        return this.request("POST", path, body);
    }
    put(path, body) {
        return this.request("PUT", path, body);
    }
    delete(path, body) {
        return this.request("DELETE", path, body);
    }
}
//# sourceMappingURL=httpclient.js.map