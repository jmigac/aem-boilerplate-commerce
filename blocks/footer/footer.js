export default async function decorate(block) {
  const resp = await fetch('/footer.plain.html');
  const html = await resp.text();
  const footer = document.createElement('div');
  footer.innerHTML = html;
  block.append(footer);
}
