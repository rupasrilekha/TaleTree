# Introduction
TaleTree is an innovative AI-powered web application built with NextUI, designed to craft captivating stories for children. By simply providing a subject, users can generate engaging tales tailored to their preferences. TaleTree offers multiple story modes, including Bedtime Stories, Educational Adventures, and Storybooks, ensuring a personalized storytelling experience. It intelligently adapts narratives based on the child's age group, delivering age-appropriate, imaginative, and enriching content that nurtures creativity and learning. With TaleTree, every story becomes a magical journey! 


# Technologies Used in TaleTree and Their Roles

## NextUI 
– TaleTree is built using NextUI, a modern UI library that enhances responsiveness and design. It provides pre-styled components that ensure a smooth and visually appealing user experience across different devices.

## TypeScript 
– The application is developed in TypeScript, which adds static typing to JavaScript. This helps in catching errors early, improving code maintainability, and ensuring a robust development process.

## Clerk 
– Clerk is used for authentication during the login process. It handles user sign-up, sign-in, and session management, ensuring secure access to the platform.

## NextUI Components 
– The application uses NextUI components to enhance responsiveness and improve UI consistency. These components help in designing an intuitive and visually appealing interface.

## PostgreSQL 
– TaleTree uses PostgreSQL as its database to store user information, generated stories, and other relevant data. PostgreSQL provides a scalable and reliable data storage solution.


# Working Principle
## Section 1:
-Open the project in VS Code and run the command:
        npm run dev

- Once the project is running, the Home Page will appear as shown in the figure. The header consists of the following navigation options:

    Home – Redirects to the main landing page.
    Create Story – Takes users to the story creation page.
    Explore Stories – Allows users to browse and discover generated stories.
    Contact Us – Provides a way for users to reach out for support or inquiries.

Additionally, the home page includes two main action buttons:
    "Get Started" – Redirects users to the authentication page for login or signup.  
    "Craft a Tale" – Takes users directly to the Create Story page to start generating AI-powered stories.

  ![image](https://github.com/user-attachments/assets/4d247e71-784b-455a-b08d-447ededeaa94)

## Section 2:

- Clicking on the "Get Started" button takes the user to the Sign-Up/Sign-In page, which is powered by Clerk. Clerk.com handles authentication, allowing users to create an account or log in securely. It manages user sessions, authentication flows, and ensures a seamless login experience.

![image](https://github.com/user-attachments/assets/211f727c-86f5-4f0d-ba9a-188e938e0d28)


  - after successfully signed in:
  
  ![image](https://github.com/user-attachments/assets/01269229-8d4b-479b-88ce-04539f4f4f47)

## Section 3:

## Story Creation Process in TaleTree  

### 1. Initiating Story Creation  
- Clicking the **"Craft a Tale"** button redirects users to the **Create Story** page.  
- Users need to provide the following details to generate a story:  
  - **Story Subject** – The main idea or topic of the story.  
  - **Story Type** – Choose from options like:  
    - **Bedtime Story**  
    - **Educational Story**  
    - **Storybook**  
  - **Age Group** – The story adapts based on the selected age category.  

### 2. Generating the Story  
- After submitting the required details, **TaleTree uses the Gemini API** to generate a unique and engaging story based on the user's input.  

### 3. Credit Deduction  
- **One credit is deducted** for each story generated.  
- This system ensures fair usage and helps users manage their credits efficiently.

1. Creating Story with user's Input:
   
- Credits before creating story:
  
![image](https://github.com/user-attachments/assets/e6036080-78e9-4621-a686-5e3b62bf5f99)

![image](https://github.com/user-attachments/assets/9e47ae96-7ebb-4da9-aacf-08f2c039b74d)

![image](https://github.com/user-attachments/assets/9fd77089-dc7f-4fac-a8a0-000b079d95aa)

- After Creating story:
  
![image](https://github.com/user-attachments/assets/43a4e7a1-d54c-4b20-9a91-48d8128f0857)

- Story book looks like this:
  
![image](https://github.com/user-attachments/assets/2f8e0c53-dac9-4a7f-9598-a85fc9a24d79)

- Credits Deduction after story created:
  
![image](https://github.com/user-attachments/assets/5e843097-d52b-4990-b3db-e3976824a496)

- Once the story is created, then the story will be added to the Dashboard of User like this:
  
![image](https://github.com/user-attachments/assets/3472d92b-737e-4e13-951a-da8af1346365)

## Section 4:

## User's Dashboard  

### Features of the Dashboard  
- The **Dashboard** displays all the stories created by the user so far by fetching from the PostgreSQL database.  
- It shows the **remaining credits** available for story creation.  
- Users can **purchase additional credits** by clicking the **"Buy Credits"** button, which redirects them to the **BUY** page.  

### Credit System  
- If the user has **0 credits**, they **cannot create a new story**.  
- A **pop-up notification** will appear, indicating **insufficient credits** and prompting the user to purchase more.  

### Reading & Audio Features  
- Users can **read each story** directly from the dashboard.  
- A **sound play option** is available, allowing users to listen to the story for an interactive storytelling experience.
   
![image](https://github.com/user-attachments/assets/a543fe5d-cf5e-488e-b7f3-3a9e1c4530dd)

![image](https://github.com/user-attachments/assets/c9d567fc-4727-4355-b20b-275b715e6a7d)

Takes user to story page:

![image](https://github.com/user-attachments/assets/e217ff36-07eb-4b3e-a878-5d6074134dd7)


## Section 5:

## Buy Page  

### Features of the Buy Page  
- Displays all available **credit packages** for purchasing in the **TaleTree** app.  
- Allows users to **buy credits** to generate more stories.  
- **PayPal** is integrated for secure and seamless payment processing.  

![image](https://github.com/user-attachments/assets/e2ff3c23-0f28-4186-ab7c-8589e066bd48)

![image](https://github.com/user-attachments/assets/12a5b81e-ae6a-4530-bfe2-d38a4017ac46)

![image](https://github.com/user-attachments/assets/19c5df08-3ea2-41b8-bacf-76cb12daafdf)

![image](https://github.com/user-attachments/assets/2600effe-0ca0-462d-ae93-ccf7f33150d0)

- Once Payment is succesfull, the credits will be added to user's Dashboard.

## Section 6:

## Explore Stories  

### Features of the Explore Stories Page  
- Displays **all stories** created by users across the **TaleTree** platform.  
- Allows users to **explore and read** stories shared by others.  
- Fetches stories dynamically from the **database** to keep content updated.  

![image](https://github.com/user-attachments/assets/aa9f39f1-90c1-4332-a870-2d0ad752eb9d)

![image](https://github.com/user-attachments/assets/15ef7ec9-c8aa-4551-8078-1f04d9c17fa7)

## Section 7:

## Contact Us  

### Features of the Contact Us Page  
- Provides details about the **developer** for further queries and support.  
- Allows users to reach out for **assistance, feedback, or inquiries** regarding TaleTree.  

![image](https://github.com/user-attachments/assets/8f44a8ad-0fbd-483f-aeb4-539373bf9d21)

# Conclusion  

TaleTree is an innovative AI-driven storytelling platform designed to spark children's creativity and learning. By leveraging technologies like **NextUI, TypeScript, PostgreSQL, Clerk, and Gemini API**, it provides a seamless and interactive experience for users to craft unique stories effortlessly.  

With features such as **customizable story creation, user-friendly dashboards, a credit-based system, an interactive story exploration page, and secure payment integration via PayPal**, TaleTree ensures a personalized and engaging storytelling experience.  

Whether it's **bedtime stories, educational adventures, or immersive storybooks**, TaleTree brings imagination to life with AI-generated narratives. By enabling users to explore, create, and listen to stories, TaleTree makes storytelling more **accessible, fun, and inspiring for children of all ages**.  

Thank you for exploring TaleTree! 📖  















  









  





