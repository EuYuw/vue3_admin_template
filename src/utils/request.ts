/**
 * 请求封装工具类
 */
import axios, { AxiosRequestConfig } from 'axios';

// 请求方法类型
export enum Method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  HEAD = 'head'
}

// 请求参数
export interface RequestParam extends AxiosRequestConfig {
  url: string;
  method: Method;
  timeout?: number;
  formData?: any;
  retry?: number;
}

// 添加请求拦截
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    //
  }
);

// 添加相应拦截
axios.interceptors.response.use(
  (response) => {
    console.log(response);

    if (response.status === 200) {
      return response.data;
    } else {
      //
    }
  },
  (error) => {
    //
  }
);

// 请求方法
export default function sendRequest(requestParam: RequestParam): Promise<any> {
  const newParams: RequestParam = {
    baseURL: 'https://api.github.com',
    headers: {
      'Authorization': localStorage.getItem('token') || '1235',
      'Content-Type':
        requestParam.method === Method.DELETE || requestParam.method === Method.PUT
          ? 'application/x-www-form-urlencoded'
          : undefined
    },
    ...requestParam
  };
  return new Promise((reslove, reject) => {
    axios(newParams).then(
      (response) => {
        reslove(response);
      },
      (error) => {
        reject(error);
      }
    );
  });
}
