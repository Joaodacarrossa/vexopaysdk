export declare class HttpClient {
    private readonly apiKey;
    private readonly idKey;
    private readonly baseURL;
    constructor(apiKey: string, idKey: string, baseURL?: string);
    private request;
    get(path: string): Promise<any>;
    post(path: string, body?: unknown): Promise<any>;
    put(path: string, body?: unknown): Promise<any>;
    delete(path: string, body?: unknown): Promise<any>;
}
//# sourceMappingURL=httpclient.d.ts.map