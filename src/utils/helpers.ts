export const appendBaseUrl = (pathname: string) => {
  return `${process.env.REACT_APP_API_BASE_URL}${pathname}`;
};
