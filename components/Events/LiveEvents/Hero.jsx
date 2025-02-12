import React, { useState, useEffect } from "react";
import Image from "next/image";
import Event_error from "@/public/Event_error.svg";
import {
    MdDateRange,
    MdLocationPin,
    MdOutlineAccessTimeFilled
} from "react-icons/md";

// #202020 -> bg of info

const Hero = ({
    key,
    isActive,
    title,
    poster,
    date,
    location,
    registrationCloseTime,
    registrationLink,
    openRegisterDialogue
}) => {
    const Registration_Link = () => {
        console.log("UPCOMING EVENT BUTTON CLICKED", registrationLink);
        let newregistrationLink = registrationLink;
        if (
            !newregistrationLink.startsWith("http://") &&
            !newregistrationLink.startsWith("https://")
        ) {
            newregistrationLink = `https://${newregistrationLink}`;
        }
        window.open(newregistrationLink, "_blank");
    };

    const handleRegisterButtonClick = () => {
        console.log("Get Certificate button clicked");
        openRegisterDialogue();
    };

    // Calculate time left on the server-side
    const calculateTimeLeft = () => {
        const difference = new Date(registrationCloseTime) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minutes: Math.floor((difference / 1000 / 60) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval} className="mx-2">
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    const isRegistrationClosed = Object.keys(timeLeft).length === 0;

    if (isActive) {
        return (
            <div className="w-screen -translate-y-6 sm:-translate-y-20 p-5 sm:p-0 lg:mx-auto">
                <p className="pt-5 max-md:pb-1 max-md:text-2xl max-md:pt-1 pb-10 text-center font-extrabold font-poppins text-4xl text-white">
                    <span className="text-bright_green">Upcoming</span> Event
                </p>
                <div className="flex flex-col justify-center items-center md:flex-row xl:mx-48 gap-4 lg:gap-16">
                    <div className="relative group pt-4">
                        <div className="rounded-lg">
                            <img
                                src={poster}
                                alt="Upcoming Event"
                                className="rounded-lg w-[400px] sm:w-[526px]"
                            />
                        </div>
                        <h3 className="text-sm font-bold max-md:text-center text-white sm:text-xl py-4 max-md:hidden px-4 pl-0">
                            {title}
                        </h3>
                    </div>

                    {/* INFO */}
                    <div className="my-auto">
                        <div className="md:w-[447px] font-dmSans font-medium text-md sm:text-xl space-y-4 sm:space-y-8 text-white">
                            <div className="h-[60px] sm:h-20 lg:h-28 lg:w-[447px] w-full bg-event_gray rounded-lg flex justify-start items-center px-7">
                                <MdDateRange className="mr-4 size-[30px] sm:size-[40px] text-bright_green" />
                                <p>{date.split("T")[0].toUpperCase()}</p>
                            </div>

                            <div className="h-[60px] sm:h-20 lg:h-28  lg:w-[447px] bg-event_gray rounded-lg text-left flex items-center justify-start px-7">
                                <MdLocationPin className="mr-4 size-[40px] sm:size-[50px] text-bright_green" />
                                <p>{location.toUpperCase()}</p>
                            </div>

                            <div className="h-[60px] sm:h-20 lg:h-28  lg:w-[447px] w-full bg-event_gray rounded-lg text-center flex justify-start items-center px-7">
                                {timerComponents.length ? (
                                    <div className="flex justify-start items-center">
                                        <MdOutlineAccessTimeFilled className="mr-1 size-[30px] sm:size-[40px] text-bright_green" />
                                        {timerComponents}
                                    </div>
                                ) : (
                                    <span className="text-red-500">
                                        Registration closed
                                    </span>
                                )}
                            </div>
                            <button
                                onClick={!isRegistrationClosed ? handleRegisterButtonClick : null}
                                disabled={isRegistrationClosed}
                                className={`ml-auto filter font-dmSans font-semibold w-full rounded-lg p-3 sm:p-5 text-xl ${isRegistrationClosed
                                        ? "bg-gray-500 text-gray-200 cursor-not-allowed"
                                        : "bg-bright_green hover:bg-green-700 text-black"
                                    }`}
                            >
                                {isRegistrationClosed ? "Registration Closed" : "Register Now"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else
        return (
            <div className="w-screen flex flex-col font-dmSans justify-center items-center overflow-hidden">
                <div className="bg-event_gray py-16 px-14 rounded-lg sm:mb-12 lg:mb-16 w-5/6 flex flex-col items-center">
                    <div className="w-[180px] sm:w-[253px] sm:h-[253px]">
                        <Image
                            src="https://octodex.github.com/images/daftpunktocat-thomas.gif"
                            alt=""
                            width={253}
                            height={253}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="text-center mt-6 text-lg md:mt-8 lg:mt-10 md:text-2xl font-poppins xl:text-2xl text-white">
                        New Fun Events Coming soon....
                    </div>
                </div>
            </div>
        );
};

export default Hero;
