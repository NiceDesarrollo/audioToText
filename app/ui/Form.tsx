"use client";

import { Button } from "./Button";
import React, { useState } from "react";

export default function Form() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      setError("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile); // Add 'audioFile' key for backend identification

    // const response = await fetch("http://34.31.51.194:8080", {
    //     method: "GET",
    //   });

    // Send the form data using fetch or Axios
    const response = await fetch("http://34.31.51.194:8080/upload", {
      method: "POST",
      body: formData,
    });

    // Parse the response data as JSON
    const data = await response.json();

    // Access the transcribed text
    const text = data.text;

    console.log(text);


    // Handle response
    if (response.ok) {
      // Upload successful
      setSelectedFile(null);
      setError(null);
    } else {
      // Handle upload error
      setError(response.statusText);
    }
  };

  return (
    <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
      <input
        type="file"
        accept="audio/mp3" // Specify allowed audio formats
        onChange={(event) => {
          if (event.target.files) {
            const file = event.target.files[0];
            if (file) {
              // Validate file size, type, etc. (optional)
              setSelectedFile(file);
              setError(null);
            } else {
              setSelectedFile(null);
              setError("No file selected or unsupported format");
            }
          }
        }}
        className="
            text-black 
            text-sm 
            bg-gray-100 
            file:cursor-pointer 
            cursor-pointer 
            file:border-0 
            file:py-2 
            file:px-4 
            file:mr-4 
            file:bg-gray-800 
            file:hover:bg-gray-700 
            file:text-white rounded"
      />
      <div className="text-center">
        <Button className="my-8">Enviar</Button>
      </div>
    </form>
  );
}
