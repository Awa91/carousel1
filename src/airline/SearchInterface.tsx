
export interface FilterObject {
    searchTerm: string,
    category: string[], // you can also use a type here that specifies which strings are allowed, e.g. "Category[]"
    sort: "asc" | "desc"
  }