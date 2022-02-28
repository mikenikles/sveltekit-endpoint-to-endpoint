import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = async ({url}) => {
  const res = await fetch(`${url.protocol}${url.host}/two`, {
    headers: {
      accept: "application/json"
    }
  });
  const resBody = await res.text();
  return {
    status: 200,
    body: resBody
  }
}