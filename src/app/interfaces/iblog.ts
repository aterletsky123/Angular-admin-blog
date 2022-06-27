export interface IBlogRequest {
    title: string,
    text: string,
    author: string
}

export interface IBlogResponse extends IBlogRequest{
    id:number,
}
