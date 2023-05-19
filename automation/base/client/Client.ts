import { request } from "@playwright/test";
import UrlProvider from "../../providers/UrlProvider";
import BaseClient from "./BaseClient";
import { ClientsEnum } from "./ClientsEnum";
import ContextOptions from "./ContextOptions";

class Client extends BaseClient {
    public async createClient(clientName: ClientsEnum, contextOptions: ContextOptions) {
        contextOptions.baseURL = UrlProvider.clientUrl(clientName);
        BaseClient.focusedClient = new BaseClient();
        BaseClient.focusedClient.ClientName = clientName;
        client.ClientContext = await request.newContext(contextOptions);
        BaseClient.listOfClients.push(BaseClient.focusedClient);

        return this;
    }
}

var client = new Client();

export { client };