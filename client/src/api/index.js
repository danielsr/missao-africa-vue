/* eslint-disable no-undef */

const baseApi = 'http://localhost:3000';

const unauthorized = res => res.status === 401;
const success = res => res.status === 200;

const redirectIfUnauthorized = res => unauthorized(res) && window.location.replace('/login');

async function get(uri) {
  const res = await fetch(`${baseApi}/${uri}`);
  redirectIfUnauthorized(res);
  return success(res) ? res.json() : null;
}

async function post(uri, values) {
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const req = { method: 'post', headers, body: JSON.stringify(values) };
  const res = await fetch(`${baseApi}/${uri}`, req);
  redirectIfUnauthorized(res);
  return success(res) ? res.json() : null;
}

export default { get, post };

/* eslint-enable */
