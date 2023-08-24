const hasData = () => {
    const recoveredData = JSON.parse(localStorage.getItem("survey") || "{}");
    if (!Object.keys(recoveredData).length)
        return null;
    return recoveredData;
};
export const saveData = (data, page) => {
    const recoveredData = hasData();
    if (!recoverData || !page) {
        localStorage.setItem("survey", JSON.stringify(data));
        return;
    }
    localStorage.setItem("survey", JSON.stringify(Object.assign(Object.assign({}, recoveredData), { [page]: data })));
};
function recoverData(page) {
    const recoveredData = hasData();
    if (!recoveredData)
        return null;
    if (!page)
        return recoveredData;
    return recoveredData[page];
}
export function clearData(page) {
    const data = hasData();
    if (!data)
        return;
    delete data[page];
    saveData(data);
}
export { recoverData };
