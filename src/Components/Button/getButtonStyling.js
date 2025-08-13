// getButtonStyling.js
// This function returns the appropriate button styling based on the styleType provided
function getButtonStyling(styleType) {
    switch (styleType) {
        case 'primary':
            return 'bg-blue-500 text-white hover:bg-blue-700';
        case 'secondary':
            return 'bg-gray-500 text-white hover:bg-gray-700';
        case 'success':
            return 'bg-green-500 text-white hover:bg-green-700';
        case 'error':
            return 'bg-red-500 text-white hover:bg-red-700';
        case 'warning':
            return 'bg-yellow-500 text-black hover:bg-yellow-700';
        default:
            return '';
    }
}
export default getButtonStyling;