import React from "react";
import "./Blogs.css"; // Import your CSS file

const blogs = [
  {
    title: "The Latest Trends in Fashion",
    date: "2024-07-31",
    content: "This petite Goa-based fashion blogger isn't one for soft, pretty imagery. She may be shooting against expansive beaches, blue skies and lush greens but her images carry an unexpected haunting quality, full of depth and dark overtones. She's collaborated with a host of brands, from L'Oreal and Nike to Tommy Hilfiger and Quirk Box. Turn to her blog for beautifully shot photographs infused with a sense of quiet sophistication and retro charm.Consider a variety of topics to keep your readers engaged, such as seasonal fashion trends, how-to style guides, fashion do’s and don’ts, interviews with fashion influencers, and product reviews and recommendations.",

    image: "https://www.lux-review.com/wp-content/uploads/2021/06/Summer-fashion.jpg"
  },
  {
    title: "How to Style Your Summer Wardrobe",
    date: "2024-07-30",
    content: " The best fashion blogs don't just give you incredible style advice—they give you inspiration. Fashion blogs engage you in interesting content and provide new ideas on the subject of fashion and the surrounding creative world. Sure, everyone wants great outfit ideas for their Pinterest boards and dream wardrobes, but fashion isn't just about looking perfect. It can be an expression of who you are and how you want to represent yourself in the world. Now, if that's a little too deep for you, fear not. Our roundup of the best fashion blogs is a mix of serious and lighthearted takes on style.",
    image: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg"
  },
  {
    title: "How to Style Your Summer Wardrobe",
    date: "2024-07-30",
    content: " The best fashion blogs don't just give you incredible style advice—they give you inspiration. Fashion blogs engage you in interesting content and provide new ideas on the subject of fashion and the surrounding creative world. Sure, everyone wants great outfit ideas for their Pinterest boards and dream wardrobes, but fashion isn't just about looking perfect. It can be an expression of who you are and how you want to represent yourself in the world. Now, if that's a little too deep for you, fear not. Our roundup of the best fashion blogs is a mix of serious and lighthearted takes on style.",
    image: "https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Sustainable Fashion: A Guide",
    date: "2024-07-29",
    content: "Creating a men's fashion blog on Fabelley can significantly enhance user engagement by providing valuable and interesting content. Begin by defining your niche, focusing on specific style categories such as casual, formal, business casual, or streetwear, and tailor your content to a particular audience, considering factors like age group, profession, and lifestyle. Plan your content ahead with an editorial calendar to ensure consistent posting. Consider a variety of topics to keep your readers engaged, such as seasonal fashion trends, how-to style guides, fashion do’s and don’ts, interviews with fashion influencers, and product reviews and recommendations. ",
    image: "https://images.pexels.com/photos/6626999/pexels-photo-6626999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export default function Blogs() {
  return (
    <div className="blogs">
      <h1 className="text-3xl font-bold text-center my-4">Fashion and Clothing Blogs</h1>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-item bg-white p-4 m-4 rounded shadow">
            {blog.image && <img src={blog.image} alt={blog.title} className="w-full object-cover" />}
            <h2 className="text-2xl font-bold">{blog.title}</h2>
            <p className="text-gray-500">{blog.date}</p>
            <p className="text-lg mt-2">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
