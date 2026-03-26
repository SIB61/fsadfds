import { useState } from "react";
import { encodeName } from "~/components/WelcomeModal";

export default function Invite() {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [toast, setToast] = useState<{ show: boolean; message: string }>({
        show: false,
        message: "",
    });

    const triggerToast = (message: string) => {
        setToast({ show: true, message });
        setTimeout(() => setToast({ show: false, message: "" }), 3000);
    };

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name) return;
        const encoded = encodeName(name);
        const domain = window.location.origin;
        // The user suggested /to={encoded value} but the app reads from ?to search param
        // However, if they want it literally I'll stick to search param for functionality
        // but I can also support the path rewrite if they have one. 
        // Given WelcomeModal.tsx was changed to decodeName(recipient) where 
        // recipient = searchParams.get("to"), I will use ?to=
        setUrl(`${domain}/?to=${encoded}`);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        triggerToast("Link copied to clipboard!");
    };

    return (
        <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center p-6">
            <div className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-2xl border border-[#F2D4E7]/30">
                <h1 className="text-4xl font-head font-bold text-gray-800 text-center mb-4">
                    Wedding Invitation
                </h1>
                <p className="text-gray-500 font-sans text-center mb-10">
                    Generate a personalized link for your guests
                </p>

                <form onSubmit={handleGenerate} className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-600 font-sans mb-2 pl-1"
                        >
                            Guest Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. John & Mary"
                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#CE7BB0] outline-none transition-all font-sans bg-[#F9F9F9]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-[#CE7BB0] hover:bg-[#A267AC] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-[#CE7BB0]/30 font-sans flex items-center justify-center gap-2"
                    >
                        <i className="bx bx-link-alt text-xl" />
                        Generate Invitation Link
                    </button>
                </form>

                {url && (
                    <div className="mt-12 pt-8 border-t border-dashed border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-lg font-bold text-gray-700 font-head mb-4">
                            Your Link is Ready!
                        </h3>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex-1 bg-[#F9F9F9] p-4 rounded-xl border border-gray-100 font-mono text-xs text-gray-600 break-all select-all">
                                {url}
                            </div>
                            <button
                                onClick={handleCopy}
                                className="p-4 bg-white border-2 border-gray-100 rounded-xl hover:border-[#CE7BB0] hover:text-[#CE7BB0] transition-all group"
                                title="Copy to clipboard"
                            >
                                <i className="bx bx-copy text-xl group-active:scale-90 transition-transform" />
                            </button>
                        </div>

                        <div className="mt-8 pt-8 border-t border-dashed border-gray-200">
                            <h3 className="text-lg font-bold text-gray-700 font-head mb-4">
                                Full Invitation Message
                            </h3>
                            <div className="relative group">
                                <textarea
                                    readOnly
                                    value={`Hi ${name}, we're getting married! We'd love for you to join us. View our invitation here: ${url}`}
                                    className="w-full h-32 px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#CE7BB0] bg-[#F9F9F9] font-sans text-sm text-gray-600 resize-none outline-none"
                                />
                                <button
                                    onClick={() => {
                                        const text = `Hi ${name}, we're getting married! We'd love for you to join us. View our invitation here: ${url}`;
                                        navigator.clipboard.writeText(text);
                                        triggerToast("Invitation message copied!");
                                    }}
                                    className="absolute bottom-4 right-4 p-3 bg-white border-2 border-gray-100 rounded-xl hover:border-[#CE7BB0] hover:text-[#CE7BB0] transition-all shadow-sm"
                                    title="Copy full message"
                                >
                                    <i className="bx bx-copy text-lg" />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 mt-8">
                            <a
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full py-3 text-center text-[#CE7BB0] font-bold border-2 border-[#CE7BB0] rounded-xl hover:bg-[#CE7BB0] hover:text-white transition-all font-sans"
                            >
                                Preview Invitation
                            </a>
                            <button
                                onClick={() => {
                                    const text = `Hi ${name}, we're getting married! We'd love for you to join us. View our invitation here: ${url}`;
                                    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                                }}
                                className="w-full py-3 text-center text-[#25D366] font-bold border-2 border-[#25D366] rounded-xl hover:bg-[#25D366] hover:text-white transition-all font-sans flex items-center justify-center gap-2"
                            >
                                <i className="bx bxl-whatsapp text-xl" />
                                Share on WhatsApp
                            </button>
                        </div>
                    </div>
                )}

                {toast.show && (
                    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-[#CE7BB0]/90 backdrop-blur-md text-white px-8 py-4 rounded-2xl shadow-[0_20px_50px_rgba(206,123,176,0.3)] animate-in fade-in slide-in-from-bottom-10 duration-500 z-50 flex items-center gap-3 border border-white/20">
                        <i className="bx bx-check-circle text-2xl animate-bounce" />
                        <span className="font-sans font-bold tracking-wide italic">{toast.message}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
