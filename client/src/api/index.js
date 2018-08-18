/* eslint-disable no-undef */

const baseApi = 'http://localhost:3000';

async function get(uri) {
  const response = await fetch(`${baseApi}/${uri}`);
  const json = await response.json();
  return json;
}

async function post(uri, values) {
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const request = { method: 'post', headers, body: JSON.stringify(values) };
  const response = await fetch(`${baseApi}/${uri}`, request);
  const json = await response.json();
  return json;
}

export default { get, post };

/* eslint-enable */
