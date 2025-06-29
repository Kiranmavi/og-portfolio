"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import RiseOnScroll from "./ui/RiseOnScroll";

const testimonials = [
  {
    text: "kiran did a great job as our Developer and helped build our product from the ground up. She was a great asset to our team and we look forward to working with her again in the future.",
    imageSrc: "/veract.png",
    name: "Peter Ponton",
    username: "CEO, Veract Consultancy Private Limited",
    bgColor: "bg-pink-100",
  },
  {
    text: "It has been a pleasure working with Kiran on the development of our Swarna Silver website. From the very beginning, Kiran demonstrated exceptional technical expertise, professionalism, and a deep understanding of our unique needs as a silver jewellery brand. He brought our vision to life with a sleek, user-friendly, and performance-optimized website that reflects both elegance and functionality.Kiran was proactive in suggesting improvements, extremely responsive to feedback, and always met deadlines with dedication and attention to detail. His ability to combine design aesthetics with robust backend functionality truly set our site apart.Thanks to Kiran’s hard work, our customers now enjoy a seamless online shopping experience, and our team has a reliable, scalable platform to grow our digital presence.We are incredibly grateful for Kiran’s contribution and would highly recommend him to anyone looking for a talented and reliable web developer.",
    imageSrc: "/new-square-pink.png",
    name: "Kaushik Chandrasekar",
    username: "CEO, Swarna silvers",
    bgColor: "bg-indigo-100",
  },
  {
    text: "I love your Chatbot ZeejAI and the way it responds.",
    imageSrc: "/new-circle-pink.png",
    name: "Sarvana kumar",
    username: "Sr. software Engineer,Veract",
    bgColor: "bg-blue-100",
  },
  {
    text: "Working with Kiran for a year was one of the most genuinely enjoyable experiences of my professional journey. Beyond his solid skills as a software engineer, what really made him stand out was his calm demeanor, kind nature, and thoughtful approach to every situation. He has this quiet confidence that puts everyone at ease, and he’s always the first to lend a hand or lift the team’s spirit when things get tough. Kiran doesn’t just write good code—he brings warmth and positivity into the workspace, and that’s something you don’t come across often. I'm truly grateful for the time we shared as teammates.",
    imageSrc: "/new-square-pink.png",
    name: "Ekesh R",
    username: "Software Engineer, Veract",
    bgColor: "bg-purple-100",
  },
  {
    text: "I’ve had the privilege of working closely with Kiran as a software engineer, and their technical skillset, problem-solving ability, and professionalism are truly exceptional. He consistently delivers high-quality, scalable code with efficiency and precision. He is always ready to lend a hand, mentor junior team members, and contribute thoughtful ideas during discussions.",
    imageSrc: "/new-donut-pink.png",
    name: "Sruthi C",
    username: "Software Engineer, Veract",
    bgColor: "bg-yellow-100",
  },
  {
    text: "Kiran is a great front-end developer who really loves what he does. He is always happy, friendly, and fun to work with. He is curious and always ready to learn new things. Kiran works hard to make websites look good and easy to use. It's really nice to have him as a friend and teammate.",
    imageSrc: "/new-spiral-pink.png",
    name: "Shiva Shankar",
    username: "Software Engineer, Veract",
    bgColor: "bg-green-100",
  },
  {
    text: "Kiran is a great front-end developer who really loves what he does. He is always happy, friendly, and fun to work with. He is curious and always ready to learn new things. Kiran works hard to make websites look good and easy to use. It's really nice to have him as a friend and teammate.",
    imageSrc: "/new-spiral-pink.png",
    name: "Shiva Shankar",
    username: "Software Engineer, Veract",
    bgColor: "bg-green-100",
  },
  {
    text: "I love your Chatbot ZeejAI and the way it responds.",
    imageSrc: "/new-circle-pink.png",
    name: "Sarvana kumar",
    username: "Sr. software Engineer,Veract",
    bgColor: "bg-blue-100",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const isMobile = props.className?.includes('md:hidden');

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <div className={props.className}>
      <motion.div
        animate={shouldAnimate ? {
          translateY: isMobile ? "-33.33%" : "-50%",
        } : { translateY: "0%" }}
        initial={{ translateY: "0%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(isMobile ? 4 : 2)].fill(0).map((_, outerIndex) => (
          <React.Fragment key={`column-${outerIndex}`}>
            {props.testimonials.map(({ text, imageSrc, name, username, bgColor }, innerIndex) => (
              <div key={`testimonial-${outerIndex}-${innerIndex}-${name}`} className="card">
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <div className={`relative h-10 w-10 rounded-full ${bgColor} flex items-center justify-center overflow-hidden`}>
                    <Image
                      src={imageSrc}
                      alt={name}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white mb-9">
      <div className="container">
        <div className="section-heading mb-24">
          <RiseOnScroll delay={0.2}>
            <h1 className="heading text-black-100 mt-20">
              What Others{" "}
              <span className="text-purple">Say</span>
            </h1>
          </RiseOnScroll>

          <RiseOnScroll delay={0.3}>
            <p className="section-description mt-5">
              From people I have worked with, supervisors, mentors and users of my projects.
            </p>
          </RiseOnScroll>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={testimonials} duration={45} className="md:hidden" />
          <TestimonialsColumn testimonials={firstColumn} duration={15} className="hidden md:block" />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
