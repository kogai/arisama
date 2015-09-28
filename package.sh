mkdir build
cp -r ./lib ./build/lib
cp index.html ./build/index.html
cp index.js ./build/index.js
cp main.js ./build/main.js
cp package.json ./build/package.json
cp style.css ./build/style.css

$(npm bin)/electron-packager ./build SlackStatus --platform=darwin --arch=x64 --version=0.33.1 --out ./release/ --overwrite --prune
zip -9 -r ./release/release.zip ./release/SlackStatus-darwin-x64/
rm -r ./build
