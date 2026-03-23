export default function Button({ children, onClick, id, ...props }: { children: React.ReactNode, onClick: () => void, id?: string, props?: React.ButtonHTMLAttributes<HTMLButtonElement> }) {
    return (
        <button
            type="button"
            className="group relative px-10 py-4 font-sans font-bold text-lg text-white rounded-full bg-gradient-to-r from-[#CE7BB0] via-[#A267AC] to-[#6867AC] shadow-[0_10px_20px_-10px_#CE7BB0] hover:shadow-[0_20px_30px_-10px_#CE7BB0] hover:-translate-y-1 active:scale-95 transition-all duration-300 ease-out flex items-center gap-3 overflow-hidden"
            onClick={onClick}
            id={id}
            {...props}
        >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <i className="bx bx-envelope-open text-2xl group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative">{children}</span>
        </button>
    );
}