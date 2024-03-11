const NewsCard = ({item}) => {
    return (
        <div
            className="w-80 h-56 border rounded-lg shadow-md p-5 flex flex-col justify-between"
        >
            <div>
                <p className="text-xl truncate font-bold">{item.title}</p>
                <p className="text-sm font-light">{item.category}</p>
            </div>
            <div>
                <p className="italic line-clamp-2">{item.description}</p>
            </div>
            <div>
                <p>Created by : {item.author}</p>
            </div>
        </div>
    );
};

export default NewsCard;
