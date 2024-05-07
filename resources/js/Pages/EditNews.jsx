import EditContent from "@/Components/EditPage/EditContent";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

const EditNews = (props) => {
    return (
        <>
            <Head title="Edit Berita" />
            <Navbar auth={props.auth.user} />
            <EditContent news={props.currentNews}/>
        </>
    );
};

export default EditNews;
