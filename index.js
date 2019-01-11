export default function round (value) {
	if (value >= 0)
        return Math.round(value)

    return (value % 0.5 === 0) ? Math.floor(value) : Math.round(value)
}
