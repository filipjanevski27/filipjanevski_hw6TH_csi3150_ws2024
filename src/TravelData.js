// It is assumed that this file will be placed inside the src folder
// Do not forget to first import the full path of all your images that is present in the Assets sub-directory as shown below
// import Place1Image1 from "./Assets/filename.extension" and similarly for the rest.
// You can use the images that I have provided or use your own
// I have provided a lorem ipsum content for description. Just use that. No need to spend time figuring out a description.
//NOTE to grader: I've spent a little time getting AI generated place descriptions
import Place1Image1 from "./Assets/TokyoImage1.jpg";
import Place1Image2 from "./Assets/TokyoImage2.jpg";
import Place1Image3 from "./Assets/TokyoImage3.jpg";
import Place2Image1 from "./Assets/LondonImage1.jpg";
import Place2Image2 from "./Assets/LondonImage2.jpg";
import Place2Image3 from "./Assets/LondonImage3.jpg";
import Place3Image1 from "./Assets/SFImage1.jpg";
import Place3Image2 from "./Assets/SFImage2.jpg";
import Place3Image3 from "./Assets/SFImage3.jpg";

const TravelData = [
  {
    id: 1,
    placeHeading: "Tokyo",
    placeImg1: Place1Image1,
    placeImg2: Place1Image2,
    placeImg3: Place1Image3,
    placeDescription:
      "Tokyo, Japan’s vibrant capital, is the world’s most populous metropolis, offering a unique blend of traditional and modern, with historic temples and neon-lit skyscrapers coexisting in harmony. Tourists can explore the city’s rich history in districts like Asakusa, experience cutting-edge technology in Akihabara, or enjoy the natural beauty of the city’s many gardens and parks.",
  },
  {
    id: 2,
    placeHeading: "London",
    placeImg1: Place2Image1,
    placeImg2: Place2Image2,
    placeImg3: Place2Image3,
    placeDescription:
      "London, the capital of England and the United Kingdom, is a city steeped in history and culture. It’s known for its iconic landmarks such as the Big Ben, Buckingham Palace, and the London Eye, offering visitors a glimpse into the city’s rich past and vibrant present.",
  },
  {
    id: 3,
    placeHeading: "San Francisco",
    placeImg1: Place3Image1,
    placeImg2: Place3Image2,
    placeImg3: Place3Image3,
    placeDescription:
      "San Francisco, known for its iconic Golden Gate Bridge and historic cable cars, is a city of vibrant neighborhoods and stunning views. It’s a place where tourists can enjoy diverse dining, explore unique neighborhoods, and experience the natural beauty of its many parks and the bay.",
  },
];

export default TravelData;
