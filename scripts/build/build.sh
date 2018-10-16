echo "---- BUILD React ----"

# build
yarn build || { echo "React Build failed" ;exit 1; }
