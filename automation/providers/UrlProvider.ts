import { ClientsEnum } from "../base/client/ClientsEnum";
import appsetting from "../../appsetting.json";
import UrlPath from "./UrlPath";

export default class UrlProvider {
    public static homePageUrl(): string {
        return appsetting.MainPageUrl;
    }

    public static urlBuilder(urlPath: UrlPath): string {
        return `${this.homePageUrl()}${urlPath}`;
    }

    public static clientUrl(clientName: ClientsEnum): string {
        switch (clientName) {
            case ClientsEnum.Client_1: {
                return appsetting.Client_1_Url;
            }
            case ClientsEnum.Client_2: {
                return appsetting.Client_1_Url;
            }
            case ClientsEnum.Client_3: {
                return appsetting.Client_1_Url;
            }
            default: {
                throw Error(`Unable to generate client URL for '${clientName}' brand`);
            }
        }
    }
}
