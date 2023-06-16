import { ClientsEnum } from "../base/client/ClientsEnum";

export default class UrlProvider {
    public static mainPageUrl(): string {
        return <string>process.env.MAIN_PAGE_URL;
    }

    public static addUserPageUrl(): string {
        return <string>process.env.ADD_USER_PAGE_URL;
    }

    public static careerUrl(): string{
        return <string>process.env.CAREER_URL;
    }

    public static clientUrl(clientName: ClientsEnum): string {
        switch (clientName) {
            case ClientsEnum.Client_1: {
                return <string>process.env.CLIENT_1_URL;
            }
            case ClientsEnum.Client_1: {
                return <string>process.env.CLIENT_2_URL;
            }
            case ClientsEnum.Client_1: {
                return <string>process.env.CLIENT_3_URL;
            }
            default: {
                throw Error(`Unable to generate client URL for '${clientName}' brand`)
            }
        }
    }
}