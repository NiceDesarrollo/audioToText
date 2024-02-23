"use client";

import { Button } from "./Button";
import React, { Dispatch, SetStateAction, useState } from "react";

interface FormProps {
  textResponse: Dispatch<SetStateAction<string>>;
}

export const Form: React.FC<FormProps> = ({ textResponse }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      setError("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile); // Add 'audioFile' key for backend identification


    // Display a loading indicator while waiting for the response
    setLoading(true);

    fetch("https://b799-34-31-51-194.ngrok-free.app/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Access and use the transcribed text (data.text)
        textResponse(data.text);
        setLoading(false); // Hide loading indicator
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message || "An error occurred. Please try again later.");
        setLoading(false); // Hide loading indicator
      });
  };

  return (
    <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>

      {loading && <div className="box mx-auto my-6"></div>}

      {!loading && (
        <>
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
        </>
      )}
    </form>
  );
};
