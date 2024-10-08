'use client'

import { useState } from "react";
import { Button } from '@nextui-org/button';
import { Divider } from "@nextui-org/divider";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

export default function Home() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const videoUrls = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=E1xnB3GOtzfhHR8T",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=E1xnB3GOtzfhHR8T",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=E1xnB3GOtzfhHR8T",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=E1xnB3GOtzfhHR8T",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=E1xnB3GOtzfhHR8T",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=E1xnB3GOtzfhHR8T",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=E1xnB3GOtzfhHR8T",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=E1xnB3GOtzfhHR8T",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=E1xnB3GOtzfhHR8T",
    // Add more video URLs as needed
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10  bg-gradient-to-b from-neutral-900 to-black">
      <div className="flex flex-col w-full">
        <div className="text-left">
          <h1 className="text-white text-3xl font-bold">Paxz<span className=" font-light">dev.xyz</span></h1>
        </div>
        <Divider className="w-full dark mt-5" />
        <div className="flex flex-col md:flex-row w-full justify-center mt-5">
          <div className="md:w-1/2 mt-8">
            <h1 className="text-white text-4xl md:text-8xl font-normal">Hey, I'm <span className="font-bold">Paxz 👋</span></h1>
            <h1 className="text-white text-2xl md:text-4xl font-normal mt-10">I am a web developer with</h1>

            <div className="text-lg md:text-2xl">
              <h1 className="text-white font-normal mt-8">→ 3 years of experience</h1>
              <h1 className="text-white font-normal mt-1">→ an ambitious, strong passion</h1>
              <h1 className="text-white font-normal mt-1">→ in frontend, backend development</h1>
            </div>
            <div className="mt-6 space-x-4">
              <Button onPress={onOpen} size="lg" className="rounded-3xl font-bold dark bg-gradient-to-b from-neutral-900 to-black border border-gray-400 border-opacity-50">⠀ Contact Me ⠀</Button>
              <Modal className="dark text-white" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">Contact</ModalHeader>
                      <ModalBody>
                        <p> 
                          Contact me via Discord at <span className="font-bold underline">@paxzdev</span>
                          <br />
                          or
                          <br />
                          contact me via mail at <span className="font-bold underline">paxzgotbanned123@gmail.com</span>
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <p className="mr-auto text-xs text-gray-400">This is a temporary solution and will be updated soon.</p>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
            <h1 className="mt-4 text-white font-light"> • I have made a total of <a className="text-blue-500 font-normal" href="/projects"> 9 projects </a> for public to use <span className="inline-block align-middle pl-1"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"> <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" /> </svg> </span> </h1>
          </div>

          <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0">
            <div className="flex flex-col justify-center">
              <p className="text-white text-sm mb-2 font-bold">
                • One of my projects <span className="font-light">(Playing video {currentVideoIndex + 1}/{videoUrls.length})</span>
              </p>
              <div className="w-full flex justify-center">
                <div className="relative w-full pb-[50.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg border shadow-lg border-gray-400 border-opacity-50 "
                    src={videoUrls[currentVideoIndex]}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="flex mt-4 items-center">
                <Button variant="flat" className="mr-4 dark border border-gray-400 border-opacity-50" onClick={handleNextVideo}>Play Next Video →</Button>
                <Button variant="flat" className="dark border border-gray-400 border-opacity-50" onClick={handlePreviousVideo}>← Go Back</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full mb-4">
        <div className="flex flex-wrap justify-center w-full">
          {/* Other components go here */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-6">
        <Card className="bg-transparent w-full">
          <CardHeader>
            <h5 className="text-white text-3xl font-bold">
              <span className="block"># Skills</span>
            </h5>
          </CardHeader>
          <Divider className="w-full dark" />
          <CardBody>
            <p className="text-gray-300 text-sm">
              <span className="block">
                I am proficient in HTML, CSS, and JavaScript, and have experience with various frameworks and libraries such as Tailwind CSS, React, and Next.js. I am also familiar with version control systems like Git and have some experience working with databases and server-side technologies.
              </span>
            </p>
          </CardBody>
        </Card>
        <Card className="bg-transparent w-full">
          <CardHeader>
            <h5 className="text-white text-3xl font-bold">
              <span className="block"># Interests</span>
            </h5>
          </CardHeader>
          <Divider className="w-full dark" />
          <CardBody>
            <p className="text-gray-300 text-sm">
              <span className="block">
                When I'm not coding, I enjoy playing various sports, hanging out with friends, and more. I am also passionate about open source software and regularly contribute to various projects on GitHub.
              </span>
            </p>
          </CardBody>
        </Card>
        <Card className="bg-transparent w-full">
          <CardHeader>
            <h5 className="text-white text-3xl font-bold">
              <span className="block"># Background</span>
            </h5>
          </CardHeader>
          <Divider className="w-full dark" />
          <CardBody>
            <p className="text-gray-300 text-sm">
              <span className="block">
                I am a self-taught developer with a passion for creating beautiful and functional websites. I have been coding for over 3 years and have experience with a variety of technologies, including HTML, CSS, JavaScript, and various frameworks like Tailwind CSS, Astro.JS and Next.JS, ReactJS. I only do websites with React, Next and Tailwind CSS nowadays.
              </span>
            </p>
          </CardBody>
        </Card>
        <Card className="bg-transparent w-full">
          <CardHeader>
            <h5 className="text-white text-3xl font-bold">
              <span className="block"># Contact me</span>
            </h5>
          </CardHeader>
          <Divider className="w-full dark" />
          <CardBody>
            <p className="text-gray-300 text-sm">
              <span className="block">
                If you would like to get in touch, you can reach me on Discord at <span className="font-bold">@paxzdev</span> or by email at <span className="font-bold">paxzgotbanned123@gmail.com</span>.
              </span>
            </p>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
