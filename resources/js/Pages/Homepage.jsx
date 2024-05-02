import NewsCard from "@/Components/Homepage/NewsCard";
import Paginator from "@/Components/Homepage/Paginator";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

const Homepage = (props) => {
    return (
        <>
            <Head title={props.title} />

            <Navbar auth={props.auth.user}/>
            <div className="min-h-full max-w-7xl mx-auto flex justify-center gap-6 flex-wrap mt-4 mb-20 m-4 px-4 sm:px-6">
                {props.news.data.map((item) => (
                    <NewsCard key={item.id} item={item} />
                ))}
            </div>
            <Paginator meta={props.news.meta} />
        </>
    );
};

export default Homepage;
