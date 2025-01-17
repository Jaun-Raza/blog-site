import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-purple-950 text-white">
            {/* Call-to-Action Section */}
            <div className="bg-purple-600 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Stay Connected</h2>
                    <p className="text-gray-200 mb-6">
                        Subscribe to our newsletter for the latest updates and blog posts.
                    </p>
                    <form className="flex justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full max-w-md px-4 py-2 rounded-md bg- text-white border-2 border-purple-900 focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-purple-900 rounded-md hover:bg-purple-950 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Main Content */}
            <div className="py-10 border-t border-purple-800 flex justify-center">
                <div className="text-center md:w-2/3">
                    <h3 className="text-xl font-semibold mb-2">About Us</h3>
                    <p className="text-gray-400 sm">
                        Welcome to our blog. Our blog dives into the latest in technology, artificial intelligence, and robotics. From groundbreaking advancements to insightful analyses, we’re here to keep you informed and inspired in this fast-evolving digital age.
                    </p>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-purple-600 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-300 text-sm">
                        &copy; {new Date().getFullYear()} Jaun Dev. All rights reserved.
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                        <Link href="/privacy-policy">
                            Privacy Policy
                        </Link>{" "}
                        |{" "}
                        <Link href="/terms">
                            Terms of Use
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;