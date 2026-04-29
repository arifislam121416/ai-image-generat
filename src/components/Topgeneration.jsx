import React from 'react';
import PhotoCard from './PhotoCard';

const Topgeneration = async() => {
    const res = await fetch("https://ai-image-generat.vercel.app/data.json")
    const photos = await res.json()
   const topPhotos = photos.slice(0,9)
   console.log(topPhotos);
    return (
        <div className='my-4'>
            <h1 className='text-4xl text-center font-bold'>To Photos</h1>
           <div className='p-4 rounded-2xl grid grid-cols-4 gap-4 bg-gray-200 '>
                {
                    topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo} />)
                }
                    
           </div>
        </div>
    );
};

export default Topgeneration;