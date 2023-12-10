"use client";

import { FileIcon, X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

// import "@uploadthing/react/styles.css";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="Upload file" className="rounded-full" />
        <button
          onClick={() => onChange("")}
          className="bg-red-600 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm hover:bg-red-700"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  if (value && fileType === "pdf") {
    return (
      <div className="relative flex items-center p-2 mt-2 rounded-md bg-foreground/5 dark:bg-background/10">
        <FileIcon className="h-10 w-10 fill-primary stroke-secondary" />
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-sm text-primary hover:underline"
        >
          {value}
        </a>
        <button
          onClick={() => onChange("")}
          className="bg-red-600 text-white p-1 rounded-full absolute -top-0 -right-2 shadow-sm hover:bg-red-700"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => console.error(error)}
    />
  );
};

export default FileUpload;
