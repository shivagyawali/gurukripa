import React, { useState } from 'react'
import GallerySection from '../../components/micro/about/GallerySection';

const About = () => {

  return (
    <main className="min-h-screen">
      <section className="md:container md:mx-auto mt-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="/img/image-1.jpg"
                      alt
                      className="w-full rounded-2xl transition ease-in-out delay-100 over:-translate-y-4 duration-200 hover:scale-110"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="/img/image-3.jpg"
                      alt
                      className="w-full rounded-2xl transition ease-in-out delay-100 over:-translate-y-4 duration-200 hover:scale-110"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative  my-4">
                    <img
                      src="/img/image-2.jpg"
                      alt
                      className="w-full rounded-2xl transition ease-in-out delay-100 over:-translate-y-4 duration-200 hover:scale-110"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#207398"
                        />
                        <circle
                          cx="16.3333"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#207398"
                        />
                        <circle
                          cx={31}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#207398"
                        />
                        <circle
                          cx="45.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#207398"
                        />
                        <circle
                          cx="60.3334"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#207398"
                        />
                        <circle
                          cx="88.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#207398"
                        />
                        <circle
                          cx="117.667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#207398"
                        />
                        <circle
                          cx="74.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#207398"
                        />
                        <circle
                          cx={103}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#207398"
                        />
                        <circle
                          cx={132}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#207398"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx={31}
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#207398"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#207398"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#207398"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#207398"
                        />
                        <circle
                          cx={103}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#207398"
                        />
                        <circle
                          cx={132}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#207398"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#207398"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#207398"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#207398"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#207398"
                        />
                        <circle
                          cx={31}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#207398"
                        />
                        <circle
                          cx={31}
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#207398"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#207398"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#207398"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#207398"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#207398"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#207398"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#207398"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#207398"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#207398"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#207398"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#207398"
                        />
                        <circle
                          cx={103}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#207398"
                        />
                        <circle
                          cx={103}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#207398"
                        />
                        <circle
                          cx={132}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#207398"
                        />
                        <circle
                          cx={132}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#207398"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#207398"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#207398"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx={31}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#207398"
                        />
                        <circle
                          cx={31}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#207398"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#207398"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#207398"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#207398"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#207398"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx={103}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#207398"
                        />
                        <circle
                          cx={103}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx={132}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#207398"
                        />
                        <circle
                          cx={132}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#207398"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#207398"
                        />
                        <circle
                          cx={31}
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx={31}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#207398"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#207398"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#207398"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#207398"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#207398"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#207398"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#207398"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#207398"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#207398"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#207398"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#207398"
                        />
                        <circle
                          cx={103}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#207398"
                        />
                        <circle
                          cx={103}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#207398"
                        />
                        <circle
                          cx={132}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#207398"
                        />
                        <circle
                          cx={132}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#207398"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="mb-2 block text-lg font-semibold text-brand">
                  Know us More
                </span>
                <h2 className="mb-8 text-3xl font-bold text-slate-900 sm:text-4xl">
                  About Guru Kripa Foundation
                </h2>
                <p className="mb-8 text-base text-gray-700 text-justify">
                  Guru Kripa Foundation, nestled in the spiritual heart of
                  Nepal, is more than an organization; it is a sanctuary for
                  spiritual seekers. Our programs are not just lessons; they are
                  sacred rites designed to unlock the dormant potential within
                  each individual.
                </p>
                <p className="mb-12 text-base text-gray-700 text-justify">
                  Rooted in ancient wisdom and adapted for the modern seeker,
                  our foundation stands as a testament to the timeless journey
                  of spiritual growth. Join us at Guru Kripa Foundation and
                  become part of a community that cherishes spiritual awakening,
                  growth, and the pursuit of divine wisdom. Enroll in our
                  transformative programs, and let the journey of a lifetime
                  begin.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div
        x-data="{ videoOpen: false}"
        className="md:container md:mx-auto mt-16"
      >
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-3xl text-brand font-bold md:text-4xl">
              Our reputation is built on creating great outcomes for clients.
            </h2>
            <p className="mt-6 text-gray-700 font-bold leading-6 text-justify">
              Good client fit is important to us. In order to forge the best
              relationships, we like to take some time to get to know you. It’s
              part of our process. Our collaborative approach means that we
              forge a working partnership that ensures we are on the same page
              and working together to achieve your objectives.
            </p>
            <p className="mt-4  text-gray-700 font-bold leading-6 text-justify">
              We work with marketing and comms teams and agencies for
              organizations including, businesses, not-for-profits, schools,
              IWI, government and retailers. The one thing they all have in
              common; we help them to succeed online.
            </p>
          </div>
          <div className="md:5/12 lg:w-5/12 items-center justify-center bg-brand bg-opacity-90 rounded-2xl">
            <div className="relative  h-[300px] overflow-hidden rounded-lg md:h-[450px]">
              <div className="absolute top-0 left-0 md:5/12 lg:w-5/12">
                <img
                  src="/img/video.png"
                  alt="image"
                  className="md:5/12 lg:w-5/12 object-cover object-center"
                />
              </div>
              <div className="absolute top-0 left-0  flex h-full w-full items-center justify-center bg-brand bg-opacity-90">
                <a
                  href="javascript:void(0)"
                  onClick={() => setVideoOpen(true)}
                  className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary md:h-[100px] md:w-[100px]"
                >
                  <span className="absolute top-0 right-0  h-full w-full animate-ping rounded-full bg-white bg-opacity-20 delay-300 duration-1000" />
                  <svg
                    width={23}
                    height={27}
                    viewBox="0 0 23 27"
                    className="fill-current"
                  >
                    <path d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z" />
                  </svg>
                </a>
              </div>
              <div
                x-show="videoOpen"
                x-transition
                className="fixed top-0 left-0 flex h-screen w-full items-center justify-center bg-gray-500 bg-opacity-70"
              >
                <div
                  onClick={() => setVideoOpen(false)}
                  className="mx-auto w-full max-w-[750px] bg-white"
                >
                  <iframe
                    src="./videos/API Logo Animation 10 sec 2.mp4"
                    className="h-[420px] w-full"
                    allow="autoplay"
                  />
                </div>
                <button
                  onClick={() => setVideoOpen(false)}
                  className="absolute top-0 right-0 flex h-20 w-20 cursor-pointer items-center justify-center text-body-color text-subbrand  hover:bg-brand"
                >
                  <svg viewBox="0 0 16 15" className="h-8 w-8 fill-current">
                    <path d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z" />
                  </svg>
                </button>
              </div>
              <div>
                <span className="absolute top-4 left-4 ">
                 
                </span>
                <span className="absolute bottom-4 right-4 ">
                  
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <GallerySection />

      {/* <section className="md:container md:mx-auto mt-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="mb-2 block text-lg font-semibold text-brand">
                  Billboard Advertising
                </span>
                <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-[40px]">
                  Advantages Of Billboard Advertising
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg border shadow-md">
          <div>
            <div className="p-4 rounded-lg md:p-8 bg-gray-800">
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-subbrand dark:text-white">
                It helps reach the target audience
              </h2>
              <p className="mb-3 text-base text-gray-300 text-justify">
                Billboard advertisements make it simple to target a specific
                local audience. With today’s technology, you can develop a
                demographic breakdown to demonstrate where the bulk of your
                target audience visits and then place your billboards where this
                specific group will see them.
              </p>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-subbrand dark:text-white">
                Billboards are huge and eye-catching
              </h2>
              <p className="mb-3 text-base text-gray-300 text-justify">
                Billboards occupy a significant space and can be catchy if
                designed by skilled marketers. A good billboard may make a
                prospect stop and view it intentionally or unintentionally.
              </p>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-subbrand dark:text-white">
                It provides an incentive for impulse purchases:
              </h2>
              <p className="mb-3 text-base text-gray-300 text-justify">
                One of the reasons why billboards are still in use is that they
                have the ability to influence and inspire customers to make
                immediate purchases. Your key viewers are your decision-makers.
                So, if you can connect into their minds through your billboard,
                they will swarm to your shop and make a purchase. For instance,
                when you’re on a road trip with your friends and if you see a
                billboard with enticing pizza, it will make you want to stop and
                eat. It wasn’t intentional, yet you can’t help but stop and eat
                because of a billboard cleverly placed near a cafeteria.
              </p>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-subbrand dark:text-white">
                It ensures brand exposure and brand recall :
              </h2>
              <p className="mb-3 text-base text-gray-300 text-justify">
                Billboards are extremely effective at generating and increasing
                brand awareness. It is because the ad is always visible – no
                other medium allows your message to be seen 24 hours a day,
                seven days a week. Take a look at some of the billboard
                advertisements you see on your everyday commute. You’ve probably
                memorized some of them because you’re exposed to them daily. So,
                if your company uses visuals or slogans that are catchy, clever,
                or memorable, potential customers might learn a lot about your
                company by looking at it. They’ll remember your billboard ad
                later when they need your product or service.
              </p>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-subbrand dark:text-white">
                Billboards appeal to all ages :
              </h2>
              <p className="mb-3 text-base text-gray-300 text-justify">
                Unlike other forms of advertising, billboards can be used to
                target all ages alike – be it children or adults.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}

export default About