export interface NavigationItem {
    id: number;
    title: string;
    url?: string;
    subItems?: NavigationItem[];
}
