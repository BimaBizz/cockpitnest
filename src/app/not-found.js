'use client';
 
import "./globals.css";
import Error from "next/error";

 
export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-base-100">
        <div className="mockup-browser border-base-300 border h-screen">
      <div className="mockup-browser-toolbar">
        <div className="input border-base-300 border"></div>
      </div>
      <div className="border-base-300 flex justify-center items-center border-t h-full">
      <Error statusCode={404} />
      </div>
    </div>
      </body>
    </html>
  );
}