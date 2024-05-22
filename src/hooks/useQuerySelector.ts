import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

type SetQueryFunction = (
  param: string,
  value: string | number | undefined
) => void;

type Optional<T> = {
  [K in keyof T]?: T[K];
};

export const useQuerySelector = <T extends {}>(
  parameters: Record<string, string>
): [Optional<T>, SetQueryFunction] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setQuery: SetQueryFunction = useCallback(
    (param: string, value: string | number | undefined) => {
      setSearchParams((prevSearchParams) => {
        const updatedSearchParams = new URLSearchParams(prevSearchParams);
        if (!!value) {
          updatedSearchParams.set(param, String(value));
        } else {
          updatedSearchParams.delete(param);
        }
        return updatedSearchParams;
      });
    },
    [setSearchParams]
  );

  const selectedParams: Record<string, string | undefined> = Object.fromEntries(
    Object.entries(parameters).map(([param, value]) => [
      param,
      searchParams.get(param) ?? value,
    ])
  );

  return [selectedParams as Optional<T>, setQuery];
};
