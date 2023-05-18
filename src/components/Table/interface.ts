export type IColumn = {
    name: string;
    data: string;
    render?: (data?: any) => any;
}

export type ITable = {
    columns: IColumn[];
    data: any[];
    title?: string;
}