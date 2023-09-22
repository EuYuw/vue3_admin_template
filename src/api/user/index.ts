/**
 * user api
 */

import sendRequest, { Method } from '../../utils/request';

interface QueryUserResp {
  avatar_url: string;
  name: string;
  html_url: string;
}

// 查询用户
export function queryUser(keyword: string): Promise<QueryUserResp> {
  return sendRequest({
    url: `/users/${keyword}`,
    method: Method.GET
  }).then((res) => res);
}
