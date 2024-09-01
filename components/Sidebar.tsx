'use client'
import { sidebarLinks } from "@/constants";
import { link } from "fs";
import { Section } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({user}: SiderbarProps) => {
    const pathname = usePathname();
  return (
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
            <link rel="stylesheet" href="/" className="mb-12 cursor-pointer flex items-center gap-2">
                <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon logo" className="size-[24px] max-xl:size-14" >
                </Image>
                <h1 className="sidebar-logo">Horizon</h1>
            </link>
            
            {sidebarLinks.map((item)
            => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
                    <link href={item.route} key={item.label} className={cn('sidebar-link',{'bg-bank-gradient': isActive})}>

                        <div className="relative size-6">
                            <Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] invert-0: isActive'})}/>   
                        </div>
                        <p className={cn('sidebar-label',{'!text-white': isActive})}>
                            {item.label}
                        </p>
                    </link> 
                )
            }
        )
         }
        </nav>
    </section>
  )
};

export default Sidebar;
