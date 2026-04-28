const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Ari Johan Alvarado Fausto.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
