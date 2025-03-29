"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Move left
  const handleScrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft -= 200; // Move left by 200px
    }
  };

  // Move right
  const handleScrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft += 200; // Move right by 200px
    }
  };

  return (
    <div className="relative flex items-center w-full">
      {/* Scroll Left Button */}
      <button
        onClick={handleScrollLeft}
        type="button"
        className="absolute left-0 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md border border-primary text-primary hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Scrollable Tabs Container */}
      <div
        ref={scrollContainerRef}
        className="flex-grow overflow-x-scroll scrollbar-hide px-10 scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <TabsPrimitive.List
          ref={ref}
          className={cn(
            "inline-flex items-center justify-start space-x-2 min-w-max",
            className
          )}
          {...props}
        />
      </div>

      {/* Scroll Right Button */}
      <button
        onClick={handleScrollRight}
        type="button"
        className="absolute right-0 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md border border-primary text-primary hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 shadow-sm",
      "data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:border-primary",
      "hover:bg-gray-50 hover:text-primary",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
