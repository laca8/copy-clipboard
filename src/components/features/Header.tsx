

import { Button } from "../../components/ui/button"

import { Sheet, SheetTrigger, SheetContent } from "../../components/ui/sheet"

export default function Component() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-zinc-950 dark:border-gray-800 dark:bg-gray-950">
            <div className="container mx-auto flex h-16  items-center justify-between px-4 md:px-6">
                <a href="/" className="flex items-center gap-2" >
                    <MountainIcon className="h-6 w-6 text-white" />

                </a>
                <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                    <a
                        href="/"
                        className="text-gray-50 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-50"

                    >
                        Projects
                    </a>
                    <a
                        href="/back"
                        className="text-gray-50 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-50"

                    >
                        Backend
                    </a>
                    <a
                        href="/front"
                        className="text-gray-50 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-50"

                    >
                        Frontend
                    </a>
                    <a
                        href="/deploy"
                        className="text-gray-50 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-50"

                    >
                        Deployment
                    </a>

                </nav>
                <div className="flex items-center gap-4">


                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full md:hidden">
                                <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="md:hidden">
                            <div className="grid gap-4 p-4">
                                <a
                                    href="/back"
                                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"

                                >
                                    Backend
                                </a>
                                <a
                                    href="/front"
                                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"

                                >
                                    Frontend
                                </a>
                                <a
                                    href="/deploy"
                                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"

                                >
                                    Deployment
                                </a>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}





function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}

