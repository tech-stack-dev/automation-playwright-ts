import appsetting from "../../appsetting.json";
import UrlPath from "./UrlPath";

export default class UrlProvider {
    public static homePageUrl(): string {
        return appsetting.MAIN_PAGE_URL;
    }

    public static urlBuilder(urlPath: UrlPath): string {
        return `${this.homePageUrl()}${urlPath}`;
    }
}
