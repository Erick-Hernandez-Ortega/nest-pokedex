export interface PokeResponse {
    count: number;
    next: string;
    previuos: null;
    results: Result[]
}

export interface Result {
    name: string;
    url: string;
}