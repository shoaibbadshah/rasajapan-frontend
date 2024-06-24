// components/DropdownIcon.js
const DropdownIcon = ({ isOpen }) => (
    <svg
        className={`w-6 h-6 ml-2 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        fill="none"
        stroke="blue"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
);

export default DropdownIcon;
