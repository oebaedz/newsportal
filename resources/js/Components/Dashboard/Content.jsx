import React, { useEffect, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

const Content = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const { toast } = useToast();
    const flash = usePage().props.flash.message;

    const handleSubmit = () => {
        const data = { title, description, category };
        router.post("news", data);
    };

    useEffect(() => {
        flash ? toast({ description: flash }) : "";
    }, [flash]);

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 space-y-6">
                        <h2 className="text-xl font-medium">
                            Tambah Berita Baru
                        </h2>
                        <Input
                            type="text"
                            placeholder="Title"
                            onChange={(title) => setTitle(title.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Description"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                        />
                        <Input
                            type="text"
                            placeholder="Category"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                        />
                        <Button onClick={() => handleSubmit()}>Tambah</Button>
                    </div>
                </div>
                <div className="bg-white overflow-hidden mt-6 shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 space-y-6">
                        <Card className="shadow-md flex flex-row">
                            <div className="">
                                <img
                                    className="h-36"
                                    src="https://i.ytimg.com/vi/nXKxU89QFvA/maxresdefault.jpg"
                                    alt="genshin"
                                />
                            </div>
                            <div className="flex flex-col items-start">
                                <CardHeader>
                                    <CardTitle className="truncate text-md">
                                        {/* {item.title} */}
                                        Title
                                    </CardTitle>
                                    <CardDescription>
                                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                            {/* {item.category} */}
                                            Cate
                                        </span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {/* <p className="line-clamp-2">{item.description}</p> */}
                                    <p className="text-sm line-clamp-2">Desc</p>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
