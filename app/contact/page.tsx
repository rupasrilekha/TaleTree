import React, { JSX } from 'react';

const Contact: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#cad3ff] p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg mt-4">
        <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
        
        <div className="space-y-4">
          <div>
            <p className="text-primary"><strong>Name:</strong>Rupa Srilekha Kandula</p>
          </div>
          
          <div>
            <p className="text-primary"><strong>Email:</strong> rupasrilekha8@gmail.com</p>
          </div>
          
          <div>
            <p className="text-primary"><strong>Phone:</strong> +1 234 567 890</p>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Contact;
