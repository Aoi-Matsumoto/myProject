import React, { useRef, useState } from "react";

const ImageUploadApp = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = () => {
    if (
      fileInputRef.current &&
      fileInputRef.current.files &&
      fileInputRef.current.files[0]
    ) {
      const selectedFile = fileInputRef.current.files[0];
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div style={{ backgroundColor: "khaki" }}>
      <h1>Image Upload App</h1>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageUpload}
      />
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Uploaded"
          style={{ marginTop: "20px", maxWidth: "100%" }}
        />
      )}
    </div>
  );
};

export default ImageUploadApp;
