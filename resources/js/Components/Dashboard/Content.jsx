import React, { useEffect, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

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
        flash ? toast({description: flash}) : ""
    }, [flash])


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
            </div>
        </div>
    );
};

export default Content;
