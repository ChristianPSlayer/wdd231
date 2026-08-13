export function formatTopic(preference) {
    return preference
        .replace("-", " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
}