
interface ButtonCustomProps {
    label: string;
}

export default function ButtonCustom({ label }: ButtonCustomProps) {
    return (
        <button class="buttonCustom" onClick={() => {
            window.location.href="/login";
        }}>
            <span class="text">{label}</span>
        </button>
    );
}
