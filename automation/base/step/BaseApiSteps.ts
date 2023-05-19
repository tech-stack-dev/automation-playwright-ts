import { client } from "../../base/client/Client";
import BaseClient from "../client/BaseClient";
import { ClientsEnum } from "../client/ClientsEnum";
import ContextOptions from "../client/ContextOptions";

class BaseApiSteps {
    public async createClient(clientName: ClientsEnum = ClientsEnum.Client_1, contextOption: ContextOptions = {}) {
        await client.createClient(clientName, contextOption);
    }

    public async switchToClient(clientName: ClientsEnum) {
        BaseClient.focusedClient = BaseClient.listOfClients.find(x => x.ClientName === clientName)!;
    }
}

var baseApiSteps = new BaseApiSteps();

export { baseApiSteps };