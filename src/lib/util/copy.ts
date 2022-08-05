export default (value: string) => {
	return () => {
		navigator.clipboard.writeText(value);
	}
}
