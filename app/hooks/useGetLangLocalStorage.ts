export default function useGetLangLocalStorage(): any {
  let lang;
  if (typeof window !== undefined) {
    if (window.localStorage.getItem("lang")) {
      lang = window.localStorage.getItem("lang");
    } else {
      lang = undefined;
    }
  } else {
    lang = "en";
  }

  return lang;
}
