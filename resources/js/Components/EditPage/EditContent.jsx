import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { router } from "@inertiajs/react";

const EditContent = ({ news }) => {
    const [title, setTitle] = useState(news.title);
    const [description, setDescription] = useState(news.description);
    const [category, setCategory] = useState(news.category);

    const handleSubmit = () => {
        const data = {id: news.id, title, description, category}
        router.post('/news/update', data)
        setTitle("")
        setDescription("")
        setCategory("")
    }
    return (
        <>
            <div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 space-y-6">
                            <h2 className="text-xl font-medium">Edit Berita</h2>
                            <Input
                                type="text"
                                placeholder="Title"
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                                defaultValue={news.title}
                            />
                            <Input
                                type="text"
                                placeholder="Description"
                                onChange={(description) =>
                                    setDescription(description.target.value)
                                }
                                defaultValue={news.description}
                            />
                            <Input
                                type="text"
                                placeholder="Category"
                                onChange={(category) =>
                                    setCategory(category.target.value)
                                }
                                defaultValue={news.category}
                            />
                            <Button onClick={() => handleSubmit()}>
                                Update
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditContent;
