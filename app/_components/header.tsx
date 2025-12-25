"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mainMenus, userMenus } from "@/constant";
import { cn } from "@/lib/utils";
import {
  IconArrowUpRight,
  IconBell,
  IconCubeSpark,
  IconLogout,
} from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const data = false;
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <header className="bg-background sticky top-0 z-50">
      <nav className="flex h-16 items-center justify-between gap-3 px-4">
        {/* logo section */}
        <Link href={"/"} className="-mt-0.5 block">
          <IconCubeSpark className="size-5" />
          <span className="sr-only">ebox</span>
        </Link>
        <div className="flex w-full max-w-[calc(50vw+410px)] items-center justify-between">
          {/* left section  */}
          <div>
            <div
              className={cn("flex items-center space-x-2 md:space-x-4", {
                hidden: !data,
              })}
            >
              {mainMenus.map((menu) => (
                <Link
                  href={menu.url}
                  className="text-muted-foreground hover:text-foreground flex items-center text-sm"
                  key={menu.label}
                >
                  <menu.icon className="mr-1 size-4" />
                  <span className="sr-only md:not-sr-only">{menu.label}</span>
                </Link>
              ))}
            </div>
          </div>
          {/* right section */}
          <div className="flex items-center gap-3">
            {/* current date, time and timezone display section */}
            <div className="text-muted-foreground hidden text-sm font-medium md:block">
              {currentTime?.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                timeZoneName: "short",
              })}
            </div>
            {/* login and explore events button section */}
            <div
              className={cn("flex items-center md:gap-1", {
                hidden: data,
              })}
            >
              <Button
                asChild
                className="hover:bg-background text-muted-foreground hover:text-foreground group gap-0.5 text-sm font-medium"
                variant={"ghost"}
              >
                <Link href={"/discover"}>
                  Explore Events
                  <IconArrowUpRight />
                </Link>
              </Button>
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:text-background h-9 rounded-2xl px-3 text-sm font-medium"
              >
                <Link href={"/signin"}>Sign In</Link>
              </Button>
            </div>
            {/* create events, search, notification, and user dropdown buttons */}
            <div
              className={cn("flex items-center gap-3", {
                hidden: !data,
              })}
            >
              {/* create event button */}
              <Link
                href={"/create"}
                className="text-muted-foreground hover:text-foreground text-sm font-medium"
              >
                Create Event
              </Link>
              {/* notification */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground cursor-pointer">
                  <IconBell className="size-4.5" />
                  <span className="sr-only">Notification</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-72">
                  <DropdownMenuItem>
                    <div className="space-y-1.5 px-2 py-10 text-center">
                      <h2 className="text-base font-medium">It's Quiet Here</h2>
                      <p className="text-sm">
                        Create an event and invite some friends.
                      </p>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* user buttons */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground cursor-pointer">
                  <Avatar className="size-6">
                    <AvatarImage src={"/avatar.svg"} alt="user" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-72">
                  <DropdownMenuLabel>
                    <h3 className="text-foreground text-base font-medium">
                      Hari Bahadur Shrestha
                    </h3>
                    <p className="text-muted-foreground truncate text-sm">
                      shresthapradhuman2018@gmail.com
                    </p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {userMenus.map((menu) => (
                    <DropdownMenuItem key={menu.label} asChild>
                      <Link href={menu.url}>
                        <menu.icon />
                        {menu.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  {userMenus.length > 0 && <DropdownMenuSeparator />}
                  <DropdownMenuItem>
                    <IconLogout />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
