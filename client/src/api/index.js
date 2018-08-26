/* eslint-disable no-undef */

const baseApi = 'http://localhost:3000';

const unauthorized = res => res.status === 401;

const redirectIfUnauthorized = res => unauthorized(res) && window.location.replace('/login');

async function defaultReturn(res) {
  const { status } = res;
  const data = await res.json();
  const success = res.status === 200;

  return { status, success, data };
}

async function get(uri) {
  const res = await fetch(`${baseApi}/${uri}`);
  redirectIfUnauthorized(res);
  return defaultReturn(res);
}

async function post(uri, values) {
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const req = { method: 'post', headers, body: JSON.stringify(values) };
  const res = await fetch(`${baseApi}/${uri}`, req);
  redirectIfUnauthorized(res);
  return defaultReturn(res);
}

export default { get, post };

/* eslint-enable */
