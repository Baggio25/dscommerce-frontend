import { AxiosRequestConfig } from "axios";
import QueryString from "qs";

import { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { requestBackend } from "../utils/requests";

export function loginRequest(loginData: CredentialsDTO) {

  //Cabeçalhos
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
  };

  //Corpo da requisição
  const requestBody = QueryString.stringify( {
    ...loginData,
    grant_type: "password"
  });

  //Realiza a requisição
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth/token",
    data: requestBody,
    headers
  };

  return requestBackend(config);
}