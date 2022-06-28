import { createRequest } from "./api.js";

const request = createRequest();

export function getProducts() {
  return request.get("/products")
    .then(({ data }) => data)
    .catch(console.error);
}

export function getProduct(productid) {
  return request.get(`/products/${productid}`)
    .then(({ data }) => data)
    .catch(console.error);
}
