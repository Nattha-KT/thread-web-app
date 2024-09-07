module.exports = {
  // ตรวจสอบ TypeScript files
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  // Lint และฟอร์แมต TypeScript และ JavaScript
  '**/*.(ts|tsx|js)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // ฟอร์แมต MarkDown และ JSON
  '**/*.(md|json)': (filenames) => `npx prettier --write ${filenames.join(' ')}`,
};