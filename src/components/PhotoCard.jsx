import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { IoMdHeart } from "react-icons/io";
import { MdDownloadForOffline } from "react-icons/md";


const PhotoCard = ({photo}) => {
   
    return (
        <Card className="border space-y-3 rounded-2xl p-3">
            <div className="relative w-full aspect-square">
                <Image
                src={photo.imageUrl}
               fill={true}
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Photo Name"
                />
                <Chip size="sm" className="absolute bg-gray-100 p-2 rounded-2xl right-2 top-2">{photo.category}</Chip>
            </div>
            <div>
                <h1 className="text-3xl font-bold">{photo.title}</h1>
            </div>
            <div className="flex gap-2 items-center ">
                <p><IoMdHeart /></p>
                <p>{photo.likes}</p>
            </div>
            <div className="flex gap-2 items-center">
                <p ><MdDownloadForOffline /></p>
                <p >{photo.downloads}</p>
            </div>
            <Button variant="primary" className="bg-gray-200 border rounded-full py-2 text-xl font-semibold w-full">View</Button>
        </Card>
    );
};

export default PhotoCard