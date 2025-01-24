import React from 'react';

export default function Footersection() {
  return (
    <footer
      className="bg-green-600 text-center  text-white lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200  text-white">
        © 2023 Copyright:
        <a
          className="text-neutral-800 dark:text-neutral-400  text-white"
          href="https://tw-elements.com/"
        > Trendzzmart.com</a>
      </div>
    </footer>
  );
}