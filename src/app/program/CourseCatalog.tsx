"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ClockIcon as Clock, MapPinIcon as MapPin, UserCircleIcon as User, ArrowRightIcon as ArrowRight, FileTextIcon as FileText, CalendarIcon as Calendar, CheckIcon as Check, MagnifyingGlassIcon as Search } from "@phosphor-icons/react/ssr";
import {
  COURSES,
  CourseCategory,
  DayOfWeek,
  CourseItem,
} from "@/data/permonicek";
import {
  useBooking,
  OpenBookingButton,
  OpenFlyerButton,
} from "@/components/booking/BookingContext";

interface CategoryOption {
  value: CourseCategory | "all";
  label: string;
}

const CATEGORIES: CategoryOption[] = [
  { value: "all", label: "Všechny kroužky" },
  { value: "deti", label: "Předškoláci a děti (3–7 let)" },
  { value: "rodice-s-detmi", label: "Rodiče s dětmi (1–3 roky)" },
  { value: "detska-skupina", label: "Dětská skupina" },
  { value: "dospeli-a-seniori", label: "Dospělí & ženy" },
];

const DAYS: ("all" | DayOfWeek)[] = [
  "all",
  "Pondělí",
  "Úterý",
  "Středa",
  "Čtvrtek",
  "Pátek",
];

export function CourseCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<
    CourseCategory | "all"
  >("all");
  const [selectedDay, setSelectedDay] = useState<"all" | DayOfWeek>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { openBooking } = useBooking();

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      // Category filter
      if (selectedCategory !== "all" && course.category !== selectedCategory) {
        return false;
      }
      // Day filter
      if (selectedDay !== "all" && !course.days.includes(selectedDay)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = course.title.toLowerCase().includes(q);
        const matchesSubtitle = course.subtitle.toLowerCase().includes(q);
        const matchesLecturer = course.lecturer.toLowerCase().includes(q);
        const matchesDesc = course.description.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSubtitle && !matchesLecturer && !matchesDesc) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedDay, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Filter and search bar */}
      <div className="bg-[#f4f5f7] rounded-3xl p-4 sm:p-6 space-y-4">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#111318] text-white shadow-xs"
                    : "bg-white text-[#3e4451] hover:text-[#111318] hover:bg-white/80"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Sub-filters: Day + Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-black/[0.06]">
          {/* Day pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
            <span className="text-xs font-semibold text-[#5a6170] mr-1 hidden sm:inline">
              Den:
            </span>
            {DAYS.map((day) => {
              const isActive = selectedDay === day;
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-[#52b5ed] text-[#0b1e2d] font-bold"
                      : "bg-white text-[#5a6170] hover:text-[#111318]"
                  }`}
                >
                  {day === "all" ? "Všechny dny" : day}
                </button>
              );
            })}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-4 h-4 text-[#5a6170] absolute left-3 top-1/2 -translate-y-1/2"  weight="duotone" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Hledat kroužek či lektora..."
              className="w-full pl-9 pr-3 py-2 rounded-full bg-white text-xs text-[#111318] placeholder-[#5a6170] border-none focus:outline-none focus:ring-2 focus:ring-[#0b6ca3]"
            />
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-[#5a6170] px-1">
        <span>
          Zobrazeno {filteredCourses.length}{" "}
          {filteredCourses.length === 1
            ? "kroužek"
            : filteredCourses.length < 5
            ? "kroužky"
            : "kroužků"}
        </span>
        {(selectedCategory !== "all" ||
          selectedDay !== "all" ||
          searchQuery) && (
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSelectedDay("all");
              setSearchQuery("");
            }}
            className="text-[#0b6ca3] font-bold hover:underline"
          >
            Obnovit filtry
          </button>
        )}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="group rounded-[32px] bg-[#f4f5f7] p-5 sm:p-7 flex flex-col justify-between hover:bg-[#eaecf0] transition-colors"
          >
            <div>
              {/* Photo */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white mb-5 shadow-xs">
                <Image
                  src={course.photo}
                  alt={course.photoAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />

                {course.freeTrial && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-[#fdd10a] text-[#111318] shadow-sm">
                      1. ukázková lekce zdarma
                    </span>
                  </div>
                )}

                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/95 text-[#111318] shadow-sm backdrop-blur-sm">
                    {course.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#111318] leading-tight">
                {course.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#0b6ca3] mt-1">
                {course.subtitle}
              </p>

              {/* Badges / Meta row */}
              <div className="mt-4 pt-3 border-t border-black/[0.06] space-y-1.5 text-xs text-[#3e4451]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#0b6ca3] shrink-0"  weight="duotone" aria-hidden="true" />
                  <span className="font-bold tabular-nums">
                    {course.days.join(", ")} · {course.time}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#5a6170] shrink-0"  weight="duotone" aria-hidden="true" />
                  <span>
                    <strong>Věk:</strong> {course.ageGroup} ·{" "}
                    <strong>Lektor:</strong> {course.lecturer}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#e24d2d] shrink-0"  weight="duotone" aria-hidden="true" />
                  <span>{course.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-[#3e4451] leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Bottom Actions and Pricing */}
            <div className="mt-6 pt-4 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-sm font-black text-[#111318] block tabular-nums">
                  {course.price}
                </span>
                {course.priceNote && (
                  <span className="text-[11px] text-[#5a6170] block leading-tight">
                    {course.priceNote}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {course.flyerImage && (
                  <OpenFlyerButton
                    flyer={{
                      src: course.flyerImage,
                      title: course.title,
                      subtitle: "Oficiální leták kroužku",
                    }}
                    className="p-2.5 rounded-full bg-white text-[#111318] hover:bg-[#eaecf0] transition-colors shadow-xs"
                    title="Zobrazit leták"
                  >
                    <FileText className="w-4 h-4 text-[#5a6170]"  weight="duotone" aria-hidden="true" />
                  </OpenFlyerButton>
                )}

                <button
                  type="button"
                  onClick={() =>
                    openBooking({
                      type: course.freeTrial
                        ? "ukazkova-lekce"
                        : course.category === "detska-skupina"
                        ? "detska-skupina"
                        : "ukazkova-lekce",
                      itemTitle: course.title,
                    })
                  }
                  className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-[#111318] text-white text-xs font-bold hover:bg-[#0b1e2d] transition-colors shadow-xs"
                >
                  <span>
                    {course.freeTrial
                      ? "Vyzkoušet zdarma"
                      : course.category === "detska-skupina"
                      ? "Zapsat se na čekačku"
                      : "Přihlásit se"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
