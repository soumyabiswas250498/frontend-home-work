export interface AuthorInterface {
    _id: string;
    userName: string;
    email: string;
}

export interface HomeworkInterface {
    _id: string;
    class: string;
    section: string;
    subject: string;
    author: AuthorInterface;
    heading: string;
    description: string;
    file: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface UserInt {
    _id: string;
    userName: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

