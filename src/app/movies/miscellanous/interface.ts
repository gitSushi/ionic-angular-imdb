export interface ImdbMovie {
    id: string;
    resultType: string;
    image: string;
    title: string;
    description: string;
}

export interface filmEnFrancais {
    idx: string;
    titre: string;
    plot: string;
    photo: string;
}

export interface Iget {
    searchType: string;
    expression: string;
    results: ImdbMovie[];
}

export interface IMovieDetail {
    id: string;
    title: string;
    originalTitle: string;
    plot: string;
    directors: string;
    image: string;
}