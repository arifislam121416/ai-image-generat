import { Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { IoMdHeart } from "react-icons/io";
import { MdDownloadForOffline } from "react-icons/md";

const AllPhotosDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://ai-image-generat.vercel.app/data.json");
  const photos = await res.json();
  const photo = photos.find((f) => f.id == id);
  console.log(photo);

  return (
    <div className="container w-full space-y-4 bg-gray-200 border p-3 rounded-2xl mt-4 mx-auto">
      <h1 className="text-2xl font-bold">{photo.title}</h1>
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          fill={true}
          className="object-cover rounded-xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Photo Name"
        />
        <Chip size="sm" className="absolute bg-gray-50 p-2 rounded-full right-2 top-2"><p>{photo.category}</p></Chip>
      </div>
       <div className="flex gap-2 items-center ">
                      <p><IoMdHeart /></p>
                      <p>{photo.likes}</p>
                  </div>
      <p>{photo.prompt}</p>
      <p>{photo.model}</p>
    
      <p>{photo.resolution}</p>
      <p>{photo.createdAt}</p>
      <div className="flex gap-2 items-center">
                      <p ><MdDownloadForOffline /></p>
                      <p >{photo.downloads}</p>
                  </div>
    </div>
  );
};

export default AllPhotosDetails;
