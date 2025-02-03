const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "create kids story on description for 5-8 years kids, Educational story, and all images in Paper cut style: story of boy and Magic School, give me 5 chapter, With detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"story_title\": \"Leo and the Lumina Academy\",\n  \"cover_image_prompt\": \"A paper-cut style illustration for a children's book cover. The title 'Leo and the Lumina Academy' is displayed in whimsical, slightly uneven lettering at the top. The main image shows a young boy with bright eyes and a slightly surprised expression, standing in front of a tall, colorful school building made of layered paper shapes. The school features a mix of circles, squares, and triangles for windows and doors, and has a whimsical, almost playful appearance, with small glowing stars and crescent moons scattered around it. The boy is holding a small paper airplane. The color palette is vibrant, with warm yellows, oranges, blues, and greens.\",\n  \"chapters\": [\n    {\n      \"chapter_number\": 1,\n      \"chapter_title\": \"The Mysterious Map\",\n      \"story_text\": \"Leo loved exploring! One sunny afternoon, while rummaging through his grandpa's attic, he discovered a rolled-up map. It wasn't an ordinary map; it was made of shimmering, colorful paper, and when Leo touched it, the paper glowed! The map showed a path leading to a place called 'Lumina Academy'. It looked like a magical school made of paper just like his map!\",\n      \"image_prompt\": \"A paper-cut style illustration depicting a cluttered attic. Young Leo, with tousled brown hair, is kneeling on the floor, holding an unfolded paper map that emits a soft, golden glow. The map is made of layered paper in various bright colors, with a whimsical pathway drawn on it. Around him are cardboard boxes, old toys, and dusty books, all rendered in a paper-cut aesthetic. The lighting is warm and inviting, with the glow from the map being a focal point.\"\n    },\n    {\n      \"chapter_number\": 2,\n      \"chapter_title\": \"The Paper Airplane Journey\",\n      \"story_text\": \"Following the map, Leo reached a shimmering forest. The trees were made of layered paper, some tall and green, others short and red. At the edge of the forest, he found a small, flat paper airplane. When he touched it, the plane sprang to life, and invited Leo to climb on. Whoosh! It flew through the paper trees, towards Lumina Academy! The ride felt like a dream.\",\n      \"image_prompt\": \"A paper-cut style illustration showing a vibrant, layered paper forest. Trees are various shades of green, with some bright red and yellow ones interspersed. Leo is riding a small, paper airplane, which is depicted in dynamic motion. The airplane is made of folded paper and appears to be flying from the right of the illustration towards the left, with a soft, motion blur to create a sense of movement. The colors are bright and cheerful. The background has paper clouds in different shapes and sizes.\"\n    },\n    {\n      \"chapter_number\": 3,\n      \"chapter_title\": \"A School of Paper and Light\",\n       \"story_text\": \"Finally, Leo arrived at Lumina Academy! The school was even more magical than the map showed. Its walls were made of colorful layered paper, windows twinkled like stars, and friendly paper birds flew around. Inside, other children were learning with light! Some were using paper lanterns to create glowing shapes, while others made words appear from light.\",\n      \"image_prompt\": \"A paper-cut style illustration of Lumina Academy. The school is a tall, whimsical structure built from layered paper, with a variety of geometric shapes for windows and doors. The building is adorned with stars and crescent moons that glow. Inside the windows, paper-cut figures of children are engaged in various activities: some are holding paper lanterns that cast light, while others seem to be manipulating beams of light to form shapes or words. The colors are bright and inviting, with a warm overall glow.\"\n     },\n    {\n      \"chapter_number\": 4,\n      \"chapter_title\": \"Learning with Light and Paper\",\n       \"story_text\": \"Leo joined the students, eager to learn. He discovered that at Lumina Academy, the paper wasn't just for making things, it was also magic. He learned how to use colored paper to make glowing stars that floated in the air and how to fold paper into animals that moved with a gentle flick of his wrist. It was amazing!\",\n        \"image_prompt\": \"A paper-cut style illustration of Leo and other children inside a classroom at Lumina Academy. Leo is in the center, holding a small paper star that glows with a warm light. Around him, other children are similarly creating glowing paper shapes and animals. There are paper animals floating around the room, and some are using colored paper and light to create various shapes. The classroom is filled with colorful layered paper furniture and decorations. The light is warm and inviting, with an emphasis on the glowing objects.\"\n    },\n    {\n      \"chapter_number\": 5,\n       \"chapter_title\": \"The Gift of Lumina\",\n        \"story_text\": \"At the end of the day, Leo felt sad that his day was over. The headmaster, a wise old paper owl, gave Leo a special gift: a paper lantern that could shine a bright light and a notebook with a pen that can draw in light! “Remember, Leo,” the owl hooted, “the light of knowledge can be found everywhere, even in paper!”. Leo smiled. He knew this was just the start of his paper and light adventure\",\n      \"image_prompt\": \"A paper-cut style illustration of Leo receiving a gift from a paper owl headmaster inside the Lumina Academy. The owl, with large, wise eyes and layered paper feathers, is holding out a small paper lantern that emits a bright glow. Leo is smiling and reaching for the lantern with one hand while holding a small notebook and pen in another. Around them, the room is filled with various paper constructions. The colors are warm and inviting, with a soft, magical glow from the lantern.\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
    
  
  
