import { test } from "@playwright/test";
import { userDtoVariable } from "../../runtimeVariables/dto/UserDtoVariable";
import { ClientsEnum } from "../../base/client/ClientsEnum";
import RequestOptions from "../../base/client/RequestOptions";
import { apiSteps } from "../../steps/api/ApiSteps";
import { baseApiSteps } from "../../base/step/BaseApiSteps";

test.beforeEach(async () => {
    await baseApiSteps.createClient(ClientsEnum.Client_1);
});

test("Api test GET", async () => {
    await apiSteps.executeGetRequest("/posts/2")
    await apiSteps.checkPropertyValue("id", 2);
});

test("Api test POST", async () => {
    userDtoVariable.value = {
        title: "morpheus",
        body: "leader",
        userId: 1
    };

    let requestOptions: RequestOptions = new RequestOptions();
    requestOptions.data = userDtoVariable.value;

    await apiSteps.executePostRequest("/posts", requestOptions, 201);
    await apiSteps.checkPropertyValue("title", "morpheus");
});