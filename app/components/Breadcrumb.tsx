"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const pathname = usePathname(); // e.g. "/services/black-magic"

  const pathSegments = pathname.split("/").filter(Boolean); // ["services", "black-magic"]

  const buildCrumbs = () => {
    const crumbs = [{ name: "Home", href: "/" }];
    let currentPath = "";

    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      crumbs.push({
        name: segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()),
        href: currentPath,
      });
    });

    return crumbs;
  };

  const crumbs = buildCrumbs();

  return (
    <nav className="mb-6 mt-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center text-lg font-semibold">
        {crumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center">
            <Link
              href={crumb.href}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#bfa76a] via-[#e7c873] to-[#7c6f57] hover:from-[#e7c873] hover:to-[#bfa76a] transition
                hover:underline hover:underline-offset-4 hover:decoration-[#bfa76a] drop-shadow"
            >
              {crumb.name}
            </Link>
            {i < crumbs.length - 1 && (
              <span className="mx-2 text-[#bfa76a] font-bold text-xl">›</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
