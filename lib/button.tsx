'use client'
export default function Button() {

    const handleChangeTheme = () => {
        alert("Theme updated!");
    }

    return (
        <button
        onClick={handleChangeTheme}
        className="px-6 py-2 rounded-md bg-green-600 text-white font-semibold cursor-pointer mt-4 hover:bg-green-500 transition duration-300"
        >Change Theme</button>
    );
}