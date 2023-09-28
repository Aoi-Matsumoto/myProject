// import React, { useRef, useState } from "react";

// const ImageUploadApp = () => {
//   const fileInputRef = useRef<HTMLInputElement | null>(null);
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const handleImageUpload = () => {
//     if (
//       fileInputRef.current &&
//       fileInputRef.current.files &&
//       fileInputRef.current.files[0]
//     ) {
//       const selectedFile = fileInputRef.current.files[0];
//       const imageUrl = URL.createObjectURL(selectedFile);
//       setSelectedImage(imageUrl);
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "khaki",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <h1>Image Upload App</h1>
//       <input
//         type="file"
//         accept="image/*"
//         ref={fileInputRef}
//         onChange={handleImageUpload}
//       />
//       {selectedImage && (
//         <img
//           src={selectedImage}
//           alt="Uploaded"
//           style={{ marginTop: "20px", maxWidth: "50%" }}
//         />
//       )}
//     </div>
//   );
// };

// export default ImageUploadApp;

import React, { useState, useRef } from "react";

const ImageUploadApp = () => {
  const inputImageRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null); // 追加

  const onclickText = () => {
    if (inputImageRef.current !== null) {
      inputImageRef.current.click();
    }
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files !== null && files.length > 0) {
      fileRef.current = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result && typeof reader.result === "string") {
          setImageSrc(reader.result);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "khaki",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p
        onClick={onclickText}
        style={{ fontWeight: "bold", textDecoration: "underline" }}
      >
        画像をアップロード
      </p>
      <input
        ref={inputImageRef}
        type="file"
        accept="image/*"
        onChange={onChangeImage}
        style={{ visibility: "hidden" }}
      />

      {imageSrc && (
        <img
          src={imageSrc}
          alt="Uploaded"
          style={{ marginTop: "20px", maxWidth: "50%" }}
        />
      )}
    </div>
  );
};

export default ImageUploadApp;
