export default function useGetLangLocalStorage(): string {
  return localStorage.getItem("i18nextLng") || "en";
}
