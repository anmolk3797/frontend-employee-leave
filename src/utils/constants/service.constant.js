export let SERVICE_ROUTES = {
  CREATE_LEAVE: "https://leave-management-0gmp.onrender.com/leave/",
  GET_LEAVE: "https://leave-management-0gmp.onrender.com/leave/",
  USER_DETAIL: "https://leave-management-0gmp.onrender.com/leave/?date=@@@&expand=user"

}
export const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};
export const replaceUrl = (url, date) => {
  return url.replace(/@@@/g, `${date}`);
};