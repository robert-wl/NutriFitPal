import { Nullable } from "./nullable.ts";

export interface FirebaseResponse<T> {
  data: Nullable<T>;
  error: Nullable<string>;
}
