import { Link, Head } from "@inertiajs/react";

const Homepage = (props) => {
    return (
        <>
            <Head title={props.title} />
            <div className="min-h-screen flex justify-center gap-6 flex-wrap m-4">
                {props.news.map((n) => (
                    <div className="w-[360px] h-64 border rounded-lg shadow-md p-3">
                        <p className="text-xl font-bold">{n.category}</p>
                        <p className="text-xs mb-4">{n.title}</p>
                        <p>Created by : {n.author}</p>
                        <p className="italic mt-4">{n.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Homepage;
