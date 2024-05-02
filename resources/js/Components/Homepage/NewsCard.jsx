import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

const NewsCard = ({ item }) => {
    return (
        <Card className="w-72 shadow-md flex flex-col justify-between">
            <CardHeader>
                <img
                    src="https://i.ytimg.com/vi/nXKxU89QFvA/maxresdefault.jpg"
                    alt="genshin"
                />
                <CardTitle className="truncate text-lg">{item.title}</CardTitle>
                <CardDescription>
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {item.category}
                    </span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="line-clamp-2">{item.description}</p>
            </CardContent>
            <CardFooter className="border-t pt-3 gap-3 items-center text-sm">
                <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                />
                <p>{item.author}</p>
            </CardFooter>
        </Card>
    );
};

export default NewsCard;
