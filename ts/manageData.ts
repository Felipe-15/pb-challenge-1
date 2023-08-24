type Survey = {
  secondStep?: {
    inputRadio: {
      id: string; // Input radio id to find him back
      value: string;
    };
    select: number;
  };
  thirdStep?: {
    checkboxes: { value: string; id: string }[];
    select: number;
  }; // Same logic as above in the input radio, but with multiple values because it's checkbox now
  fourthStep?: {
    value: string;
  };
};

export type Pages = "secondStep" | "thirdStep" | "fourthStep";

const hasData = (): Survey | null => {
  const recoveredData = JSON.parse(localStorage.getItem("survey") || "{}");

  if (!Object.keys(recoveredData).length) return null;

  return recoveredData;
};

export const saveData = (
  data: Survey[keyof Survey] | Survey,
  page?: Pages
): void => {
  const recoveredData = hasData();

  if (!recoverData || !page) {
    localStorage.setItem("survey", JSON.stringify(data));
    return;
  }

  localStorage.setItem(
    "survey",
    JSON.stringify({ ...recoveredData, [page]: data })
  );
};

function recoverData(page?: "secondStep"): Survey["secondStep"] | null;
function recoverData(page?: "thirdStep"): Survey["thirdStep"] | null;
function recoverData(page?: "fourthStep"): Survey["fourthStep"] | null;
function recoverData(page?: undefined): Survey | null;

function recoverData(page?: Pages): Survey[keyof Survey] | Survey | null {
  const recoveredData = hasData();

  if (!recoveredData) return null;

  if (!page) return recoveredData;

  return recoveredData[page];
}

export function clearData(page: Pages) {
  const data = hasData();

  if (!data) return;

  delete data[page];

  saveData(data);
}

export { recoverData };
