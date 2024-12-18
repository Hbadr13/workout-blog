export interface BlogType {
    slug: string;
    title: string;
    description: string;
    category: string;
    date: string;
    imageURL: string;
    RelatedPosts: string[]
}

export interface IBlogByCategories {
    category: string,
    content: BlogType[]
}