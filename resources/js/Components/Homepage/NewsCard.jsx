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
        <Card className='w-72 shadow-md flex flex-col justify-between'>
            <CardHeader>
                <CardTitle className='truncate text-lg'>{item.title}</CardTitle>
                <CardDescription>{item.category}</CardDescription>
            </CardHeader>
            <CardContent>
                <img src="https://i.ytimg.com/vi/nXKxU89QFvA/maxresdefault.jpg" alt="genshin" />
                <p className="line-clamp-2 mt-2">{item.description}</p>
            </CardContent>
            <CardFooter>
                <p>{item.author}</p>
            </CardFooter>
        </Card>
    );
};

export default NewsCard;
