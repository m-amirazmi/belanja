import usePageStore from "@/store/page-store";
import { useEffect } from "react";

export default function useInitialPageName(pagename: string) {
  const { setPageName } = usePageStore();
  useEffect(() => setPageName(pagename), []);
  return;
}
