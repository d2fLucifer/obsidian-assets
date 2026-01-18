import Link from "next/link";
import { ArrowRight, Check, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center border-b">
                <Link className="flex items-center justify-center" href="#">
                    <Code2 className="h-6 w-6 mr-2" />
                    <span className="font-bold text-xl">PlantUML Pro</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
                        Features
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
                        Pricing
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/workspaces">
                        Workspaces
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Diagrams at the Speed of Thought
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                                    The most scalable, collaborative, and intelligent PlantUML editor for enterprise teams.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
                                    <Link href="/workspaces">
                                        Start Diagramming
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="border-gray-800 bg-black text-white hover:bg-gray-800">
                                    <Link href="#pricing">
                                        View Pricing
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-black px-3 py-1 text-sm text-white">
                                    Scalable
                                </div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Built for Performance
                                </h2>
                                <Button asChild variant="default" className="bg-black text-white hover:bg-gray-900">
                                    <Link href="#">
                                        Read the Docs
                                    </Link>
                                </Button>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <div className="inline-block rounded-lg bg-black px-3 py-1 text-sm text-white">
                                    Secure
                                </div>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                                    Enterprise-grade security with SSO, Audit Logs, and On-premise deployment options.
                                    Your data never leaves your control.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Plans</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Choose the plan that fits your team's needs.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
                            {/* Free Tier */}
                            <Card className="flex flex-col shadow-lg border-gray-200 dark:border-gray-800">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-center">Free</CardTitle>
                                    <CardDescription className="text-center">
                                        <span className="text-4xl font-bold text-black dark:text-white">$0</span>/ month
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <Check className="text-green-500 mr-2 h-4 w-4" />
                                            Basic PlantUML Editing
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="text-green-500 mr-2 h-4 w-4" />
                                            Local Storage
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="text-green-500 mr-2 h-4 w-4" />
                                            PNG/SVG Export
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full bg-black text-white hover:bg-gray-900">
                                        <Link href="/workspaces">Get Started</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Pro Tier */}
                            <Card className="flex flex-col shadow-lg border-blue-500 relative">
                                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg">
                                    Popular
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-center">Pro</CardTitle>
                                    <CardDescription className="text-center">
                                        <span className="text-4xl font-bold text-black dark:text-white">$12</span>/ user / mo
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <Check className="text-green-500 mr-2 h-4 w-4" />
                                            Cloud Sync
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="text-green-500 mr-2 h-4 w-4" />
                                            Unlimited History
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="text-green-500 mr-2 h-4 w-4" />
                                            AI Copilot
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="text-green-500 mr-2 h-4 w-4" />
                                            High-Res Export (4K)
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                        <Link href="#">Upgrade to Pro</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Team Tier */}
                            <Card className="flex flex-col shadow-lg border-gray-200 dark:border-gray-800">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-center">Team</CardTitle>
                                    <CardDescription className="text-center">
                                        <span className="text-4xl font-bold text-black dark:text-white">$49</span>/ user / mo
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <Check className="text-green-500 mr-2 h-4 w-4" />
                                            Real-time Collaboration
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="text-green-500 mr-2 h-4 w-4" />
                                            SSO & SAML
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="text-green-500 mr-2 h-4 w-4" />
                                            Audit Logs
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="text-green-500 mr-2 h-4 w-4" />
                                            Priority Support
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full bg-black text-white hover:bg-gray-900">
                                        <Link href="#">Contact Sales</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 PlantUML Pro. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
