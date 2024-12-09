import React, { useState } from "react";

const PhotoUploader = () => {
  const [images, setImages] = useState<string[]>([]); 
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files).map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...files]); 
    }
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
        accept="image/*"
      />
      <label htmlFor="fileInput" className="cursor-pointer border px-4 py-2 rounded-md bg-gray-100">
        Upload Photos
      </label>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Uploaded ${index}`} className="w-full h-full object-cover rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoUploader;
