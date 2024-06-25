export function scrollToSection(id) {
    const section = document.getElementById(id);
    const headerHeight = document.querySelector("header").offsetHeight;
    if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: sectionTop - headerHeight,
            behavior: "smooth",
        });
    }
}

export function formatDate(dateString) {
    // Create a new Date object from the input date string
    const date = new Date(dateString);

    // Define an array of month names
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    // Get the day, month, and year from the Date object
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    // Return the formatted date string
    return `${day} ${month} ${year}`;
}

export function getParam({ params, url }) {
    const location = url;
    const searchParams = new URLSearchParams(location.search);

    const searchParam = (param) => {
        return searchParams.get(param) && !searchParams.get(param) !== ""
            ? searchParams.get(param)
            : null;
    };

    if (typeof params === "object") {
        let obj = {};

        params.forEach((param) => (obj[param] = searchParam(param)));

        return obj;
    } else {
        return searchParam(params);
    }
}

export const formatCurrency = (value) =>
    new Intl.NumberFormat("en", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);

export function ucfirst(str) {
    // Check if the string is empty
    if (str.length === 0) {
        return str;
    }
    // Convert the first character to uppercase and concatenate with the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
}
