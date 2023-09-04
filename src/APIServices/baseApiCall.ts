/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { useNavigate } from "react-router";
import { dispatch } from "../redux";
import axios from "./axiosConfig";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export const METHOD = {
  POST: "post",
  GET: "get",
  PUT: "put",
  DELETE: "delete",
  PATCH: "patch",
};

interface DyanamicConfig extends AxiosRequestConfig {
  showToast:boolean
}


export const apiCall = (
  endpoint: string,
  params = {},
  onSuccess: Function,
  onFailure: Function,
  method = METHOD.GET,
  DyanamicConfig: DyanamicConfig
) => {
  const request = (): Promise<any> => {
    switch (method) {
      case METHOD.POST:
        return axios.post(endpoint, params, { ...DyanamicConfig });
      case METHOD.GET:
        return axios.get(endpoint, { ...DyanamicConfig });
      case METHOD.DELETE:
        return axios.delete(endpoint, { ...DyanamicConfig });
      case METHOD.PUT:
        return axios.put(endpoint, params, { ...DyanamicConfig });
      case METHOD.PATCH:
        return axios.patch(endpoint, params, { ...DyanamicConfig });
    }
    return new Promise((resolve, reject) => resolve({}));
  };

  const req = request();

  req
    .then((response) => {
      console.log("Response",response);
      if (
        (response.status === 200 ||
          response.status === 201 ||
          response.status === 204 ||
          response.data) &&
        response.data !== ""
      ) {
        if (DyanamicConfig.showToast && response.data.message) {
        }
        onSuccess(response.data);
      } else if (response.status === 200 || response.status === 204) {
        onSuccess("success");
      } else {
        onFailure("Something went wrong");
      }
    })
    .catch((error) => {
      console.log("error",error);

      if (error && error.response) {
        if (DyanamicConfig.showToast && error.response.data.message) {
          
        }
        console.log("---->navidate");

        switch (error.response.status) {
          case 401:
            onFailure(
              error.response.data && typeof error.response.data.detail
                ? error.response.data.detail
                : "Session expired"
            );
            break;

          case 404:
            break;

          default:
            onFailure(
              error.response.data ? error.response.data : "Something went wrong"
            );
            break;
        }
      } else onFailure && onFailure("Something went wrong");
    });
};
