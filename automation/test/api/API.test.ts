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
    // Original request payload
    const originalData = {
        title: "morpheus",
        body: "leader",
        userId: 1
    };

    // Deep copy to ensure reference object remains unchanged throughout the test
    const expectedData = JSON.parse(JSON.stringify(originalData));

    userDtoVariable.value = originalData;

    const requestOptions: RequestOptions = new RequestOptions();
    requestOptions.data = userDtoVariable.value;

    await apiSteps.executePostRequest("/posts", requestOptions, 201);

    // We validate the response against the deep copy to avoid accidental changes during the test
    await apiSteps.checkPropertyValue("title", expectedData.title);
});