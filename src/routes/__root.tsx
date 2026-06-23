import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { Navbar } from "@/components/varjay/Navbar";
import { Footer } from "@/components/varjay/Footer";
import { Floating } from "@/components/varjay/Floating";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0F1E] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-[#F4813A]">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-[#F9F3E8]">Page not found</h2>
        <p className="mt-2 text-sm text-[#F9F3E8]/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#17C8A3] px-6 py-3 text-sm font-bold text-[#0A0F1E] transition-all hover:bg-[#17C8A3]/80"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0F1E] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-[#F9F3E8]">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-[#F9F3E8]/70">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-[#F4813A] px-6 py-3 text-sm font-bold text-[#0A0F1E] transition-colors hover:bg-[#E8B84B]"
          >
            Try again
          </button>
          
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#5BB8E8]/30 bg-transparent px-6 py-3 text-sm font-bold text-[#5BB8E8] transition-colors hover:bg-[#5BB8E8]/10"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Varjay Music Academy" },
      { name: "description", content: "Varjay Music Academy's homepage showcases instrument stories with a premium, magazine-like design." },
      { name: "author", content: "Varjay" },
      { property: "og:title", content: "Varjay Music Academy" },
      { property: "og:description", content: "Varjay Music Academy's homepage showcases instrument stories with a premium, magazine-like design." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "https://i.ibb.co/NgF2TmRj/favicon.jpg", type: "image/jpeg" },
      { rel: "apple-touch-icon", href: "https://i.ibb.co/N6QGXyrD/android-chrome-512x512.png" },
      { rel: "icon", href: "https://i.ibb.co/N6QGXyrD/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0A0F1E] text-[#F9F3E8] selection:bg-[#F4813A] selection:text-[#0A0F1E] font-sans">
        <Navbar />
        <Outlet />
        <Footer />
        <Floating />
      </div>
    </QueryClientProvider>
  );
}
