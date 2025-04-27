interface Post {
    id: string,
    name: string,
    createdAt: Date,
    soon: boolean,
    done: boolean,
}

interface PostProps {
    post: Post,
}

export type {Post, PostProps}