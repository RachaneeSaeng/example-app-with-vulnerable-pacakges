export const handleErrors = (response: Response): Response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const toQueryString = (params: object): string =>
  Object.entries(params)
    .map(
      (param: string[]): string => `${param[0]}=${encodeURIComponent(param[1])}`
    )
    .join("&");