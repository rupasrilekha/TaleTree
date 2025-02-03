// import React from 'react';
// import HTMLFlipBook from 'react-pageflip';

// function BookCoverPage() {
//   // Create an array of image paths
//   const images = [];
//   for (let i = 1; i <= 5; i++) {
//     images.push(`/img${i}.jpg`); // Assuming images are in the public folder
//   }

//   return (
//     <div className="p-10 md:px-20 lg:px-40">
//       <h2 className="text-4xl font-bold text-center p-10 bg-primary text-white">Book Cover</h2>

//       {/* HTMLFlipBook component to display images */}
//       {/* @ts-ignore */}
//       <HTMLFlipBook width={300} height={500}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img src={image} alt={`Cover ${index + 1}`} style={{ width: '100%', height: '100%' }} />
//           </div>
//         ))}
//       </HTMLFlipBook>
//     </div>
//   );
// }

// export default BookCoverPage;

import React from 'react';
import HTMLFlipBook from 'react-pageflip';

interface BookCoverPageProps {
  images: string[]; // Array of image paths to be displayed in the flipbook
}

const BookCoverPage: React.FC<BookCoverPageProps> = ({ images }) => {
  return (
    <div className="p-10 md:px-20 lg:px-40">
      {/* Rendering the Flipbook with images */}
      {/* @ts-ignore */}
      <HTMLFlipBook width={300} height={500}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Cover ${index + 1}`} style={{ width: '100%', height: '100%' }} />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default BookCoverPage;
