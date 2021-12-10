const underline = "__";
const strikethrough = "~~";
const italic = "*";
const bold = "**";
const GenMDOptionsDefault: GenMDOptions = {
  underline: false,
  strikethrough: false,
  italic: false,
  bold: false,
};
const edits: { [key: string]: string } = {
  underline,
  strikethrough,
  italic,
  bold,
};
function reverseString(str: string) {
  return str.split("").reverse().join("");
}
export interface FDobject {
  name: string;
  value: string;
}
export interface FDoptions {
  separator?: string;
  nameEdits?: GenMDOptions;
  valueEdits?: GenMDOptions;
}
export interface GenMDOptions {
  underline?: boolean;
  strikethrough?: boolean;
  italic?: boolean;
  bold?: boolean;
}
export function GenMD(
  text: string,
  options: GenMDOptions = GenMDOptionsDefault
): string {
  const sep = Object.keys(pickBy(options))
    .map((value) => edits[value])
    .join("");
  return sep + text + reverseString(sep);
}
function pickBy(object: Record<string, any>) {
  const obj: Record<string, any> = {};
  for (const key in object) {
    if (object[key]) {
      obj[key] = object[key];
    }
  }
  return obj;
}
export function FD(
  values: FDobject[],
  options: FDoptions = {
    nameEdits: GenMDOptionsDefault,
    valueEdits: GenMDOptionsDefault,
  }
): string {
  const { separator, nameEdits, valueEdits } = options;
  return values
    .map(({ name, value }) => {
      return (
        GenMD(name, nameEdits) +
        (separator ? separator : ":") +
        " " +
        GenMD(value, valueEdits)
      );
    })
    .join("\n");
}
