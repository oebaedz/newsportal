import NewsCard from "@/Components/Homepage/NewsCard";
import Paginator from "@/Components/Homepage/Paginator";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

const Homepage = (props) => {
    return (
        <>
            <Head title={props.title} />
            <Navbar auth={props.auth.user}/>
            <NewsCard news={props.news.data} />
            <Paginator meta={props.news.meta} />
        </>
    );
};

export default Homepage;
