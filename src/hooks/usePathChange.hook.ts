import { useEffect } from "react";

export const changePathTitle = () => {
  const changeTitle = (title: string) => {
    document.title = title;
  };

  useEffect(() => {
    document.title = `automatically`;

    return () => {
      document.title = `automatically`;
    };
  }, []);

  return {
    changeTitle,
  };
};
