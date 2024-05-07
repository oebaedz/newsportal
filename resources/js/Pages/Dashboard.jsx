import Content from '@/Components/Dashboard/Content';
import { Toaster } from '@/Components/ui/toaster';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

export default function Dashboard(props) {
    const myNews = props.myNews;

    return (
        <AuthenticatedLayout
            user="{auth.user}"
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Berita Saya</h2>}
        >
            <Head title="Dashboard" />
            <Content myNews={myNews}/>
            <Toaster/>
        </AuthenticatedLayout>
    );
}
