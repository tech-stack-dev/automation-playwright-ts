export interface UserDto {
    title: string;
    body: string;
    userId: number;
    id?: number; // JSONPlaceholder returns a fake id like 101
}