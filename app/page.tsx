"use client";

import { TextLoop } from "@/components/ui/text-loop";
import {
    MorphingDialog,
    MorphingDialogContainer,
    MorphingDialogContent,
    MorphingDialogImage,
    MorphingDialogSubtitle,
    MorphingDialogTitle,
    MorphingDialogTrigger,
} from "@/components/ui/morphing-dialog";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import Instagram from "@/components/native/Instagram";
import Github from "@/components/native/Github";
import {
    C,
    CPP,
    Go,
    Java,
    Javascript,
    PostgreSQL,
    Python,
} from "@/components/native/Languages";
import DashboardBlob from "@/components/native/DashboardBlob";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col w-full h-screen items-center justify-center text-gray-800 overflow-hidden bg-gray-200">

            <DashboardBlob />

            <div className="w-full flex flex-col">
                <div className="relative flex flex-col w-full items-center justify-center gap-8 h-full">
                    <h1 className="z-40 flex items-center gap-8 text-[72px] font-semibold [text-shadow:_0_4px_10px_rgb(31_41_55/40%)] backdrop-blur-sm px-4 select-none">
                        Hey! I&apos;m a{" "}
                        <TextLoop interval={2.5} className="fill-gray-800">
                            <C className="size-[72px]" />
                            <CPP className="size-[72px]" />
                            <Python className="size-[72px]" />
                            <Java className="size-[72px]" />
                            <Javascript className="size-[72px]" />
                            <Go className="size-[72px]" />
                            <PostgreSQL className="size-[72px]" />
                        </TextLoop>{" "}
                        Developer
                    </h1>
                    <MorphingDialog
                        transition={{
                            type: "spring",
                            bounce: 0.05,
                            duration: 0.25,
                        }}
                    >
                        <MorphingDialogTrigger
                            style={{
                                borderRadius: "8px",
                            }}
                            className="border border-gray-700 bg-gray-800 backdrop-blur-md hover:bg-gray-700 shadow-lg z-40"
                        >
                            <div className="flex items-center space-x-3 p-3">
                                <MorphingDialogImage
                                    src="/avatar/profilepicture.jpg"
                                    alt="Profile Picture"
                                    className="h-8 w-8 object-cover object-top rounded-full border border-gray-400"
                                />
                                <div className="flex flex-col items-start justify-center space-y-0">
                                    <MorphingDialogTitle className="text-[10px] font-medium text-gray-200 sm:text-xs">
                                        Computer Engineer @ UCSC
                                    </MorphingDialogTitle>
                                    <MorphingDialogSubtitle className="text-[10px] text-gray-400 sm:text-xs">
                                        Samarth Shastry
                                    </MorphingDialogSubtitle>
                                </div>
                            </div>
                        </MorphingDialogTrigger>
                        <MorphingDialogContainer>
                            <MorphingDialogContent
                                style={{
                                    borderRadius: "12px",
                                }}
                                className="relative h-auto w-[500px] border bg-gray-800 border-gray-700 backdrop-blur-md"
                            >
                                <div className="flex p-2">
                                    <MorphingDialogImage
                                        src="/avatar/profilepicture.jpg"
                                        alt="Profile Picture"
                                        className="w-[200px] aspect-square object-cover object-top rounded-lg"
                                    />
                                    <div className="relative p-4">
                                        <MorphingDialogTitle className="text-gray-200 font-semibold text-lg">
                                            Computer Engineer @ UCSC
                                        </MorphingDialogTitle>
                                        <MorphingDialogSubtitle className="font-light text-gray-200">
                                            Samarth Shastry
                                        </MorphingDialogSubtitle>
                                        <div className="flex gap-2 mt-6">
                                            <Button
                                                variant={"outline"}
                                                size={"icon"}
                                                className="bg-gray-700 border-gray-600 hover:bg-gray-600"
                                                asChild
                                            >
                                                <a
                                                    href="https://www.linkedin.com/in/samarth-shastry-825514254"
                                                    target="_blank"
                                                >
                                                    <Linkedin className="stroke-white" />
                                                </a>
                                            </Button>
                                            <Button
                                                variant={"outline"}
                                                size={"icon"}
                                                asChild
                                                className="bg-gray-700 border-gray-600 hover:bg-gray-600"
                                            >
                                                <a
                                                    href="https://github.com/GitYACC"
                                                    target="_blank"
                                                >
                                                    <Github className="fill-white" />
                                                </a>
                                            </Button>
                                            <Button
                                                variant={"outline"}
                                                size={"icon"}
                                                asChild
                                                className="bg-gray-700 border-gray-600 hover:bg-gray-600"
                                            >
                                                <a
                                                    href="https://www.instagram.com/samarthshastry/"
                                                    target="_blank"
                                                >
                                                    <Instagram className="fill-white" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </MorphingDialogContent>
                        </MorphingDialogContainer>
                    </MorphingDialog>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-16 h-52 items-center justify-center mt-24 w-[60rem] z-40">
                <a className="relative rounded-lg overflow-hidden h-full shadow-lg" href="https://github.com/GitYACC/DBA-ESPN" target="_blank">
                    <Image src="/dba-logo.png" alt="dba-logo" width={1000} height={0} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800"/>
                    <div className="absolute bottom-0 flex flex-col px-6 py-4">
                        <span className="font-medium text-white">DBA ESPN</span>
                        <span className="text-xs text-gray-400">Pickup Game Stats Tracker</span>
                    </div>
                </a>
                <a className="relative rounded-lg overflow-hidden h-full shadow-lg" href="https://github.com/kjeelani/ada.ai" target="_blank">
                    <Image src="/ada-lovelace.jpeg" alt="ada-lovelace" width={1000} height={0} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800"/>
                    <div className="absolute bottom-0 flex flex-col px-6 py-4">
                        <span className="font-medium text-white">ADA.ai</span>
                        <span className="text-xs text-gray-400">LLM Based API Documentation</span>
                    </div>
                </a>
                <a className="relative rounded-lg overflow-hidden h-full shadow-lg" href="https://github.com/GitYACC/Banking-App" target="_blank">
                    <Image src="/bank-saas.png" alt="bank-saas" width={1000} height={0} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800"/>
                    <div className="absolute bottom-0 flex flex-col px-6 py-4">
                        <span className="font-medium text-white">Banking SAAS App</span>
                        <span className="text-xs text-gray-400">Stripe/Dwolla Based Banking SAAS</span>
                    </div>
                </a>
            </div>
        </main>
    );
}
