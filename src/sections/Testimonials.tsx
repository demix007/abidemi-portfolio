import Abdul from "@/assets/images/Abdul.jpeg";
import Adesanya from "@/assets/images/adesanya.jpeg";
import Kashif from "@/assets/images/kashif.jpeg";
import Keenan from "@/assets/images/keenan.jpeg";
import Paul from "@/assets/images/paul.jpeg";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Abdul Saboor Sohaib",
    position: "Software Developer @ Bluetelecast",
    text: "Ayodeji Abidemi is exactly the sort of software developer any company would love. I met them while struggling with a challenging data structures problem, and within a few minutes, they managed to explain a concept I had been working with for days. They have a great way of simplifying complex problems into bite-sized pieces, and as a junior developer, that was really valuable for me. They are also just a fun person to chat with! If you need to get a job done and efficiently, Ayodeji Abidemi definitely the person for you.",
    avatar: Abdul,
  },
  {
    name: "Keenan Botes",
    position: "Software Developer @ The IT Team",
    text: "Ayodeji has been a good friend and has proved to be a talented software developer in Javascript and React. His portfolio showcases numerous quality projects that have been built with other coding partners. I highly recommend Ayodeji as he has the professional skills proven to deliver quality work.",
    avatar: Keenan,
  },
  {
    name: "Kashif Saleem",
    position: "Software Engineer @ Programmers Force",
    text: "I had the privilege of collaborating with Ayodeji, and I wholeheartedly recommend him for his position. Ayodeji consistently exhibits an exceptional work ethic and delivers outstanding results. His ability to grasp new concepts swiftly and his commitment to surpassing expectations are truly remarkable. Ayodeji technical proficiency is complemented by his excellent communication skills, making him an invaluable asset to any team. ",
    avatar: Kashif,
  },
  {
    name: "Chukwuma Paul Mosanya",
    position: "Software Developer @ GlobalTech",
    text: "Ayodeji is a very hard-working person who can tackle any software development problem with ease. We have worked together on several projects, and I found him highly skilled and dedicated professional. He uses software development skills, attention to detail, and critical thinking to tackle and solve technical problems. He has proven his skillset and coding ability as a web developer by building multiple peer programming projects in React, JavaScript and Bootstrap. I am glad to have worked with him and have no hesitation in recommending him to potential employers",
    avatar: Paul,
  },
  {
    name: "Adesanya Adejuwwon",
    position: "Director of IT @ MegaCorp",
    text: "I recommend Ayodeji Abidemi to anyone looking for a software developer with skills in HTML, CSS, JavaScript, React/Redux, Ruby, Ruby on Rails. while, also being an astute problem solver",
    avatar: Adesanya,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="What Developers Say About Me"
          eyebrow="Testimonials"
          description="Don't just take my word for it. See what other developers have to say about me."
        />
        <div
          className="mt-12 lg:mt-20 flex overflow-x-clip py-4 -my-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", // Add for WebKit
          }}
        >
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:80s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:p-8 md:max-w-md p-6 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm md:text-base md-mt-6">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
