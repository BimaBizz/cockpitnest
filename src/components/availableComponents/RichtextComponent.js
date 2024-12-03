"use client";

import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const RichtextComponent = ({ html, remove }) => {
  function fixImageUrls(htmlContent) {
    return htmlContent.replace(/src="([^"]*)"/g, (match, src) => {
      const altText = src.split("/").pop().replace(/\.(png|jpg|jpeg|gif)$/i, "");
      return `src="${process.env.NEXT_PUBLIC_HOST}${src}" alt="${altText}"`;
    });
  }

  useEffect(() => {
    const pres = document.querySelectorAll("#richtext-content pre");

    Array.from(pres).forEach((pre) => {
      const originalContent = pre.innerHTML;
      const codeContent = originalContent.replace(/<br\s*\/?>/gi, "\n");
      pre.innerHTML = `<code>${codeContent}</code>`;
      const code = pre.querySelector("code");

      pre.classList.add("hljs", "theme-atom-one-dark", "shadow-3xl", "text-sm", "relative", "overflow-hidden", "max-w-full", "h-full");
      code.classList.add("hljs");
      code.style.whiteSpace = "pre-wrap";

      try {
        hljs.highlightElement(code);
      } catch (error) {
        console.error("Error highlighting code:", error);
      }

      const button = document.createElement("button");
      button.innerHTML = `<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z" clip-rule="evenodd"/></svg>`;
      button.classList.add("absolute", "top-1", "right-0", "mt-3", "mr-3", "p-2", "bg-indigo-500", "text-white", "rounded-lg", "copy-button", "text-sm");

      button.onclick = () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(code.textContent).then(() => {
            button.innerHTML = `<svg class="w-4 h-4 inline mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>Copied!`;
            setTimeout(() => {
              button.innerHTML = `<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z" clip-rule="evenodd"/></svg>`;
            }, 2000);
          });
        } else {
          alert("Clipboard API not available");
        }
      };

      pre.appendChild(button);
    });
  }, [html]);

  return remove ? null : (
    <div id="richtext-content" dangerouslySetInnerHTML={{ __html: fixImageUrls(html) }} className="prose md:prose-md lg:prose-lg max-w-full" />
  );
};

export default RichtextComponent;
