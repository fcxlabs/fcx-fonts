const fs = require('fs');
const path = require('path');
const packageJson = require('./package.json');
const colors = packageJson.keywords.join(', ');
const dependencyFolder = path.dirname(require.resolve('./package.json'));
const scssFilePath = path.join(dependencyFolder, 'generated-styles.scss');
const stylesScssFilePath = path.join(__dirname, 'src/styles.scss'); // Verificar se o Node.js está instalado
if (typeof process === 'undefined' || !process.versions || !process.versions.node) {
  console.warn('O Node.js não está instalado. A execução do script de criação do SCSS foi pulada.');
  console.log('A instalação da dependência continuará normalmente.');
} else {
  // Verificar se o arquivo styles.scss existe
  if (!fs.existsSync(stylesScssFilePath)) {
    console.warn('O arquivo styles.scss não foi encontrado na pasta do projeto.');
    console.log('A instalação da dependência continuará normalmente.');
  } else {
    try {
      const scssContent = `// Generated SCSS file // Colors: ${colors} $colors: ( // Defina suas cores aqui ); `;
      fs.writeFileSync(scssFilePath, scssContent, 'utf8');
      console.log('Arquivo SCSS gerado com sucesso.'); // Adicionar declaração de importação ao styles.scss
      const stylesScssContent = `@import '${path.relative(
        path.dirname(stylesScssFilePath),
        scssFilePath,
      )}';\n${fs.readFileSync(stylesScssFilePath, 'utf8')}`;
      fs.writeFileSync(stylesScssFilePath, stylesScssContent, 'utf8');
      console.log('Declaração de importação adicionada ao arquivo styles.scss.');
    } catch (error) {
      console.error('Ocorreu um erro ao gerar o arquivo SCSS:', error);
      console.log('A instalação da dependência continuará normalmente.');
    }
  }
}
