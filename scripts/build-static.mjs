import { cp, lstat, mkdir, readdir, rm, stat } from 'node:fs/promises';
import { dirname, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = resolve(siteRoot, 'dist');
const runtimeFiles = [
  'index.html',
  'styles.css',
  'editorial.css',
  'script.js',
  'immersive.css',
  'immersive.js',
  'experience-cmi.html',
  'experience-cmi.js',
];

function insideSiteRoot(path) {
  const rel = relative(siteRoot, path);
  return rel && !rel.startsWith(`..${sep}`) && rel !== '..';
}

async function assertRegularTree(path) {
  const entry = await lstat(path);
  if (entry.isSymbolicLink()) {
    throw new Error(`Refusing symbolic link in release input: ${relative(siteRoot, path)}`);
  }
  if (entry.isDirectory()) {
    for (const name of await readdir(path)) {
      await assertRegularTree(resolve(path, name));
    }
    return;
  }
  if (!entry.isFile()) {
    throw new Error(`Refusing non-file release input: ${relative(siteRoot, path)}`);
  }
}

async function assertInput(path) {
  if (!insideSiteRoot(path)) throw new Error(`Release input escapes site root: ${path}`);
  await assertRegularTree(path);
  if (!(await stat(path)).isFile()) throw new Error(`Expected a file: ${relative(siteRoot, path)}`);
}

async function copyInput(relativePath) {
  const source = resolve(siteRoot, relativePath);
  await assertInput(source);
  await cp(source, resolve(outputRoot, relativePath), { force: true, verbatimSymlinks: true });
}

await assertRegularTree(resolve(siteRoot, 'assets'));
await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await Promise.all(runtimeFiles.map(copyInput));
await cp(resolve(siteRoot, 'assets'), resolve(outputRoot, 'assets'), { recursive: true, force: true, verbatimSymlinks: true });

console.log(`Built ${runtimeFiles.length} runtime files and assets/ into ${relative(siteRoot, outputRoot)}/`);
