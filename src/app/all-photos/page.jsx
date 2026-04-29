import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async () => {
     const res = await fetch("https://ai-image-generat.vercel.app/data.json")
    const photos = await res.json()
    
    return (
        <div>
            <h1 className='text-4xl my-4 font-bold text-center'>All Photos</h1>

            <div className='grid grid-cols-4 gap-4'>
                {
                    photos.map(photo => <PhotoCard key={photo.id} photo={photo}/>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;