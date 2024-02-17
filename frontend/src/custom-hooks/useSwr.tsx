import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json());
const fetcher = async function (url: string) {
    const data = await fetch(url);
    const json = await data.json();
    return json;
};

export function Profile() {
    const { data, error, isLoading } = useSWR(
        "https://<api_url>/todos",
        fetcher
    );

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    return <div>hello, you have {data.todos.length} todos!</div>;
}
