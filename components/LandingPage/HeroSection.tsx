/* eslint-disable @next/next/no-img-element */
"use client"
import { ArrowRight, Github } from 'lucide-react';
import Link from "next/link";
import { BorderBeam } from "../magicui/border-beam";
import { Button } from "../ui/button";
import { AnimatedGradientTextComponent } from './AnimatedGradientComponent';
export default function HeroSection() {

    return (
        <div className='flex flex-col items-center justify-center leading-6'>
            <div className="my-5">
                <AnimatedGradientTextComponent />
            </div>
            <h1 className="scroll-m-20 text-4xl sm:text-4xl md:text-6xl font-semibold tracking-tight lg:text-7xl text-center max-w-[1120px] bg-gradient-to-b from-black to-gray-700/80 dark:from-white dark:to-slate-400 inline-block text-transparent bg-clip-text">
                Uma linha completa de segurança
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg text-center mt-2 dark:text-gray-400">
                Eleve o nível de proteção e elegância nas duas aventuras de duas rodas.
            </p>
            <div className="flex justify-center items-center gap-3">
                <Link href="/dashboard" className="mt-5">
                    <Button size="sm" className="animate-buttonheartbeat rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white">Get Started</Button>
                </Link>
                <Link href="/" target='_blank' className="mt-5">
                    <Button size="sm" variant="outline" className="flex gap-1 text-blue-600 hover:text-blue-600 hover:bg-blue-100">Join Discord<ArrowRight className='w-4 h-4' /></Button>
                </Link>
                <Link href="https://github.com/suman-3/Next-TechSatck" target='_blank' className='animate-buttonheartbeat border p-2 rounded-full mt-5 hover:dark:bg-black hover:cursor-pointer'>
                    <Github className='w-4 h-4' />
                </Link>
            </div>
            <div>
                <div className="relative flex max-w-6xl justify-center overflow-hidden mt-7">
                    <div className="relative rounded-xl">
                        <img
                            src="/banner.png"
                            alt="Hero Image"
                            className="block w-[1200px] rounded-[inherit] border object-contain shadow-lg dark:hidden"
                        />
                        <img
                            src="/banner.png"
                            alt="Hero Image"
                            className="dark:block w-[1200px] rounded-[inherit] border object-contain shadow-lg hidden"
                        />
                        <BorderBeam size={250} duration={12} delay={9} />
                    </div>
                </div>
            </div>

        </div>
    )
}
