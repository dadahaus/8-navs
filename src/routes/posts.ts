    // src/routes/posts.ts
    import type { EndpointOutput } from '@sveltejs/kit';
    export async function get(): Promise<EndpointOutput> {
        const res = await fetch('http://localhost:1337/api/posts?populate=*');
        const data = await res.json();
        return { body: data };
    }
    #Ignore the typings if you're using javascript.