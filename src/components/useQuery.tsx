import { useEffect, useState } from "react";

export type StatusType = "loading" | "ready" | "error";

/** fetch some data from a server, and return the data + status
 *
 * @param url - the url to fetch from
 * @param lsKey - (optional) if passed, data will be stored in LS
 */
export function useQuery(url, lsKey: null | string = null) {
  const [status, setStatus] = useState<StatusType>("loading");
  const lsData = lsKey && window.localStorage.getItem(lsKey);
  const [data, setData] = useState<any[] | null>(
    lsData ? JSON.parse(lsData) : null
  );

  // useEffect runs the given cb fn...
  // 1. when the component mounts
  // 2. whenever the dependencies change
  // useEffect(() => {},[])
  // fetch some data!
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((posts: any[]) => {
        // save the data in state so we can use it outside this function
        setData(posts);
        if (lsKey) {
          window.localStorage.setItem(lsKey, JSON.stringify(posts));
        }
        setStatus("ready");
      });
  }, []);

  return { data, status };
}
