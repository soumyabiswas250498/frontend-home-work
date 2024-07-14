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
    __v: number;
}

