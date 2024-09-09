export interface UseAxiosProps<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
  }