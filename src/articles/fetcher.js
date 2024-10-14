import fs from "fs";

const baseDir = "src/pages/articles";
const extractDecralation = (source, cond) => {
  const line = source.split("\n").find((line) => line.startsWith(cond));
  return line.split(" = ")[1].replaceAll("\"``", "").replaceAll("\"", "").replaceAll(";", "").trim();

}
const extractTitle = (source) => extractDecralation(source, "const title");
const extractBody = (source) => extractDecralation(source, "const description");
const extractThumbnail = (source) => extractDecralation(source, "const thumbnail");
const labels = (source) => extractDecralation(source, "const labels")
  .replace("[", "")
  .replace("]", "")
  .split(",")
  .map((label) => label.trim());
const buildBlog = (year, month, day, file) => {
  const path = `${baseDir}/${year}/${month}/${day}/${file}`;
  const source = fs.readFileSync(path, "utf-8");
  return {
    title: extractTitle(source),
    body: extractBody(source),
    thumbnail: extractThumbnail(source),
    labels: labels(source),
    href: `/articles/${year}/${month}/${day}/${file.replace(".astro", "")}`,
    publishedAt: `${year}-${month}-${day}`
  }
}

export const ArticleFetcher = () => {
  // あまりにもなのでなんとかする
  return fs.readdirSync(baseDir).flatMap((year) => {
    return fs.readdirSync(`${baseDir}/${year}`).flatMap((month) => {
      return fs.readdirSync(`${baseDir}/${year}/${month}`).flatMap((day) => {
        return fs.readdirSync(`${baseDir}/${year}/${month}/${day}`).flatMap((file) => {
          return buildBlog(year, month, day, file);
        });
      });
    });
  }).reverse();
}