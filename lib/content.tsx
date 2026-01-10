import Button from "./button";

export default function Content() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
            <div className="text-center">
            <h1 className="text-2xl font-bold">Next.js + Tailwind CSS Theme</h1>
            <Button/>
            </div>
        </div>
    );
}