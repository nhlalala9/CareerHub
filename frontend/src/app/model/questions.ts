export interface Questions {
    id: number;
    question: string;
    answer: {option: string;correct: boolean; image?: string}[];
    type: number;
    image?: string;
    categoryid: number;
    careerpathid: number;
}
