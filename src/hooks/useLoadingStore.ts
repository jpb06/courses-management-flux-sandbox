import { useEffect, useState } from "react";
import { store as ApplicationStateStore } from "../stores/application.state.store";

const useLoadingStore = (): [boolean] => {
  const [isLoading, setIsLoading] = useState(ApplicationStateStore.isLoading());

  useEffect(() => {
    ApplicationStateStore.addChangeListener(onChange);

    return () => {
      ApplicationStateStore.removeChangeListener(onChange);
    };
  }, []);

  const onChange = () => setIsLoading(ApplicationStateStore.isLoading());

  return [isLoading];
};

export default useLoadingStore;
