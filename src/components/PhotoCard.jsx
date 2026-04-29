import { Card } from "@heroui/react";
import Image from "next/image";
import { IoMdHeart } from "react-icons/io";
import { MdDownloadForOffline } from "react-icons/md";


const PhotoCard = ({photo}) => {
   
    return (
        <Card className="border rounded-2xl p-3">
            <div className="relative w-full aspect-square">
                <Image
                src={photo.imageUrl}
               fill={true}
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Photo Name"
                />
            </div>
            <div>
                <h1 className="text-3xl font-bold">{photo.title}</h1>
            </div>
            <div className="flex gap-2 items-center ">
                <p><IoMdHeart /></p>
                <p>{photo.likes}</p>
            </div>
            <div className="flex gap-2 items-center">
                <p className="text-2xl font-bold"><MdDownloadForOffline /></p>
                <p className="text-2xl font-bold">{photo.downloads}</p>
            </div>
        </Card>
    );
};

export default PhotoCard